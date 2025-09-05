"use client";
import React from "react";
import SoftGlow from "./SoftGlow";

/** Posiciona dois glows suaves em uma section (canto topo-esq e fundo-dir) */
export default function SectionGlow() {
    return (
        <>
            <SoftGlow size={520} opacity={0.12} top={-120} left={-80} z={0} />
            <SoftGlow size={560} opacity={0.10} bottom={-160} right={-120} z={0} />
        </>
    );
}
