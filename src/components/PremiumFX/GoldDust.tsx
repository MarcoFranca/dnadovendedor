// components/PremiumFX/GoldDust.tsx
"use client";
import React from "react";

const base = Array.from({ length: 18 }).map((_, i) => ({
    left: `${10 + ((i * 5.1) % 80)}%`,
    top: `${15 + ((i * 7.3) % 65)}%`,
    size: 4 + (i % 5),
    delay: `${i * 0.7}s`,
}));

export default function GoldDust() {
    // menos partículas em telas pequenas
    const dots = typeof window !== "undefined" && window.innerWidth < 640 ? base.slice(0, 8) : base;
    return (
        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
            {dots.map((d, i) => (
                <span
                    key={i}
                    className="absolute rounded-full bg-amber-300/18 blur-[2px] motion-safe:animate-[floatDust_10s_ease-in-out_infinite]"
                    style={{ left: d.left, top: d.top, width: d.size, height: d.size, animationDelay: d.delay }}
                    aria-hidden
                />
            ))}
        </div>
    );
}
