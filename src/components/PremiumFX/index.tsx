"use client";
import React from "react";
import NoiseOverlay from "./NoiseOverlay";
import SoftGlow from "./SoftGlow";

export default function PremiumFX() {
    return (
        <>
            {/* Wrapper fixa os glows ao viewport e evita overflow */}
            <div
                aria-hidden
                className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
            >
                {/* deixe os glows grandes de novo, mas CLIPADOS pelo wrapper */}
                <SoftGlow fixed size={1200} opacity={0.06} top={-240} left={-260} z={0} />
                <SoftGlow fixed size={1200} opacity={0.05} bottom={-280} right={-260} z={0} />
            </div>

            {/* Noise por cima de tudo, não causa scroll */}
            <NoiseOverlay />
        </>
    );
}
