"use client"
import React, { useEffect, useMemo, useState } from "react";

// LIVE PREVIEW — Single-file React component using TailwindCSS
const CHECKOUT_URL = "https://seu-checkout.com/dna-do-vendedor";
const MAPS_URL =
    "https://maps.google.com/?q=Alameda%20Tocantins,%20956%20-%20Alphaville%20Industrial,%20Barueri%20-%20SP,%2006455-020";

export default function DNADoVendedorLanding() {
    const eventDate = useMemo(() => new Date("2025-09-06T09:00:00-03:00"), []);
    const [now, setNow] = useState<Date>(new Date());
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    const diff = Math.max(0, eventDate.getTime() - now.getTime());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const chips = [
        "Frequência",
        "Vendas High Ticket",
        "Branding",
        "Holding",
        "Inteligência Artificial",
        "Imagem e Posicionamento Profissional",
    ];

    return (
        <main className="min-h-screen text-slate-100 bg-[#0b1220] relative">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,#0b2a75_0%,#0b1220_50%)]"/>
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* HERO */}
                <section className="pt-16 pb-6 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-cyan-400/40 text-cyan-300 bg-cyan-400/10">Imersão Presencial</span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-cyan-400/40 text-cyan-300 bg-cyan-400/10">Alphaville • SP</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">DNA do Vendedor</h1>
                    <p className="mt-3 text-slate-400 text-base sm:text-lg">
                        A imersão para <b className="text-slate-200">aumentar faturamento</b>, fechar
                        <b className="text-slate-200"> contratos maiores</b> e <b className="text-slate-200">posicionar sua autoridade</b> com método e prática.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mt-6">
                        <div className="rounded-2xl bg-slate-900/70 border border-slate-500/20 p-4">
                            <div className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">Data</div>
                            <div className="text-lg font-bold">06/09</div>
                        </div>
                        <div className="rounded-2xl bg-slate-900/70 border border-slate-500/20 p-4">
                            <div className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">Horário</div>
                            <div className="text-lg font-bold">09:00</div>
                        </div>
                        <div className="rounded-2xl bg-slate-900/70 border border-slate-500/20 p-4">
                            <div className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">Local</div>
                            <div className="text-lg font-bold">Plataforma Internacional — Alphaville</div>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-center">
                        <div className="grid grid-flow-col gap-2 sm:gap-3" aria-label="Contagem regressiva para o evento">
                            {[{n: days, l: 'dias'}, {n: hours.toString().padStart(2, '0'), l: 'horas'}, {n: minutes.toString().padStart(2, '0'), l: 'min'}, {n: seconds.toString().padStart(2, '0'), l: 'seg'}].map((i, idx) => (
                                <div key={idx} className="min-w-[72px] text-center rounded-xl bg-[#0b162e] border border-[#042a75]/60 p-3">
                                    <div className="text-2xl font-black tabular-nums">{i.n}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-slate-400">{i.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                        <a href={CHECKOUT_URL} className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-extrabold bg-cyan-400 text-[#001519] hover:bg-cyan-300 transition-transform active:translate-y-0.5">
                            Garantir minha vaga
                        </a>
                        <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold border border-slate-500/40 hover:border-slate-400/80 text-slate-100">
                            Ver localização
                        </a>
                    </div>
                </section>

                {/* THEMES */}
                <section className="mt-10">
                    <div className="rounded-2xl bg-slate-900/60 border border-slate-500/20 p-6">
                        <h2 className="text-xl font-extrabold mb-3">Temas que serão abordados</h2>
                        <div className="flex flex-wrap gap-2">
                            {chips.map((c) => (
                                <span key={c} className="px-4 py-2 rounded-full font-semibold bg-[#0b162e] border border-[#042a75]/60 text-blue-100">
                  {c}
                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* AUDIENCE */}
                <section className="mt-6">
                    <div className="rounded-2xl bg-slate-900/60 border border-slate-500/20 p-6">
                        <h2 className="text-xl font-extrabold mb-3">Para quem é esta imersão?</h2>
                        <ul className="list-disc pl-5 space-y-2 text-slate-200">
                            <li><b>Vendedores e empreendedores</b> que desejam aumentar o faturamento e fechar contratos maiores.</li>
                            <li>Profissionais que querem se posicionar como autoridade e construir uma <b>marca pessoal forte</b>.</li>
                            <li>Pessoas que entendem que <b>frequência, mentalidade e energia</b> influenciam diretamente nos resultados.</li>
                            <li>Quem busca <b>networking de alto nível</b> e acesso a <b>estratégias testadas</b> por quem já está no topo.</li>
                        </ul>
                        <div className="mt-4">
                            <a href={CHECKOUT_URL} className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-extrabold bg-cyan-400 text-[#001519] hover:bg-cyan-300 transition-transform active:translate-y-0.5">
                                Quero participar
                            </a>
                        </div>
                    </div>
                </section>

                {/* BONUS */}
                <section className="mt-6">
                    <div className="rounded-2xl bg-slate-900/60 border border-slate-500/20 p-6">
                        <h2 className="text-xl font-extrabold mb-3">Bônus & Experiência</h2>
                        <ul className="list-disc pl-5 space-y-2 text-slate-200">
                            <li>Material de apoio para implementação pós-evento.</li>
                            <li>Dinâmicas práticas para aplicação imediata.</li>
                            <li>Ambiente premium, networking e oportunidades reais.</li>
                        </ul>
                    </div>
                </section>

                {/* SPEAKER (Paulo Henriques) */}
                <section className="mt-6">
                    <div className="rounded-2xl bg-slate-900/60 border border-slate-500/20 p-6 text-center">
                        <h2 className="text-xl font-extrabold mb-4">Palestrante Principal</h2>
                        <img src="/paulo-henriques.jpg" alt="Foto de Paulo Henriques" className="mx-auto rounded-full w-32 h-32 object-cover border-4 border-cyan-400/40"/>
                        <h3 className="mt-3 text-lg font-bold">Paulo Henriques</h3>
                        <p className="text-slate-400">Especialista em vendas e mentor de alta performance, com ampla experiência em estratégias de crescimento e posicionamento.</p>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="mt-6">
                    <div className="rounded-2xl bg-slate-900/60 border border-slate-500/20 p-6">
                        <h2 className="text-xl font-extrabold mb-3 text-center">O que dizem os participantes</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="rounded-xl bg-slate-800/70 p-4">
                                <p className="italic text-slate-200">“O DNA do Vendedor mudou minha visão sobre vendas. Saí do evento com estratégias práticas que já estão gerando resultados.”</p>
                                <div className="mt-2 flex items-center gap-2">
                                    <img src="/testemunha1.jpg" alt="Participante 1" className="w-10 h-10 rounded-full object-cover"/>
                                    <span className="text-sm font-semibold text-slate-300">Maria Souza</span>
                                </div>
                            </div>
                            <div className="rounded-xl bg-slate-800/70 p-4">
                                <p className="italic text-slate-200">“Além do conteúdo incrível, o networking foi surreal. Fiz conexões que abriram novas oportunidades no meu negócio.”</p>
                                <div className="mt-2 flex items-center gap-2">
                                    <img src="/testemunha2.jpg" alt="Participante 2" className="w-10 h-10 rounded-full object-cover"/>
                                    <span className="text-sm font-semibold text-slate-300">João Oliveira</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="text-center text-sm text-slate-400 py-8">
                    Plataforma Internacional — Alameda Tocantins, 956 — Alphaville, Barueri/SP • {" "}
                    <a href={MAPS_URL} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">Abrir no Google Maps</a>
                    <br/>
                    © {new Date().getFullYear()} DNA do Vendedor. Todos os direitos reservados.
                </footer>
            </div>
        </main>
    );
}
