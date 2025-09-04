"use client";
import React from "react";
import type { LucideIcon } from "lucide-react";
import {
    Rocket, Trophy, DollarSign, Target, Users, ShieldCheck,
} from "lucide-react";

type Item = {
    title: string;
    description: string;
    icon?: LucideIcon; // opcional; se não vier, uso um padrão
};

type ForWhomProps = {
    title?: string;
    ctaHref?: string;
    ctaLabel?: string;
    items: Item[];
};

export const ForWhom: React.FC<ForWhomProps> = ({
                                                    title = "Este evento é para os vendedores que…",
                                                    ctaHref,
                                                    ctaLabel,
                                                    items,
                                                }) => {
    const Fallback: LucideIcon = ShieldCheck;

    return (
        <section className="mt-6">
            <div className="rounded-2xl bg-zinc-900/60 border border-zinc-700/40 p-6">
                <h2 className="text-xl font-extrabold mb-5 text-center">{title}</h2>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map(({ title, description, icon: Icon }, idx) => (
                        <article
                            key={idx}
                            className="group rounded-xl bg-[#111]/70 border border-zinc-700/40 p-5 hover:border-amber-400/40 transition-colors"
                        >
                            <div className="flex items-start gap-3">
                                <div
                                    className="flex h-11 w-11 items-center justify-center rounded-xl
                             bg-amber-400/10 border border-amber-400/20
                             text-amber-300 shrink-0"
                                >
                                    {Icon ? <Icon size={22} /> : <Fallback size={22} />}
                                </div>
                                <div>
                                    <h3 className="font-bold text-amber-300 leading-snug">{title}</h3>
                                    <p className="text-zinc-300/95 text-sm mt-1">{description}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {ctaHref && ctaLabel && (
                    <div className="mt-6 text-center">
                        <a
                            href={ctaHref}
                            className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-extrabold text-[#111]
                         bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400
                         hover:from-amber-200 hover:via-amber-300 hover:to-yellow-300
                         transition-transform active:translate-y-0.5"
                        >
                            {ctaLabel}
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

// Sugestão de conteúdo (pode importar no page e usar direto):
export const defaultForWhomItems: Item[] = [
    {
        title: "Querem destravar resultados",
        description: "Método prático para gerar movimento diário e oportunidades reais.",
        icon: Rocket,
    },
    {
        title: "Buscam vender high ticket",
        description: "Construir proposta irresistível e conduzir negociações de alto valor.",
        icon: DollarSign,
    },
    {
        title: "Desejam autoridade e posicionamento",
        description: "Marca pessoal forte que abre portas e encurta o ciclo de vendas.",
        icon: Trophy,
    },
    {
        title: "Precisam de consistência",
        description: "Rotina, frequência e energia alinhadas ao seu plano comercial.",
        icon: Target,
    },
    {
        title: "Valorizam networking de alto nível",
        description: "Conexões certas que aceleram parcerias e oportunidades.",
        icon: Users,
    },
    {
        title: "Buscam método validado",
        description: "Estratégias testadas e replicáveis por quem está no topo.",
        icon: ShieldCheck,
    },
];
