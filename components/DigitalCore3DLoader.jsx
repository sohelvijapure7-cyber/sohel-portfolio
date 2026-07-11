"use client";

import dynamic from "next/dynamic";

// Lazy-load the heavy WebGL canvas — never blocks First Contentful Paint
const DigitalCore3D = dynamic(() => import("./DigitalCore3D"), {
  ssr: false,
  loading: () => (
    // Lightweight CSS-only placeholder — maintains the background glow with zero GPU cost
    <div
      className="fixed inset-0 z-0 pointer-events-none bg-obsidian"
      aria-hidden="true"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-purple-900/20 blur-[150px] rounded-full" />
    </div>
  ),
});

export default function DigitalCore3DLoader() {
  return <DigitalCore3D />;
}
