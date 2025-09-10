"use client";
import React from "react";
import { Brain, LineChart, Users2, Rocket, Megaphone, Cpu } from "lucide-react";
import { FancyCard } from "@/components/PremiumFX/FancyCard";
import SoftGlow from "@/components/PremiumFX/SoftGlow";

type Topic = { label: string; icon?: React.ReactNode };
type TopicsProps = {
    title?: string;
    ctaHref?: string;
    ctaLabel?: string;
    topics: (string | Topic)[];
    glowOpacity?: number;
    glowSize?: number;
};

const iconByLabel = (label: string) => {
    const k = label.toLowerCase();
    if (k.includes("frequ")) return <Brain className="w-6 h-6" />;
    if (k.includes("high") || k.includes("ticket")) return <LineChart className="w-6 h-6" />;
    if (k.includes("network")) return <Users2 className="w-6 h-6" />;
    if (k.includes("mental")) return <Rocket className="w-6 h-6" />;
    if (k.includes("posicion") || k.includes("branding")) return <Megaphone className="w-6 h-6" />;
    if (k.includes("intelig") || k.includes("ia")) return <Cpu className="w-6 h-6" />;
    return <LineChart className="w-6 h-6" />;
};

export const Topics: React.FC<TopicsProps> = ({
                                                  title = "Temas que serão abordados",
                                                  topics,
                                                  glowOpacity = 0.08,
                                                  glowSize = 1200,
                                              }) => {
    const normalized: Topic[] = topics.map((t) =>
        typeof t === "string" ? { label: t, icon: iconByLabel(t) } : t
    );

    return (
        <section className="relative mt-10">
            {/* Glow difuso (só em telas >= sm para evitar overdraw no mobile) */}
            <SoftGlow opacity={glowOpacity} size={glowSize} className="hidden sm:block" />

            {/* FancyCard sem rotação (estático por padrão); passe animated se quiser em alguma vitrine */}
            <FancyCard>
                <div className="p-6 text-center">
                    <h2 className="text-xl font-extrabold mb-4 tracking-tight">{title}</h2>

                    {/* 2 col no mobile, 3 col no md; 6 itens -> 3x2 no desktop */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {normalized.map(({ label, icon }) => (
                            <div
                                key={label}
                                className="
                  group rounded-xl px-4 py-5
                  bg-black/50 border border-amber-400/15
                  transition-all duration-300 will-change-transform
                  hover:border-amber-400/35 hover:shadow-[0_10px_30px_rgba(251,191,36,0.06)]
                  hover:-translate-y-[2px]
                  focus-within:border-amber-400/50
                  h-28 flex flex-col items-center justify-center
                "
                                tabIndex={-1}
                            >
                                {/* badge do ícone */}
                                <div
                                    className="
                    mb-2 inline-flex items-center justify-center
                    w-9 h-9 rounded-full
                    bg-amber-400/10 border border-amber-400/30
                    text-amber-300
                    transition-colors
                    group-hover:bg-amber-400/15 group-hover:border-amber-400/50
                  "
                                    aria-hidden
                                >
                                    {icon}
                                </div>

                                <div className="font-semibold text-center leading-tight [text-wrap:balance]">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/*{ctaHref && ctaLabel && (*/}
                    {/*    <div className="mt-6 text-center">*/}
                    {/*        <a*/}
                    {/*            href={ctaHref}*/}
                    {/*            className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-extrabold text-[#111]*/}
                    {/*     bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400*/}
                    {/*     hover:from-amber-200 hover:via-amber-300 hover:to-yellow-300*/}
                    {/*     transition-transform active:translate-y-0.5"*/}
                    {/*        >*/}
                    {/*            {ctaLabel}*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </div>
            </FancyCard>
        </section>
    );
};
