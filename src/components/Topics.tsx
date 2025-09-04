"use client";
import * as React from "react";
import {
    Activity, Trophy, Users2, Brain, Target, Cpu, Sparkles, Crown
} from "lucide-react";

type TopicItem =
    | string
    | { label: string; icon?: React.ReactNode; hint?: string };

type TopicsProps = {
    title?: string;
    topics: TopicItem[];
    subtitle?: string;
    /** "horizontal" (default) = ícone à esquerda; "vertical" = ícone em cima */
    variant?: "horizontal" | "vertical";
    className?: string;
};

const iconCls = "w-6 h-6 text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.25)]";


function autoIcon(label: string) {
    const t = label.toLowerCase();
    if (/(freq|consist)/.test(t)) return <Activity className={iconCls} />;
    if (/(ticket|alto|premium|high)/.test(t)) return <Trophy className={iconCls} />; // ou Crown
    if (/(network|contatos|relacion)/.test(t)) return <Users2 className={iconCls} />;
    if (/(mente|mental|mind)/.test(t)) return <Brain className={iconCls} />;
    if (/(posicion|autorid|marca)/.test(t)) return <Target className={iconCls} />;
    if (/(ia|ai|intelig)/.test(t)) return <Cpu className={iconCls} />;
    return <Sparkles className={iconCls} />;
}


function normalize(topics: TopicItem[]) {
    return topics.map((t) =>
        typeof t === "string" ? { label: t, icon: autoIcon(t) } : { ...t, icon: t.icon ?? autoIcon(t.label) }
    );
}

export const Topics: React.FC<TopicsProps> = ({
                                                  title = "Temas que serão abordados",
                                                  topics,
                                                  subtitle,
                                                  variant = "vertical", // sugiro vertical como padrão para essa seção
                                                  className = "",
                                              }) => {
    const items = normalize(topics);

    return (
        <section className={`mt-10 ${className}`}>
            <div className="rounded-2xl bg-zinc-900/60 border border-zinc-700/40 p-6">
                <h2 className="text-xl font-extrabold text-center">{title}</h2>
                {subtitle && (
                    <p className="text-sm text-zinc-400 max-w-2xl mx-auto mt-1 text-center">{subtitle}</p>
                )}

                {/* grade elástica + alturas iguais */}
                <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map(({label, icon, hint}) => {
                        const baseCard =
                            "h-full rounded-xl border border-amber-400/20 bg-[#111]/70 px-4 py-4";
                        if (variant === "vertical") {
                            return (
                                <div key={label} className={`${baseCard} flex flex-col items-center text-center`}>
                                    <div className="inline-flex items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20 p-3 mb-3">
                                        {icon}
                                    </div>
                                    <div className="font-semibold">{label}</div>
                                    {hint && <div className="text-[12px] text-zinc-400 mt-1">{hint}</div>}
                                </div>
                            );
                        }
                        // horizontal (ícone à esquerda)
                        return (
                            <div key={label} className={`${baseCard} flex items-start gap-3`}>
                                <div className="inline-flex items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20 p-3">
                                    {icon}
                                </div>
                                <div className="leading-tight">
                                    <div className="font-semibold">{label}</div>
                                    {hint && <div className="text-[12px] text-zinc-400 mt-1">{hint}</div>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
