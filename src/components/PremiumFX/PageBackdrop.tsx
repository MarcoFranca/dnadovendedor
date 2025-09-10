// components/PremiumFX/PageBackdrop.tsx
"use client";
import React from "react";
import NoiseOverlay from "@/components/PremiumFX/NoiseOverlay";

export default function PageBackdrop() {
    return (
        // z-0 para ficar ACIMA do bg preto do <main> e ABAIXO do conteúdo (que está z-10)
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {/* Base carvão com leve variação */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
            linear-gradient(180deg, #0a0a0a 0%, #0b0b0b 55%, #0a0a0a 100%)
          `,
                }}
            />

            {/* GOLD CANOPY (topo mais perceptível) */}
            <div
                className="absolute inset-x-0 top-0 h-[60vh]"
                style={{
                    background: `
            radial-gradient(950px 520px at 50% -12%, rgba(255,215,128,0.22), rgba(255,215,128,0.14) 38%, rgba(255,215,128,0.06) 60%, transparent 75%),
            linear-gradient(to bottom, rgba(255,205,110,0.14), rgba(255,205,110,0.04) 50%, transparent 80%)
          `,
                    mixBlendMode: "screen",
                }}
            />

            {/* realce dourado no MEIO da página (para aparecer entre seções) */}
            <div
                className="absolute inset-x-0 top-1/2 h-[50vh]"
                style={{
                    background: `
            radial-gradient(900px 520px at 50% 50%, rgba(255,220,150,0.06), transparent 70%)
          `,
                    mixBlendMode: "screen",
                }}
            />

            {/* Vignette premium para foco */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(1200px 900px at 50% 12%, transparent 0%, rgba(0,0,0,0.38) 86%)",
                    mixBlendMode: "multiply",
                }}
            />

            {/* Grade fininha (desktop) */}
            <div
                className="hidden md:block absolute inset-0 opacity-[0.08] mix-blend-overlay"
                style={{
                    backgroundImage: `
            repeating-linear-gradient(0deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 28px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 28px)
          `,
                    WebkitMaskImage:
                        "radial-gradient(1400px 800px at 50% 8%, black 55%, transparent 100%)",
                    maskImage:
                        "radial-gradient(1400px 800px at 50% 8%, black 55%, transparent 100%)",
                }}
            />

            {/* Ruído sutil para “textura de metal” */}
            <NoiseOverlay />
        </div>
    );
}
