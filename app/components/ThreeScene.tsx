"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeSceneProps {
  className?: string;
}

export default function ThreeScene({ className = "" }: ThreeSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xE8741A, 0.5, 20);
    pointLight.position.set(-3, 1, 2);
    scene.add(pointLight);

    // Camera
    const cameraGroup = new THREE.Group();
    const bodyGeo = new THREE.BoxGeometry(0.8, 0.5, 0.6);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x2D1B0F,
      roughness: 0.6,
      metalness: 0.3,
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0;
    cameraGroup.add(body);

    const lensGeo = new THREE.CylinderGeometry(0.25, 0.3, 0.3, 16);
    const lensMat = new THREE.MeshStandardMaterial({
      color: 0x1A1A2E,
      roughness: 0.2,
      metalness: 0.8,
    });
    const lens = new THREE.Mesh(lensGeo, lensMat);
    lens.position.set(0, 0, 0.45);
    lens.rotation.x = Math.PI / 2;
    cameraGroup.add(lens);

    const glassGeo = new THREE.CircleGeometry(0.2, 16);
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x4A90D9,
      roughness: 0.1,
      metalness: 0.1,
      transparent: true,
      opacity: 0.6,
      emissive: 0x4A90D9,
      emissiveIntensity: 0.1,
    });
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.position.set(0, 0, 0.6);
    cameraGroup.add(glass);

    cameraGroup.position.set(-2.5, 0.5, 0);
    scene.add(cameraGroup);

    // Sun
    const sunGeo = new THREE.SphereGeometry(0.8, 32, 32);
    const sunMat = new THREE.MeshStandardMaterial({
      color: 0xE8741A,
      roughness: 0.1,
      metalness: 0.1,
      emissive: 0xE8741A,
      emissiveIntensity: 0.3,
    });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    sun.position.set(2.8, 0.5, 0);

    const glowGeo = new THREE.SphereGeometry(1.1, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xE8741A,
      transparent: true,
      opacity: 0.1,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.copy(sun.position);
    scene.add(sun);
    scene.add(glow);

    // Code symbols
    const symbols = ["< />", "{ }", "()", "⚡", "💻"];
    const symbolMeshes: THREE.Mesh[] = [];

    symbols.forEach((symbol, i) => {
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, 128, 128);
      ctx.fillStyle = "#8B6914";
      ctx.font = "bold 60px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(symbol, 64, 64);

      const texture = new THREE.CanvasTexture(canvas);
      const geometry = new THREE.PlaneGeometry(0.7, 0.7);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.6,
      });
      const mesh = new THREE.Mesh(geometry, material);
      const angle = (i / symbols.length) * Math.PI * 2;
      const radius = 1.5;
      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 0.5) * 0.8 + 1.5,
        Math.sin(angle) * radius * 0.5
      );
      scene.add(mesh);
      symbolMeshes.push(mesh);
    });

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      cameraGroup.rotation.y = targetX * 0.3;
      cameraGroup.rotation.x = targetY * 0.1;
      cameraGroup.position.y = 0.5 + Math.sin(time * 0.5) * 0.1;

      const pulse = 1 + Math.sin(time * 0.8) * 0.05;
      sun.scale.set(pulse, pulse, pulse);
      glow.scale.set(
        1 + Math.sin(time * 0.6) * 0.05,
        1 + Math.sin(time * 0.6) * 0.05,
        1 + Math.sin(time * 0.6) * 0.05
      );
      glow.material.opacity = 0.1 + Math.sin(time * 0.6) * 0.05;

      symbolMeshes.forEach((mesh, i) => {
        mesh.rotation.z += 0.01;
        mesh.position.y += Math.sin(time * 0.5 + i) * 0.001;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden ${className}`}
    />
  );
}