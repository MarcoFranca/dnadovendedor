// components/PremiumFX/FancyCard.tsx
"use client";
import React from "react";

type FancyCardProps = React.PropsWithChildren<{
    className?: string;
    animated?: boolean; // novo
}>;

export const FancyCard: React.FC<FancyCardProps> = ({ children, className = "", animated = false }) => (
    <div className={`relative rounded-2xl p-[1px] ${className}`}>
        {/* Borda com gradiente estático (sem animação por padrão) */}
        <div
            className={`
        absolute inset-0 rounded-2xl
        [background:conic-gradient(from_140deg,rgba(251,191,36,.35),rgba(217,119,6,.2),rgba(251,191,36,.35))]
        ${animated ? "motion-safe:animate-[spinSlow_18s_linear_infinite]" : ""}
        opacity-25
      `}
            aria-hidden
        />
        {/* Glow interno: bem sutil, não distrai o conteúdo */}
        <div
            className="absolute inset-[1px] rounded-[1rem] pointer-events-none"
            style={{
                background:
                    "radial-gradient(50% 60% at 50% 0%, rgba(251,191,36,.06), transparent 60%)",
                mixBlendMode: "screen",
            }}
            aria-hidden
        />
        <div className="relative rounded-2xl bg-[#111]/70 border border-zinc-700/40 backdrop-blur-sm">
            {children}
        </div>
    </div>
);
