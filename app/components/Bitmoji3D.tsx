"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Bitmoji3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;
    camera.position.y = 0.5;

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
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const backLight = new THREE.DirectionalLight(0x8B6914, 0.3);
    backLight.position.set(-3, -2, -3);
    scene.add(backLight);

    const group = new THREE.Group();

    // Body
    const bodyGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x8B6914,
      roughness: 0.3,
      metalness: 0.1,
      emissive: 0xE8741A,
      emissiveIntensity: 0.05,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.2;
    group.add(body);

    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({
      color: 0x2D1B0F,
      roughness: 0.2,
    });
    const eyeLeft = new THREE.Mesh(eyeGeometry, eyeMaterial);
    eyeLeft.position.set(-0.4, 0.4, 1.1);
    group.add(eyeLeft);

    const eyeRight = new THREE.Mesh(eyeGeometry, eyeMaterial);
    eyeRight.position.set(0.4, 0.4, 1.1);
    group.add(eyeRight);

    // Smile
    const smileGeometry = new THREE.TorusGeometry(0.3, 0.05, 8, 16, Math.PI);
    const smileMaterial = new THREE.MeshStandardMaterial({
      color: 0x2D1B0F,
      roughness: 0.5,
    });
    const smile = new THREE.Mesh(smileGeometry, smileMaterial);
    smile.position.set(0, -0.05, 1.15);
    smile.rotation.x = 0.1;
    smile.rotation.z = 0.1;
    group.add(smile);

    // Arm
    const armGeometry = new THREE.CylinderGeometry(0.12, 0.15, 0.9, 8);
    const armMaterial = new THREE.MeshStandardMaterial({
      color: 0xC07C40,
      roughness: 0.5,
    });
    const arm = new THREE.Mesh(armGeometry, armMaterial);
    arm.position.set(1.1, 0.3, 0);
    arm.rotation.z = -0.8;
    arm.rotation.x = 0.3;
    group.add(arm);

    // Hand
    const handGeometry = new THREE.SphereGeometry(0.18, 8, 8);
    const handMaterial = new THREE.MeshStandardMaterial({
      color: 0xC07C40,
      roughness: 0.5,
    });
    const hand = new THREE.Mesh(handGeometry, handMaterial);
    hand.position.set(1.5, 0.8, 0.2);
    group.add(hand);

    const ringGeometry = new THREE.RingGeometry(1.5, 1.8, 32);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xE8741A,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.position.y = 0;
    ring.rotation.x = -Math.PI / 2;
    group.add(ring);

    scene.add(group);

    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      time += 0.02;

      group.position.y = Math.sin(time * 0.5) * 0.15;
      group.rotation.y = Math.sin(time * 0.2) * 0.05;

      if (arm) {
        arm.rotation.z = -0.8 + Math.sin(time * 1.5) * 0.15;
        arm.rotation.x = 0.3 + Math.sin(time * 1.2) * 0.05;
      }

      if (ring) {
        ring.scale.setScalar(1 + Math.sin(time * 0.5) * 0.03);
        ring.material.opacity = 0.15 + Math.sin(time * 0.5) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
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
      className="w-full h-full min-h-[300px] md:min-h-[400px] rounded-2xl"
    />
  );
}