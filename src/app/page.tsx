"use client";
import React from "react";
import { Hero } from "@/components/Hero";
import { Topics } from "@/components/Topics";
import { defaultForWhomItems, ForWhom } from "@/components/ForWhom";
import { VenueSection } from "@/components/VenueSection";
import { Reveal } from "@/components/PremiumFX/Reveal";
import PageBackdrop from "@/components/PremiumFX/PageBackdrop";

const CHECKOUT_URL = "https://seu-checkout.com/dna-do-vendedor";
const MAPS_URL =
    "https://maps.google.com/?q=Alameda%20Tocantins,%20956%20-%20Alphaville%20Industrial,%20Barueri%20-%20SP,%2006455-020";
const WHATSAPP_URL =
    "https://wa.me/5512991166125?text=Tenho%20interesse%20no%20DNA%20do%20Vendedor";

export default function DNADoVendedorLanding() {
    const temas = [
        "Frequência",
        "Vendas High Ticket",
        "Networking",
        "Mentalidade",
        "Posicionamento",
        "Inteligência Artificial",
    ];

    return (
        <main className="min-h-screen text-zinc-100 bg-[#0a0a0a] relative">
            {/* BG global sutil */}
            <PageBackdrop />
            {/* HERO */}
            <Hero
                eventISO="2025-09-17T20:00:00-03:00"
                checkoutUrl={CHECKOUT_URL}
                mapsUrl={MAPS_URL}
                dateLabel="17/09"
                timeLabel="20:00"
                placeLabel="Plataforma Internacional"
                artworkSrc="/pessoas.png"
                background="/arte1.png"
                logoSrc="/LOGO_7.png"
            />

            {/* ========================= CONTEÚDO ========================= */}
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* PARA QUEM É */}
                <Reveal>
                    <ForWhom
                        items={defaultForWhomItems}
                        ctaHref={CHECKOUT_URL}
                        ctaLabel="QUERO GARANTIR MINHA VAGA"
                    />
                </Reveal>

                {/* TEMAS */}
                <Reveal delay={120}>
                    <Topics topics={temas}
                            ctaLabel="QUERO GARANTIR MINHA VAGA"
                            ctaHref={CHECKOUT_URL}
                    />
                </Reveal>

                {/* PALESTRANTE */}
                <Reveal delay={180}>
                    <section className="mt-6">
                        <div className="rounded-2xl bg-zinc-900/60 border border-zinc-700/40 p-6 text-center">
                            <h2 className="text-xl font-extrabold mb-4">Palestrante</h2>
                            <img
                                src="/paulo-henriques.jpg"
                                alt="Paulo Henriques"
                                className="mx-auto rounded-full w-40 h-40 object-cover object-[50%_18%]
             border-4 border-amber-400/40"
                                loading="lazy"
                            />
                            <h3 className="mt-3 text-lg font-bold">Paulo Henriques</h3>
                            <p className="text-zinc-400 max-w-xl mx-auto">
                                Especialista em vendas high ticket e mentor de alta performance.
                                Ajuda vendedores e empreendedores a multiplicarem resultados com
                                estratégia, frequência e posicionamento.
                            </p>

                        </div>
                    </section>
                </Reveal>

                {/* LOCAL DO EVENTO */}
                <Reveal delay={240}>
                    <VenueSection
                        title="Local do evento"
                        images={[
                            { src: "/local/1.png", caption: "" },
                            { src: "/local/2.png", caption: "" },
                            { src: "/local/3.png", caption: "" },
                            { src: "/local/4.png", caption: "" },
                        ]}
                        addressHtml={
                            <>
                                <b>Plataforma Internacional</b> — Alameda Tocantins, 956 •
                                Alphaville, Barueri/SP
                            </>
                        }
                        mapsHref={MAPS_URL}
                        ctaLabel="QUERO GARANTIR MINHA VAGA"
                        ctaHref={CHECKOUT_URL}
                    />
                </Reveal>

                {/* DÚVIDAS / WHATSAPP */}
                <Reveal delay={300}>
                    <section className="mt-6">
                        <div className="rounded-2xl bg-zinc-900/60 border border-zinc-700/40 p-6 text-center">
                            <h2 className="text-xl font-extrabold mb-3">Ainda tem dúvida?</h2>

                            <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
                                {/* WhatsApp — branco e mesmo tamanho do CTA */}
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full justify-center sm:w-auto inline-flex items-center gap-2 h-11 px-4
               rounded-xl font-semibold bg-white text-black border border-white
               hover:bg-zinc-100 shadow-sm
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30
               focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                                >
                                    WhatsApp
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         className="w-5 h-5">
                                        <path
                                            d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.003C.122 5.281 5.403 0 12.057 0c3.184 0 6.167 1.24 8.41 3.484a11.79 11.79 0 013.489 8.402c-.003 6.654-5.284 11.935-11.94 11.935a11.9 11.9 0 01-6.003-1.618L.057 24zm6.597-3.807c1.741.995 3.027 1.591 5.293 1.591 5.002 0 9.08-4.072 9.083-9.077.002-5.008-4.068-9.083-9.07-9.085-5.006 0-9.083 4.075-9.085 9.08 0 2.225.651 3.891 1.746 5.6l-.999 3.648 3.032-.757z"/>
                                    </svg>
                                </a>

                                {/* CTA */}
                                <a
                                    href={CHECKOUT_URL}
                                    className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-5
               rounded-xl font-extrabold text-[#111]
               bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400
               hover:from-amber-200 hover:via-amber-300 hover:to-yellow-300
               transition-transform active:translate-y-0.5
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70
               focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                                >
                                    QUERO GARANTIR MINHA VAGA
                                </a>
                            </div>
                        </div>
                    </section>
                </Reveal>

                {/* FOOTER */}
                <footer className="text-center text-sm text-zinc-500 py-8">
                    Plataforma Internacional — Alameda Tocantins, 956 — Alphaville,
                    Barueri/SP •{" "}
                    <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="text-amber-300 hover:underline"
                    >
                        Abrir no Google Maps
                    </a>
                    <br/>© {new Date().getFullYear()} DNA do Vendedor. Todos os direitos
                    reservados.
                </footer>
            </div>
        </main>
);
}
