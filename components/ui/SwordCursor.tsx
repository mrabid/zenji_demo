"use client";

import { useEffect, useState } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, select, textarea, label, summary, [tabindex]:not([tabindex="-1"])';

export default function SwordCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressing, setPressing] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) return;

    setEnabled(true);
    document.documentElement.setAttribute("data-js-cursor", "1");

    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
      setVisible(true);

      const target = document.elementFromPoint(event.clientX, event.clientY);
      const interactive = target?.closest(INTERACTIVE_SELECTOR);
      const isDisabled =
        interactive instanceof HTMLButtonElement && interactive.disabled;

      setHovering(!!interactive && !isDisabled);
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
      document.documentElement.removeAttribute("data-js-cursor");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  if (!enabled || !visible) return null;

  const scale = pressing ? 0.92 : hovering ? 1.18 : 1;
  const ringSize = hovering ? 32 : 20;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100000] select-none overflow-hidden motion-reduce:hidden"
    >
      <div
        className="pointer-events-none fixed left-0 top-0"
        style={{
          transform: `translateX(${pos.x}px) translateY(${pos.y}px)`,
        }}
      >
        <div
          className="pointer-events-none relative flex items-center justify-center transition-transform duration-200 ease-out"
          style={{
            transform: `scale(${scale}) rotate(-35deg)`,
          }}
        >
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] filter"
          >
            <path
              d="M23 2L28 18L25 40L23 44L21 40L18 18L23 2Z"
              fillOpacity="0.95"
              style={{
                fill: hovering
                  ? "var(--cursor-blade-hover)"
                  : "var(--cursor-blade)",
              }}
            />
            <path
              d="M23 2L23 44"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
              style={{
                stroke: hovering
                  ? "var(--cursor-edge-hover)"
                  : "var(--cursor-edge)",
              }}
            />
            <path
              d="M23 2L28 18L23 24"
              fillOpacity="0.8"
              style={{
                fill: hovering
                  ? "var(--cursor-bevel-hover)"
                  : "var(--cursor-bevel)",
              }}
            />
            <line
              x1="15"
              y1="34"
              x2="31"
              y2="34"
              strokeWidth="2.8"
              strokeLinecap="round"
              style={{
                stroke: hovering
                  ? "var(--cursor-blade-hover)"
                  : "var(--cursor-blade)",
              }}
            />
            <line
              x1="23"
              y1="34"
              x2="23"
              y2="44"
              strokeWidth="4"
              strokeLinecap="square"
              style={{ stroke: "var(--cursor-grip)" }}
            />
            <circle
              cx="23"
              cy="37.5"
              r="1"
              style={{ fill: "var(--cursor-pin-1)" }}
            />
            <circle
              cx="23"
              cy="41.5"
              r="1"
              style={{ fill: "var(--cursor-pin-2)" }}
            />
          </svg>
          {hovering && (
            <div
              className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full blur-[2px]"
              style={{
                background: "var(--cursor-pulse)",
                opacity: 0.55,
              }}
            />
          )}
        </div>
      </div>

      <div
        className="pointer-events-none fixed left-0 top-0 rounded-full transition-all duration-200 ease-out"
        style={{
          transform: `translateX(${pos.x}px) translateY(${pos.y}px)`,
          borderStyle: "solid",
          borderColor: hovering
            ? "var(--cursor-ring-hover)"
            : "var(--cursor-ring)",
          width: ringSize,
          height: ringSize,
          borderWidth: 1,
          opacity: hovering ? 0.32 : 0.3,
        }}
      />
    </div>
  );
}
