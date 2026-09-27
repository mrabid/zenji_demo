"use client";

import { useEffect, useState } from "react";

export default function SwordCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pressing, setPressing] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setPressing(true);
    const onUp = () => setPressing(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  if (!enabled || !visible) return null;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999] motion-reduce:hidden"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
      aria-hidden
    >
      <div
        className={`relative transition-transform duration-150 ease-out ${
          pressing ? "scale-90 rotate-[-6deg]" : "scale-100"
        }`}
        style={{ marginLeft: "-2px", marginTop: "-2px" }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
        >
          <circle
            cx="3.5"
            cy="3.5"
            r="3"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.75"
            fill="none"
          />
          <path
            d="M3.5 3.5L20 20"
            stroke="url(#blade)"
            strokeWidth="3.25"
            strokeLinecap="round"
          />
          <path
            d="M3.5 3.5L20 20"
            stroke="rgba(255,220,160,0.35)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <rect
            x="17.5"
            y="16.8"
            width="7"
            height="1.6"
            rx="0.4"
            transform="rotate(45 17.5 16.8)"
            fill="#0a0a0a"
          />
          <rect
            x="19.8"
            y="19"
            width="4.5"
            height="2.2"
            rx="0.5"
            transform="rotate(45 19.8 19)"
            fill="#6b4a2e"
          />
          <circle cx="23.2" cy="22.4" r="1.35" fill="#d4a017" />
          <defs>
            <linearGradient id="blade" x1="3.5" y1="3.5" x2="20" y2="20">
              <stop stopColor="#8b5a2b" />
              <stop offset="0.45" stopColor="#c49a6c" />
              <stop offset="1" stopColor="#5c3d1e" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
