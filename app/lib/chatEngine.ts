import {
  personalInfo,
  careerNarrative,
  education,
  experience,
  projects,
  techStack,
  skills,
  leadership,
  awards,
  photography,
  chatbotData,
  now,
  timelineEvents,
} from "../data";

// ================================================================
// Portfolio chat engine — answers ANY question from portfolio data.
// 1) Strong match against curated answers → return curated answer.
// 2) Otherwise retrieve the most relevant facts from the knowledge
//    base (projects, experience, education, etc.) and compose one.
// 3) Otherwise a helpful fallback that points to what it can answer.
// ================================================================

type KnowledgeEntry = {
  title: string;
  keywords: string[];
  content: string;
  section: string;
};

const STOPWORDS = new Set([
  "the", "and", "for", "are", "you", "your", "what", "why", "how", "who", "which",
  "does", "have", "has", "was", "were", "about", "with", "from", "that", "this",
  "she", "her", "its", "can", "could", "would", "should", "tell", "hello", "hey",
  "there", "when", "where", "say", "made", "look", "going",
]);

const normalize = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const tokenize = (text: string): string[] =>
  normalize(text)
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOPWORDS.has(w));

// Sources of knowledge ----------------------------------------------------

function curatedEntries(): KnowledgeEntry[] {
  return Object.values(chatbotData.answers).map((a) => ({
    title: a.keywords[0],
    keywords: a.keywords,
    content: a.answer,
    section: "chat",
  }));
}

function projectEntries(): KnowledgeEntry[] {
  return projects.map((p) => ({
    title: p.title,
    keywords: [
      ...tokenize(p.title),
      ...p.technologies.map((t) => t.toLowerCase()),
      ...tokenize(p.description),
      ...tokenize(p.problem || ""),
    ],
    content: `${p.title}: ${p.problem} ${p.solution} ${
      p.metrics && p.metrics.length ? "Key results — " + p.metrics.join("; ") : ""
    } Built with ${p.technologies.join(", ")}.`,
    section: "Projects",
  }));
}

function experienceEntries(): KnowledgeEntry[] {
  return experience.map((e) => ({
    title: e.role,
    keywords: [
      ...tokenize(e.role),
      ...tokenize(e.company),
      ...e.technologies.map((t) => t.toLowerCase()),
      "intern",
      "internship",
      "work",
      "job",
    ],
    content: `At ${e.company} I worked as ${e.role} (${e.duration}). ${e.achievements.join(" ")}`,
    section: "Experience",
  }));
}

function educationEntries(): KnowledgeEntry[] {
  const e = education[0];
  return [
    {
      title: "Education",
      keywords: [
        "school", "college", "university", "study", "studying", "degree", "major",
        "nyit", "education", "student",
      ],
      content:
        `I'm studying ${e.degree} with a concentration in ${e.concentration} at ${e.school}, graduating ${e.expectedGraduation}. My GPA is ${e.gpa}, and I've made ${e.honors.join(" and ")}.`,
      section: "Education",
    },
    {
      title: "Coursework",
      keywords: ["coursework", "courses", "classes", "course", "curriculum", "subjects"],
      content: `My coursework spans ${e.coursework.join(", ")}.`,
      section: "Education",
    },
  ];
}

function leadershipEntries(): KnowledgeEntry[] {
  return leadership.map((l) => ({
    title: l.role,
    keywords: [...tokenize(l.role), ...tokenize(l.organization)],
    content: `As ${l.role} of ${l.organization} (${l.duration}), I ${l.achievements[0]}`,
    section: "Leadership",
  }));
}

function awardsEntries(): KnowledgeEntry[] {
  return [
    {
      title: "Awards",
      keywords: ["award", "awards", "honor", "achievement", "win", "recognition", "recognized"],
      content: awards.map((a) => `${a.title} — ${a.organization} (${a.year})`).join("; "),
      section: "Education",
    },
  ];
}

function skillEntries(): KnowledgeEntry[] {
  return [
    {
      title: "Skills",
      keywords: ["skill", "skills", "strength", "technical", "ability", "capable", "good", "stack"],
      content: `My skills include ${skills.join(", ")}.`,
      section: "Tech Stack",
    },
    ...techStack.map((t) => ({
      title: t.name,
      keywords: [
        t.name.toLowerCase(),
        ...tokenize(t.name),
        "language", "framework", "technology", "tool",
      ],
      content: `${t.name} — I rate my proficiency around ${t.level}% and use it in real projects. Check the Tech Stack section for the full list.`,
      section: "Tech Stack",
    })),
    {
      title: "Languages",
      keywords: ["languages", "language", "code in", "programming"],
      content: `I work with ${techStack.map((t) => t.name).join(", ")}.`,
      section: "Tech Stack",
    },
  ];
}

