"use client";
import React, { useState } from "react";
import Image from "next/image";

type VenueImage = {
    src: string;
    alt?: string;
    caption?: string;
};

type VenueSectionProps = {
    title?: string;
    addressHtml?: React.ReactNode; // pode passar <b>Plataforma…</b> — ...
    images: VenueImage[];
    mapsHref: string;
};

export const VenueSection: React.FC<VenueSectionProps> = ({
                                                              title = "Local do evento",
                                                              addressHtml,
                                                              images,
                                                              mapsHref,
                                                          }) => {
    const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

    return (
        <section className="mt-6">
            <div className="rounded-2xl bg-zinc-900/60 border border-zinc-700/40 p-6">
                <h2 className="text-xl font-extrabold mb-4">{title}</h2>

                {/* GRADE 2x2 (mobile 2 col / desktop 4 col) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {images.slice(0, 8).map((img, i) => (
                        <button
                            key={img.src + i}
                            onClick={() => setLightboxIdx(i)}
                            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-700/40 bg-[#111]/70 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                            aria-label={`Abrir imagem ${i + 1}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt ?? "Foto do local do evento"}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                                priority={i === 0}
                            />
                            {/* overlay sutil */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-90" />
                            {/* caption opcional */}
                            {img.caption && (
                                <div className="absolute bottom-0 left-0 right-0 p-2 text-[12px] text-zinc-200/90">
                                    {img.caption}
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                {addressHtml && (
                    <p className="text-zinc-300">{addressHtml}</p>
                )}

                <div className="mt-3">
                    <a
                        href={mapsHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold border border-zinc-600/60 hover:border-amber-400/60 text-zinc-100"
                    >
                        Abrir no Maps
                    </a>
                </div>
            </div>

            {/* Lightbox simples */}
            {lightboxIdx !== null && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setLightboxIdx(null)}
                >
                    <div
                        className="relative w-full max-w-5xl aspect-video bg-black/40 rounded-xl overflow-hidden border border-zinc-700"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[lightboxIdx].src}
                            alt={images[lightboxIdx].alt ?? "Foto ampliada do local"}
                            fill
                            className="object-contain"
                            sizes="90vw"
                            priority
                        />
                        <button
                            onClick={() => setLightboxIdx(null)}
                            className="absolute top-2 right-2 px-3 py-1 rounded-lg bg-black/60 text-zinc-100 text-sm hover:bg-black/80"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};
