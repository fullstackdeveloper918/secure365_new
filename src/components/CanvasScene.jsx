'use client';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';

export default function CanvasScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(ambientLight, pointLight);

    // Sphere Group
    const spheres = [];
    const sphereCount = 50;

    for (let i = 0; i < sphereCount; i++) {
      const geometry = new THREE.SphereGeometry(0.3, 32, 32);
      const material = new THREE.MeshStandardMaterial({
        color: 0x0077ff,
        emissive: 0x111111,
        roughness: 0.5,
        metalness: 0.6,
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      spheres.push(sphere);
      scene.add(sphere);
    }

    // Animation
    const animate = function () {
      requestAnimationFrame(animate);

      spheres.forEach((sphere, i) => {
        sphere.rotation.y += 0.005;
        sphere.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      // mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        overflow: 'hidden',
      }}
    />
  );
}
