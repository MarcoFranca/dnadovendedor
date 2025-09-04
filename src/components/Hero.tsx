"use client";
import React from "react";
import { useCountdown } from "@/hooks/useCountdown";

type HeroProps = {
    eventISO: string;
    checkoutUrl: string;
    mapsUrl: string;
    title?: React.ReactNode;
    subtitle?: string;
    artworkSrc?: string;   // PNG recortado (pessoas)
    background?: string;   // arte dourada
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
                                              logoSrc = "/LOGO_7.png",
                                              dateLabel = "17/09",
                                              timeLabel = "20:00",
                                              placeLabel = "Plataforma Internacional",
                                          }) => {
    const { days, hours, minutes, seconds } = useCountdown(eventISO);

    return (
        <section className="relative isolate overflow-hidden w-full min-h-[78vh] md:min-h-[92vh] text-zinc-100">
            {/* BG */}
            <div
                className="absolute inset-0 -z-40 bg-cover bg-center"
                style={{ backgroundImage: `url('${background}')` }}
            />
            {/* Rings sutis */}
            <div className="hidden md:flex pointer-events-none absolute inset-0 -z-30 items-center justify-end opacity-40">
                <svg viewBox="0 0 100 100" className="w-[120%] max-w-[1200px] h-auto translate-x-12">
                    <defs>
                        <linearGradient id="gold-hero" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fbbf24" stopOpacity=".18" />
                            <stop offset="100%" stopColor="#f59e0b" stopOpacity=".06" />
                        </linearGradient>
                    </defs>
                    {[30,47,64,81,98].map((r,i)=>(
                        <circle key={i} cx="72" cy="45" r={r} stroke="url(#gold-hero)" strokeWidth=".7" fill="none"/>
                    ))}
                </svg>
            </div>

            {/* PESSOAS — DESKTOP (centralizados na div da direita, maiores) */}
            <div className="hidden md:block absolute right-0 md:top-0 md:translate-y-0 -z-9 pointer-events-none" style={{
                    WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                    maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                }}>
                <img
                    src={artworkSrc}
                    alt="Paulo Henriques e Pablo Marçal"
                    className="
      w-[min(60vw)] max-w-none translate-x-[6vw]
      drop-shadow-[0_24px_80px_rgba(0,0,0,0.85)]
    "
                />
                {/* logo sobre as mãos */}
                <img
                    src={logoSrc}
                    alt="DNA do Vendedor"
                    className="absolute left-1/2 -translate-x-[23%] bottom-[8vh] w-120
               drop-shadow-[0_8px_22px_rgba(0,0,0,0.6)]"
                />
            </div>


            {/* Gradiente de contraste sobre o BG/pessoas */}
            <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-black/80 via-black/55 to-black/15 md:bg-gradient-to-r md:from-black/92 md:via-black/70 md:to-transparent" />

            {/* CONTEÚDO */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
                <div
                    className="
            grid items-start gap-8
            grid-cols-1 md:grid-cols-[minmax(560px,760px),1fr]
            pt-[36vh] md:pt-16 pb-10 md:pb-12
          "
                >



                    {/* COLUNA ESQUERDA */}
                    <div className="max-w-[780px] md:pr-6 text-center md:text-left">
                        {/* logo no mobile */}

                        {/* PESSOAS — MOBILE (no topo, grandes, com fade) */}
                        <div
                            className="md:hidden absolute left-1/2 top-0 -translate-x-1/2 -z-20 pointer-events-none w-[150vw]"
                            style={{
                                WebkitMaskImage:
                                    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)",
                                maskImage:
                                    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)",
                            }}
                        >
                            <img
                                src={artworkSrc}
                                alt="Paulo Henriques e Pablo Marçal"
                                className="w-full h-auto max-w-none select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>

                        <img src={logoSrc} alt="DNA do Vendedor" className="md:hidden w-80 sm:w-56 h-auto mb-6 mx-auto" />

                        <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.06] [text-wrap:balance]">
                            {title}
                        </h1>

                        <p className="mt-4 text-zinc-300/90 text-base sm:text-lg max-w-[60ch] mx-auto md:mx-0">
                            {subtitle}
                        </p>

                        {/* Badges */}
                        <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-2">
                            {["Imersão Presencial","Alphaville • SP",dateLabel,timeLabel].map((chip)=>(
                                <span
                                    key={chip}
                                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.14em]
                             border border-amber-400/30 text-amber-300/90 bg-amber-400/10"
                                >
                  {chip}
                </span>
                            ))}
                        </div>

                        {/* CTAs — preencher linha */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-[1fr,260px] gap-3">
                            <a
                                href={checkoutUrl}
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-extrabold text-[#111]
                           bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-200 hover:via-amber-300 hover:to-yellow-300
                           transition-transform active:translate-y-0.5 shadow-lg shadow-yellow-500/20 w-full"
                            >
                                QUERO GARANTIR MEU LUGAR!
                            </a>
                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold border border-amber-400/30 hover:border-amber-400/60 text-zinc-100 bg-black/40 backdrop-blur-sm w-full md:w-auto"
                            >
                                Ver localização
                            </a>
                        </div>

                        {/*/!* Info cards *!/*/}
                        {/*<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">*/}
                        {/*    <div className="rounded-2xl bg-black/55 backdrop-blur-sm border border-amber-400/20 p-4">*/}
                        {/*        <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-400 font-semibold">Data</div>*/}
                        {/*        <div className="text-lg font-bold">{dateLabel}</div>*/}
                        {/*    </div>*/}
                        {/*    <div className="rounded-2xl bg-black/55 backdrop-blur-sm border border-amber-400/20 p-4">*/}
                        {/*        <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-400 font-semibold">Horário</div>*/}
                        {/*        <div className="text-lg font-bold">{timeLabel}</div>*/}
                        {/*    </div>*/}
                        {/*    <div className="rounded-2xl bg-black/55 backdrop-blur-sm border border-amber-400/20 p-4">*/}
                        {/*        <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-400 font-semibold">Local</div>*/}
                        {/*        <div className="text-lg font-bold">{placeLabel}</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/* Contador — ocupa a linha toda */}
                        <div className="mt-5">
                            <div className="grid grid-cols-4 gap-3">
                                {[
                                    { n: days, l: "dias" },
                                    { n: hours.toString().padStart(2, "0"), l: "horas" },
                                    { n: minutes.toString().padStart(2, "0"), l: "min" },
                                    { n: seconds.toString().padStart(2, "0"), l: "seg" },
                                ].map((i, idx) => (
                                    <div
                                        key={idx}
                                        className="text-center rounded-xl bg-black/55 backdrop-blur-sm border border-amber-400/20 p-3"
                                    >
                                        <div className="text-2xl font-black tabular-nums text-amber-300">{i.n}</div>
                                        <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">{i.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* COLUNA DIREITA fica vazia (só para manter o respiro da grid) */}
                    <div className="hidden md:block" />
                </div>
            </div>
        </section>
    );
};
