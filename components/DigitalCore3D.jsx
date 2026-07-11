"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot, Float, Stars, MeshTransmissionMaterial, Environment } from "@react-three/drei";

// ─── Device Tier — runs only client-side after mount ─────────────────────────
function getDeviceTier() {
  if (typeof window === "undefined") return "desktop";
  const w = window.innerWidth;
  const sw = window.screen?.width ?? w;
  const isMobile = sw <= 768 || w <= 768;
  const isTablet = !isMobile && (sw <= 1024 || w <= 1024);
  if (isMobile) return "mobile";
  if (isTablet) return "tablet";
  return "desktop";
}

// ─── Per-tier config ──────────────────────────────────────────────────────────
const TIER_CONFIG = {
  desktop: {
    torusArgs: [2.5, 0.8, 128, 32],
    starsCount: 600,
    particleCount: 200,
    dpr: [1, 2],
    useTransmission: true,  // full glass effect
    floatSpeed: 1.5,
    antialias: true,
    objectPosition: [4, 0, 0],
    cameraZ: 12,
    cameraFov: 45,
  },
  tablet: {
    torusArgs: [2.2, 0.75, 80, 24],
    starsCount: 250,
    particleCount: 60,
    dpr: [1, 1.5],
    useTransmission: false, // chrome metallic (no FBO)
    floatSpeed: 1.0,
    antialias: false,
    objectPosition: [2.5, 0, 0],
    cameraZ: 12,
    cameraFov: 48,
  },
  mobile: {
    torusArgs: [2.0, 0.7, 56, 18],
    starsCount: 130,
    particleCount: 0,
    dpr: [1, 1],
    useTransmission: false, // disabled transmission (FBO pass) to prevent mobile freezes
    floatSpeed: 0.8,
    antialias: false,
    // Centered slightly right so it's behind the text like PC
    objectPosition: [1.5, 0.5, 0],
    cameraZ: 10,
    cameraFov: 52,
  },
};

// ─── Desktop & Mobile: full glass transmission material ──────────────────────
function TorusKnotDesktop({ args, isMobile }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.15;
    ref.current.rotation.x += delta * 0.08;
    ref.current.rotation.z -= delta * 0.04;
  });
  return (
    <TorusKnot ref={ref} args={args} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <MeshTransmissionMaterial
        backside
        backsideThickness={3}
        thickness={1.5}
        chromaticAberration={0.04}
        anisotropicBlur={0.08}
        clearcoat={1}
        clearcoatRoughness={0.1}
        envMapIntensity={2}
        resolution={isMobile ? 128 : 512} // Lower resolution on mobile for performance
        transmission={1}
        roughness={0.1}
        metalness={0.1}
        color="#A78BFA"
        attenuationColor="#7C3AED"
        attenuationDistance={1}
      />
    </TorusKnot>
  );
}

// ─── Mobile/Tablet: dark chrome metallic — looks like PC, no FBO cost ─────────
// Uses meshPhysicalMaterial + Environment so reflections match the dark chrome
// look of the desktop glass material without needing the transmission FBO pass.
function TorusKnotChrome({ args }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.15;
    ref.current.rotation.x += delta * 0.08;
    ref.current.rotation.z -= delta * 0.04;
  });
  return (
    <TorusKnot ref={ref} args={args} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      {/*
        Dark near-black purple base + near-perfect mirror metalness + clearcoat.
        The Environment map provides the chrome reflections that make it look
        like the PC glass version (dark with purple/blue highlights).
      */}
      <meshPhysicalMaterial
        color="#7C3AED"
        emissive="#2e1065"
        emissiveIntensity={0.2}
        metalness={0.9}
        roughness={0.08}
        clearcoat={1}
        clearcoatRoughness={0.05}
        envMapIntensity={2.5}
        reflectivity={1}
      />
    </TorusKnot>
  );
}

// ─── Particles ────────────────────────────────────────────────────────────────
function Particles({ count }) {
  const ref = useRef();
  const positions = useMemo(() => {
    if (count === 0) return new Float32Array(0);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.random() * 8;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current && count > 0) ref.current.rotation.y -= delta * 0.015;
  });

  if (count === 0) return null;

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#A78BFA"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

// ─── Scene ────────────────────────────────────────────────────────────────────
function Scene({ config }) {
  return (
    <>
      {/*
        Lighting designed to replicate the PC look on mobile:
        - Dim ambient so dark areas stay dark (chrome effect)
        - Strong top-right key light for the specular highlight stripe
        - Red/pink fill from bottom-left (visible in PC screenshot)
        - Purple center fill
      */}
      <ambientLight intensity={0.15} />
      <directionalLight position={[8, 10, 6]} intensity={2.0} color="#b8a4f5" />
      <pointLight position={[-8, -6, -4]} intensity={2.5} color="#F43F5E" />
      <pointLight position={[2, 4, 4]} intensity={1.2} color="#7C3AED" />
      <pointLight position={[0, -4, 2]} intensity={0.6} color="#1a0540" />

      {/*
        Environment always loaded — desktop uses "city" for transmission,
        mobile/tablet uses "night" for dark chrome reflections that match
        the dark metallic look in the PC screenshot.
      */}
      {/* Use city environment for both so the reflections are bright and consistent */}
      <Environment preset="city" />

      <Float
        position={config.objectPosition}
        speed={config.floatSpeed}
        rotationIntensity={0.3}
        floatIntensity={0.6}
      >
        {config.useTransmission ? (
          <TorusKnotDesktop args={config.torusArgs} isMobile={config.dpr[1] === 1} />
        ) : (
          <TorusKnotChrome args={config.torusArgs} />
        )}
      </Float>

      <Particles count={config.particleCount} />

      <Stars
        radius={50}
        depth={50}
        count={config.starsCount}
        factor={3}
        saturation={0.5}
        fade
        speed={0.3}
      />
    </>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function DigitalCore3D() {
  const [tier, setTier] = useState("desktop");

  useEffect(() => {
    setTier(getDeviceTier());
    const onResize = () => setTier(getDeviceTier());
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const config = TIER_CONFIG[tier];

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-obsidian"
      aria-hidden="true"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-purple-900/20 blur-[120px] rounded-full z-0 pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, config.cameraZ], fov: config.cameraFov }}
        dpr={config.dpr}
        gl={{
          antialias: config.antialias,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
          preserveDrawingBuffer: false,
          failIfMajorPerformanceCaveat: false,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          touchAction: "none",
          pointerEvents: "none",
        }}
      >
        <Scene config={config} />
      </Canvas>
    </div>
  );
}
