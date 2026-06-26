"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// Coil hélicoïdal glossy (DA PAWRISE) — vraie 3D, thémable aux couleurs de la charte.
function Coil() {
  const ref = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const N = 260;
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      const a = t * Math.PI * 2 * 3.1; // ~3 tours
      const r = 1.15;
      const y = (t - 0.5) * 3.6;
      pts.push(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r));
    }
    const curve = new THREE.CatmullRomCurve3(pts);
    return new THREE.TubeGeometry(curve, N, 0.46, 28, false);
  }, []);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.28;
  });
  return (
    <mesh ref={ref} geometry={geometry} rotation={[0.25, 0, 0.4]}>
      <meshStandardMaterial color="#13c466" metalness={0.4} roughness={0.16} envMapIntensity={1.25} />
    </mesh>
  );
}

export default function HeroCoil() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <Canvas
      className="hero-coil3d"
      camera={{ position: [0, 0, 6], fov: 38 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      aria-hidden
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 5]} intensity={1.5} />
      <pointLight position={[-3, -2, 2]} intensity={2.2} color="#d3fc72" />
      <pointLight position={[2, 3, -2]} intensity={1.2} color="#01aabb" />
      <Coil />
      <Environment preset="city" />
    </Canvas>
  );
}
