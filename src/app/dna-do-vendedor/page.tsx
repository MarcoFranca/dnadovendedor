"use client";
import React from "react";
import { Hero } from "@/components/Hero";

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
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,#111111_0%,#0a0a0a_55%)]" />

            {/* HERO component */}
            <Hero
                eventISO="2025-09-17T20:00:00-03:00"
                checkoutUrl={CHECKOUT_URL}
                mapsUrl={MAPS_URL}
                dateLabel="17/09"
                timeLabel="20:00"
                placeLabel="Plataforma Internacional — Alphaville"
                artworkSrc="/IDV-1.png"
                logoSrc="/dna-logo.png"
            />

            {/* ========================= CONTEÚDO ========================= */}
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* PARA QUEM É */}
                <section className="mt-6">
                    <div className="rounded-2xl bg-zinc-900/60 border border-zinc-700/40 p-6 text-center">
                        <h2 className="text-xl font-extrabold mb-3">Este evento é para os vendedores que…</h2>
                        <div className="grid sm:grid-cols-3 gap-4">
                            <div className="rounded-xl bg-[#111]/70 border border-zinc-700/40 p-4">
                                <h3 className="font-bold mb-1 text-amber-300">Querem destravar resultados</h3>
                                <p className="text-zinc-300 text-sm">
                                    Método que gera movimento diário e oportunidades reais.
                                </p>
                            </div>
                            <div className="rounded-xl bg-[#111]/70 border border-zinc-700/40 p-4">
                                <h3 className="font-bold mb-1 text-amber-300">Buscam high ticket</h3>
                                <p className="text-zinc-300 text-sm">
                                    Vender alto valor com posicionamento e proposta irresistível.
                                </p>
                            </div>
                            <div className="rounded-xl bg-[#111]/70 border border-zinc-700/40 p-4">
                                <h3 className="font-bold mb-1 text-amber-300">Querem autoridade</h3>
                                <p className="text-zinc-300 text-sm">
                                    Construir marca pessoal que abre portas e encurta ciclos.
                                </p>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-zinc-300 text-sm">
                                É pra você que não tem tempo pra perder, que não aceita mais ver suas vendas travadas e quer
                                conquistar clientes de alto valor, se posicionando como a autoridade que o mercado respeita.
                            </p>
                        </div>
                        <div className="mt-2">
                            <a
                                href={CHECKOUT_URL}
                                className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-extrabold text-[#111] bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-200 hover:via-amber-300 hover:to-yellow-300 transition-transform active:translate-y-0.5"
                            >
                                QUERO GARANTIR MINHA VAGA
                            </a>
                        </div>
                    </div>
                </section>

                {/* TEMAS */}
                <section className="mt-10 text-center">
                    <div className="rounded-2xl bg-zinc-900/60 border border-zinc-700/40 p-6">
                        <h2 className="text-xl font-extrabold mb-4">Temas que serão abordados</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {temas.map((t) => (
                                <div
                                    key={t}
                                    className="rounded-xl border border-amber-400/20 bg-[#111]/70 px-4 py-3 text-center font-semibold"
                                >
                                    <span className="text-amber-300">•</span> {t}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* PALESTRANTE */}
                <section className="mt-6">
                    <div className="rounded-2xl bg-zinc-900/60 border border-zinc-700/40 p-6 text-center">
                        <h2 className="text-xl font-extrabold mb-4">Palestrante Principal</h2>
                        <img
                            src="/paulo-henriques.jpg"
                            alt="Paulo Henriques"
                            className="mx-auto rounded-full w-36 h-36 object-cover border-4 border-amber-400/40"
                        />
                        <h3 className="mt-3 text-lg font-bold">Paulo Henriques</h3>
                        <p className="text-zinc-400 max-w-xl mx-auto">
                            Especialista em vendas high ticket e mentor de alta performance. Ajuda vendedores e empreendedores a
                            multiplicarem resultados com estratégia, frequência e posicionamento.
                        </p>
                    </div>
                </section>
                {/* LOCAL DO EVENTO */}
                <section className="mt-6">
                    <div className="rounded-2xl bg-zinc-900/60 border border-zinc-700/40 p-6">
                        <h2 className="text-xl font-extrabold mb-4">Local do evento</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className="aspect-[4/3] rounded-xl bg-[#111]/70 border border-zinc-700/40" />
                            ))}
                        </div>
                        <p className="text-zinc-300">
                            <b>Plataforma Internacional</b> — Alameda Tocantins, 956 • Alphaville, Barueri/SP
                        </p>
                        <div className="mt-3">
                            <a
                                href={MAPS_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold border border-zinc-600/60 hover:border-amber-400/60 text-zinc-100"
                            >
                                Abrir no Maps
                            </a>
                        </div>
                    </div>
                </section>

                {/* DÚVIDAS / WHATSAPP */}
                <section className="mt-6">
                    <div className="rounded-2xl bg-zinc-900/60 border border-zinc-700/40 p-6 text-center">
                        <h2 className="text-xl font-extrabold mb-3">Ainda tem dúvida?</h2>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-extrabold text-[#111] bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-200 hover:via-amber-300 hover:to-yellow-300"
                        >
                            WhatsApp
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.003C.122 5.281 5.403 0 12.057 0c3.184 0 6.167 1.24 8.41 3.484a11.79 11.79 0 013.489 8.402c-.003 6.654-5.284 11.935-11.94 11.935a11.9 11.9 0 01-6.003-1.618L.057 24zm6.597-3.807c1.741.995 3.027 1.591 5.293 1.591 5.002 0 9.08-4.072 9.083-9.077.002-5.008-4.068-9.083-9.07-9.085-5.006 0-9.083 4.075-9.085 9.08 0 2.225.651 3.891 1.746 5.6l-.999 3.648 3.032-.757z" />
                            </svg>
                        </a>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="text-center text-sm text-zinc-500 py-8">
                    Plataforma Internacional — Alameda Tocantins, 956 — Alphaville, Barueri/SP •{" "}
                    <a href={MAPS_URL} target="_blank" rel="noreferrer" className="text-amber-300 hover:underline">
                        Abrir no Google Maps
                    </a>
                    <br />© {new Date().getFullYear()} DNA do Vendedor. Todos os direitos reservados.
                </footer>
            </div>
        </main>
    );
}
