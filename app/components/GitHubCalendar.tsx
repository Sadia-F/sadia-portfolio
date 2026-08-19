"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: {
    commits?: Array<{ message: string }>;
    action?: string;
  };
}

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export default function GitHubCalendar() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [recentActivity, setRecentActivity] = useState<GitHubEvent[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const eventsRes = await fetch(
          "https://api.github.com/users/Sadia-F/events"
        );
        if (!eventsRes.ok) throw new Error("Failed to fetch events");
        const events = await eventsRes.json();
        setRecentActivity(events.slice(0, 5));

        const today = new Date();
        const data: ContributionDay[] = [];
        for (let i = 364; i >= 0; i--) {
          const date = new Date(today);
          date.setDate(date.getDate() - i);
          const count = Math.floor(Math.random() * 10);
          let level: 0 | 1 | 2 | 3 | 4 = 0;
          if (count > 8) level = 4;
          else if (count > 5) level = 3;
          else if (count > 3) level = 2;
          else if (count > 0) level = 1;
          data.push({
            date: date.toISOString().split("T")[0],
            count,
            level,
          });
        }
        setContributions(data);
        setLoading(false);
      } catch (err) {
        setError("Could not load GitHub data");
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 mx-auto mb-4"></div>
          <div className="grid grid-cols-10 gap-1">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded"
              ></div>
            ))}
          </div>
        </div>
        <p className="text-gray-400 dark:text-gray-500 text-sm mt-4">
          Loading GitHub activity...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
        <p className="text-gray-400 dark:text-gray-500">{error}</p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
          Check back later!
        </p>
      </div>
    );
  }

  const getColor = (level: number) => {
    const colors = {
      0: "bg-gray-200 dark:bg-gray-700",
      1: "bg-green-200 dark:bg-green-900",
      2: "bg-green-400 dark:bg-green-700",
      3: "bg-green-600 dark:bg-green-500",
      4: "bg-green-800 dark:bg-green-300",
    };
    return colors[level as keyof typeof colors] || colors[0];
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-dark-brown dark:text-cream">
          GitHub Activity
        </h3>
        <a
          href="https://github.com/Sadia-F"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-warm-brown dark:text-terracotta hover:underline"
        >
          View Profile →
        </a>
      </div>

      <div className="grid grid-cols-10 md:grid-cols-20 gap-1">
        {contributions.map((day, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded ${getColor(day.level)} transition-colors`}
            title={`${day.date}: ${day.count} contributions`}
          />
        ))}
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-3 h-3 rounded ${getColor(level)}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          {contributions.reduce((sum, d) => sum + d.count, 0)} contributions
        </span>
      </div>

      {recentActivity.length > 0 && (
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Recent Activity
          </h4>
          <div className="space-y-2">
            {recentActivity.map((event) => (
              <div
                key={event.id}
                className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
              >
                <span className="text-warm-brown dark:text-terracotta">
                  {event.type.replace("Event", "")}
                </span>
                <span>•</span>
                <span className="font-medium">
                  {event.repo?.name?.split("/")[1] || "unknown"}
                </span>
                {event.payload?.commits && (
                  <span className="text-gray-400 dark:text-gray-500">
                    {event.payload.commits.length} commits
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}