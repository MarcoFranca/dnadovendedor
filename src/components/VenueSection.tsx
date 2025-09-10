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
    ctaHref?: string;
    ctaLabel?: string;
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
                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-90"/>
                            {/* caption opcional */}
                            {img.caption && (
                                <div className="absolute bottom-0 left-0 right-0 p-2 text-[12px] text-zinc-200/90">
                                    {img.caption}
                                </div>
                            )}
                        </button>
                    ))}
                </div>


                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                {addressHtml && (
                    <p className="text-zinc-300">{addressHtml}</p>
                )}
                    <a
                        href={mapsHref}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center
               h-11 px-4 text-sm rounded-lg font-semibold
               bg-white text-black border border-white hover:bg-zinc-100 shadow-sm
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30
               focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                    >
                        Abrir no Maps
                    </a>

                 {/*   {ctaHref && ctaLabel && (*/}
                 {/*       <a*/}
                 {/*           href={ctaHref}*/}
                 {/*           className="w-full sm:w-auto inline-flex items-center justify-center*/}
                 {/*h-11 px-5 rounded-xl font-extrabold text-[#111]*/}
                 {/*bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400*/}
                 {/*hover:from-amber-200 hover:via-amber-300 hover:to-yellow-300*/}
                 {/*transition-transform active:translate-y-0.5*/}
                 {/*focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70*/}
                 {/*focus-visible:ring-offset-2 focus-visible:ring-offset-black"*/}
                 {/*       >*/}
                 {/*           {ctaLabel}*/}
                 {/*       </a>*/}
                 {/*   )}*/}
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
