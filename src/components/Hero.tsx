"use client";
import React from "react";
import { useCountdown } from "@/hooks/useCountdown";

type HeroProps = {
    eventISO: string;
    checkoutUrl: string;
    mapsUrl: string;
    title?: React.ReactNode;
    subtitle?: string;
    artworkSrc?: string;   // pessoas recortadas (PNG)
    background?: string;   // arte dourada de fundo
    logoSrc?: string;
    dateLabel?: string;
    timeLabel?: string;
    placeLabel?: string;
};

export const Hero: React.FC<HeroProps> = ({
                                              eventISO,
                                              checkoutUrl,
                                              mapsUrl,
                                              title = (
                                                  <>
      <span className="bg-[linear-gradient(90deg,#fde68a,#fbbf24,#f59e0b)] bg-clip-text text-transparent">
        Descubra a essência
      </span>{" "}
                                                      que diferencia quem apenas vende de quem conquista clientes e multiplica resultados.
                                                  </>
                                              ),
                                              subtitle = "Um evento prático e direto para quem quer dominar vendas de alto valor, aumentar autoridade e criar consistência nos resultados.",
                                              artworkSrc = "/pessoas.png",
                                              background = "/arte1.png",
                                              logoSrc = "/dna-logo.png",
                                              dateLabel = "17/09",
                                              timeLabel = "20:00",
                                              placeLabel = "Plataforma Internacional — Alphaville",
                                          }) => {
    const { days, hours, minutes, seconds } = useCountdown(eventISO);

    return (
        <section className="relative isolate overflow-hidden w-full min-h-[78vh] md:min-h-[92vh]">
            {/* Camada 1 — background (mais ao fundo) */}
            <div
                className="absolute inset-0 -z-40 bg-cover bg-center"
                style={{ backgroundImage: `url('${background}')` }}
            />

            {/* Camada 2 — gradiente (abaixo das pessoas) */}
            <div className="absolute inset-0 -z-30 pointer-events-none bg-gradient-to-b from-black/80 via-black/50 to-black/10 md:bg-gradient-to-r md:from-black/85 md:via-black/45 md:to-transparent" />

            {/* Camada 3 — rings (também abaixo das pessoas) */}
            <div className="hidden md:flex pointer-events-none absolute inset-0 -z-20 items-center justify-end opacity-50">
                <svg viewBox="0 0 100 100" className="w-[120%] max-w-[1200px] h-auto translate-x-12">
                    <defs>
                        <linearGradient id="gold-hero" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fbbf24" stopOpacity=".18" />
                            <stop offset="100%" stopColor="#f59e0b" stopOpacity=".06" />
                        </linearGradient>
                    </defs>
                    {[30, 47, 64, 81, 98].map((r, i) => (
                        <circle key={i} cx="72" cy="45" r={r} stroke="url(#gold-hero)" strokeWidth=".7" fill="none" />
                    ))}
                </svg>
            </div>

            {/* Camada 4 — pessoas */}
            <div
                className="
    absolute right-1/2 translate-x-1/2 md:right-0 md:translate-x-0
    top-0 md:top-1/2 md:-translate-y-1/2
    -z-10 pointer-events-none
  "
            >
                <img
                    src={artworkSrc}
                    alt="Paulo Henriques e Pablo Marçal"
                    className="
      w-[130vw] max-w-none
      md:w-[min(100vw,1400px)] md:translate-x-[12vw]
      drop-shadow-[0_20px_60px_rgba(0,0,0,1.5)]
    "
                />
            </div>


            {/* Conteúdo (sempre por cima) */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
                <div
                    className="
            grid items-center gap-8
            grid-cols-1 md:grid-cols-[minmax(520px,760px),1fr]
            pt-[26vh] pb-8
            md:pt-16 md:pb-12
          "
                >
                    <div className="max-w-[720px] md:pr-6 text-center md:text-left">
                        <img src={logoSrc} alt="DNA do Vendedor" className="w-44 sm:w-56 h-auto mb-6 mx-auto md:mx-0" />

                        <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.06] [text-wrap:balance]">
                            {title}
                        </h1>

                        <p className="mt-4 text-zinc-300/90 text-base sm:text-lg max-w-[60ch] mx-auto md:mx-0">
                            {subtitle}
                        </p>

                        <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.14em] border border-amber-400/30 text-amber-300/90 bg-amber-400/10">
                Imersão Presencial
              </span>
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.14em] border border-amber-400/30 text-amber-300/90 bg-amber-400/10">
                Alphaville • SP
              </span>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
                            <a
                                href={checkoutUrl}
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-extrabold text-[#111]
                bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-200 hover:via-amber-300 hover:to-yellow-300
                transition-transform active:translate-y-0.5 shadow-lg shadow-yellow-500/20"
                            >
                                Quero garantir meu lugar
                            </a>
                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold border border-amber-400/30 hover:border-amber-400/60 text-zinc-100 bg-black/40 backdrop-blur-sm"
                            >
                                Ver localização
                            </a>
                        </div>

                        {/* Info + contador */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mt-6 mx-auto md:mx-0">
                            <div className="rounded-2xl bg-black/55 backdrop-blur-sm border border-amber-400/20 p-4">
                                <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-400 font-semibold">Data</div>
                                <div className="text-lg font-bold">{dateLabel}</div>
                            </div>
                            <div className="rounded-2xl bg-black/55 backdrop-blur-sm border border-amber-400/20 p-4">
                                <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-400 font-semibold">Horário</div>
                                <div className="text-lg font-bold">{timeLabel}</div>
                            </div>
                            <div className="rounded-2xl bg-black/55 backdrop-blur-sm border border-amber-400/20 p-4">
                                <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-400 font-semibold">Local</div>
                                <div className="text-lg font-bold">{placeLabel}</div>
                            </div>
                        </div>

                        <div className="mt-5 flex justify-center md:justify-start">
                            <div className="grid grid-flow-col gap-2 sm:gap-3">
                                {[
                                    { n: days, l: "dias" },
                                    { n: hours.toString().padStart(2, "0"), l: "horas" },
                                    { n: minutes.toString().padStart(2, "0"), l: "min" },
                                    { n: seconds.toString().padStart(2, "0"), l: "seg" },
                                ].map((i, idx) => (
                                    <div
                                        key={idx}
                                        className="min-w-[72px] text-center rounded-xl bg-black/55 backdrop-blur-sm border border-amber-400/20 p-3"
                                    >
                                        <div className="text-2xl font-black tabular-nums text-amber-300">{i.n}</div>
                                        <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">{i.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block" />
                </div>
            </div>
        </section>
    );
};