function miscEntries(): KnowledgeEntry[] {
  return [
    {
      title: "Currently",
      keywords: ["currently", "now", "up to", "working on", "busy", "latest"],
      content: now.items.join(" "),
      section: "Latest",
    },
    {
      title: "Photography",
      keywords: ["photography", "photographer", "photo", "photos", "camera", "hobby", "hobbies", "sunsets"],
      content: photography.intro,
      section: "Photography",
    },
    {
      title: "Timeline",
      keywords: ["timeline", "story", "history", "journey", "background", "originally"],
      content: timelineEvents.map((t) => `${t.year} — ${t.title}: ${t.description}`).join(" "),
      section: "Timeline",
    },
    {
      title: "Career goals",
      keywords: [...careerNarrative.seeking.map((r) => r.toLowerCase()), "goal", "goals", "role", "internship", "job"],
      content: careerNarrative.body,
      section: "About",
    },
  ];
}

const KNOWLEDGE: KnowledgeEntry[] = [
  ...curatedEntries(),
  ...projectEntries(),
  ...experienceEntries(),
  ...educationEntries(),
  ...leadershipEntries(),
  ...awardsEntries(),
  ...skillEntries(),
  ...miscEntries(),
];

// Scoring ----------------------------------------------------------------

function scoreEntry(question: string, questionWords: Set<string>, keywords: string[]): { score: number; matched: string[] } {
  const allWords = tokenize(keywords.join(" "));
  let score = 0;
  const matched: string[] = [];

  for (const kw of keywords) {
    const phrase = normalize(kw);
    if (!phrase) continue;

    if (question.includes(phrase)) {
      const bonus = allWords.length >= 2 ? 6 : 4;
      score += bonus;
      matched.push(phrase);
      continue;
    }

    const kwWords = tokenize(phrase);
    if (kwWords.length === 0) continue;

    let hits = 0;
    for (const w of kwWords) {
      if (questionWords.has(w)) {
        hits += 1;
      } else {
        for (const qw of questionWords) {
          if (w.length >= 4 && qw.length >= 4 && (qw.startsWith(w) || w.startsWith(qw))) {
            hits += 0.5;
            break;
          }
        }
      }
    }
    if (hits > 0) {
      const ratio = hits / kwWords.length;
      score += ratio * 4;
      if (kwWords.length >= 2 && ratio >= 0.6) matched.push(phrase);
    }
  }

  return { score, matched };
}

// Answer selection --------------------------------------------------------

const FALLBACK =
  `Hmm, I don't have a direct answer for that one — but I can tell you a lot about my portfolio! 😊 ` +
  `Ask me about my projects (like the Badminton Team Manager or Campus Slate CMS), my internships at NutriScan and IQVentory, ` +
  `my education at NYIT, skills and tech stack, leadership roles, awards, photography, or how to contact me. ` +
  `You can also explore the sections of this page — the Projects and Experience cards have all the details.`;

export function answerFromPortfolio(rawQuestion: string): string {
  const question = normalize(rawQuestion);
  const questionWords = new Set(tokenize(rawQuestion));
  const previousQuestion = questionWords;

  if (!question) return FALLBACK;

  // 1) Strong curated match
  let bestCurated: { score: number; entry: KnowledgeEntry } | null = null;
  for (const entry of KNOWLEDGE) {
    if (entry.section !== "chat") continue;
    const { score } = scoreEntry(question, previousQuestion, entry.keywords);
    if (!bestCurated || score > bestCurated.score) {
      bestCurated = { score, entry };
    }
  }

  if (bestCurated && bestCurated.score >= 6) {
    return bestCurated.entry.content;
  }

  // 2) Retrieve from knowledge base
  const ranked = KNOWLEDGE
    .map((entry) => ({ entry, ...scoreEntry(question, previousQuestion, entry.keywords) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  const top = ranked.slice(0, 3);
  if (top.length > 0) {
    const facts = top.map((r) => r.entry.content);
    const sections = [...new Set(top.map((r) => r.entry.section))].filter((s) => s !== "chat");
    return (
      `Based on my portfolio, here's what I found: 🤖\n\n` +
      facts.map((f) => `• ${f}`).join("\n\n") +
      (sections.length ? `\n\nYou can find more in the ${sections.join(", ")} section.` : "")
    );
  }

  return FALLBACK;
}

export function suggestTopics(rawQuestion: string): string[] {
  const questionWords = new Set(tokenize(rawQuestion));
  return KNOWLEDGE.map((e) => ({ e, s: scoreEntry(normalize(rawQuestion), questionWords, e.keywords).score }))
    .sort((a, b) => b.s - a.s)
    .slice(0, 2)
    .map((x) => x.e.title);
}

export function introLine(): string {
  return `${personalInfo.name} — I can answer any question straight from the portfolio. Try asking about her projects, internships, skills, or anything else!`;
}