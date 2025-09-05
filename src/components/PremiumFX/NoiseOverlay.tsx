// components/PremiumFX/NoiseOverlay.tsx
"use client";
import React from "react";

export default function NoiseOverlay() {
    return (
        <div
            aria-hidden
            className="
        pointer-events-none fixed inset-0 z-[2]
        opacity-[0.035] mix-blend-soft-light
        motion-safe:animate-[noiseShift_22s_linear_infinite]
      "
            style={{
                backgroundImage:
                    "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 256 256%22><filter id=%22n%22 x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.18%22/></svg>')",
                backgroundSize: "256px 256px",
            }}
        />
    );
}
