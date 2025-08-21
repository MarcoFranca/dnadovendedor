'use client'
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import PH from "@/../public/paulo-henriques.jpg";
import PHPerfil from "@/../public/GHR026686.jpg";
import User from "@/../public/user.png";

// LIVE PREVIEW — Single-file React component using TailwindCSS
const CHECKOUT_URL = "https://seu-checkout.com/dna-do-vendedor";
const MAPS_URL =
    "https://maps.google.com/?q=Alameda%20Tocantins,%20956%20-%20Alphaville%20Industrial,%20Barueri%20-%20SP,%2006455-020";
const WHATSAPP_URL = "https://wa.me/5500000000000?text=Tenho%20interesse%20no%20DNA%20do%20Vendedor"; // ajuste o número

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
        {/* Background gradient */}
        <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,#0b2a75_0%,#0b1220_50%)]"/>
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.10"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.03"/>
              </linearGradient>
            </defs>
            {[30, 45, 60, 75].map((r, i) => (
                <circle key={i} cx="50" cy="50" r={r} stroke="url(#ringGradient)" strokeWidth="0.6" fill="none"/>
            ))}
          </svg>
        </div>
        {/* Floating WhatsApp CTA */}
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Fale no WhatsApp"
           className="fixed right-5 bottom-5 z-50 grid place-items-center w-14 h-14 rounded-full bg-green-500 shadow-lg shadow-green-500/30 hover:bg-green-400 transition">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
               className="w-7 h-7 text-white">
            <path
                d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.003C.122 5.281 5.403 0 12.057 0c3.184 0 6.167 1.24 8.41 3.484a11.79 11.79 0 013.489 8.402c-.003 6.654-5.284 11.935-11.94 11.935a11.9 11.9 0 01-6.003-1.618L.057 24zm6.597-3.807c1.741.995 3.027 1.591 5.293 1.591 5.002 0 9.08-4.072 9.083-9.077.002-5.008-4.068-9.083-9.07-9.085-5.006 0-9.083 4.075-9.085 9.08 0 2.225.651 3.891 1.746 5.6l-.999 3.648 3.032-.757zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.289.173-1.412z"/>
          </svg>
        </a>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* HERO — split with image */}
          <section className="pt-20 pb-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <div>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-cyan-400/40 text-cyan-300 bg-cyan-400/10">Imersão Presencial</span>
                <span
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-cyan-400/40 text-cyan-300 bg-cyan-400/10">Alphaville • SP</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] max-w-2xl">
                Domine o <span className="text-cyan-300">DNA do Vendedor</span> e feche
                <br className="hidden sm:block"/> contratos maiores com
                <span className="text-cyan-300"> autoridade</span>.
              </h1>

              <p className="mt-3 text-slate-300 text-base sm:text-lg max-w-xl">
                Conteúdo direto ao ponto: frequência, high ticket, branding, holding, IA e posicionamento profissional —
                tudo aplicado para aumentar faturamento e criar oportunidades reais.
              </p>

              {/* Info row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mt-6">
                <div
                    className="rounded-2xl bg-slate-900/70 border border-slate-500/20 p-4 hover:border-cyan-400/30 transition-colors">
                  <div className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">Data</div>
                  <div className="text-lg font-bold">06/09</div>
                </div>
                <div
                    className="rounded-2xl bg-slate-900/70 border border-slate-500/20 p-4 hover:border-cyan-400/30 transition-colors">
                  <div className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">Horário</div>
                  <div className="text-lg font-bold">09:00</div>
                </div>
                <div
                    className="rounded-2xl bg-slate-900/70 border border-slate-500/20 p-4 hover:border-cyan-400/30 transition-colors">
                  <div className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">Local</div>
                  <div className="text-lg font-bold">Plataforma Internacional — Alphaville</div>
                </div>
              </div>

              {/* Countdown + CTA */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                <a href={CHECKOUT_URL}
                   className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-extrabold bg-cyan-400 text-[#001519] hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition-transform active:translate-y-0.5">
                  Garantir minha vaga
                </a>
                <a href={MAPS_URL} target="_blank" rel="noreferrer"
                   className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold border border-slate-500/40 hover:border-slate-400/80 text-slate-100">
                  Ver localização
                </a>
              </div>

              <div className="mt-4 flex">
                <div className="grid grid-flow-col gap-2 sm:gap-3" aria-label="Contagem regressiva para o evento">
                  {[{n: days, l: 'dias'}, {
                    n: hours.toString().padStart(2, '0'),
                    l: 'horas'
                  }, {n: minutes.toString().padStart(2, '0'), l: 'min'}, {
                    n: seconds.toString().padStart(2, '0'),
                    l: 'seg'
                  }].map((i, idx) => (
                      <div key={idx}
                           className="min-w-[72px] text-center rounded-xl bg-[#0b162e] border border-[#042a75]/60 p-3">
                        <div className="text-2xl font-black tabular-nums">{i.n}</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-400">{i.l}</div>
                      </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right image with rings */}
            <div className="relative md:ml-auto">
              {/* Card container — responsivo no mobile */}
              <div
                  className="relative z-10 mx-auto md:ml-auto w-full max-w-[520px] rounded-3xl ring-1 ring-white/10 shadow-2xl bg-slate-900/40 backdrop-blur-sm overflow-hidden">
                {/* RINGS centralizados no card */}

                {/* Padding interno + imagem centralizada e fluida */}
                <div className="relative z-10 p-2 sm:p-3">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                        src={PH}
                        alt="Paulo Henriques"
                        width={1040}
                        height={1330}
                        priority
                        sizes="(max-width: 768px) 90vw, 520px"
                        className="w-full h-auto object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* THEMES */}
          <section className="mt-10">
            <div className="rounded-2xl bg-slate-900/60 border border-slate-500/20 p-6">
              <h2 className="text-xl font-extrabold mb-3">Temas que serão abordados</h2>
              <div className="flex flex-wrap gap-2">
                {chips.map((c) => (
                    <span key={c}
                          className="px-4 py-2 rounded-full font-semibold bg-[#0b162e] border border-[#042a75]/60 text-blue-100">
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
                <li><b>Vendedores e empreendedores</b> que desejam aumentar o faturamento e fechar contratos maiores.
                </li>
                <li>Profissionais que querem se posicionar como autoridade e construir uma <b>marca pessoal forte</b>.
                </li>
                <li>Pessoas que entendem que <b>frequência, mentalidade e energia</b> influenciam diretamente nos
                  resultados.
                </li>
                <li>Quem busca <b>networking de alto nível</b> e acesso a <b>estratégias testadas</b> por quem já está
                  no topo.
                </li>
              </ul>
              <div className="mt-4">
                <a href={CHECKOUT_URL}
                   className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-extrabold bg-cyan-400 text-[#001519] hover:bg-cyan-300 transition-transform active:translate-y-0.5">
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
              <Image src={PHPerfil} alt="Foto de Paulo Henriques" width={160} height={160} loading="lazy"
                     className="mx-auto rounded-full w-40 h-40 object-cover border-4 border-cyan-400/40 shadow-lg"/>
              <h3 className="mt-3 text-lg font-bold">Paulo Henriques</h3>
              <p className="text-slate-400 max-w-xl mx-auto">Especialista em vendas e mentor de alta performance,
                reconhecido por impulsionar equipes e empreendedores a alcançarem resultados extraordinários com
                estratégia, frequência e posicionamento.</p>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="mt-6">
            <div className="rounded-2xl bg-slate-900/60 border border-slate-500/20 p-6">
              <h2 className="text-xl font-extrabold mb-3 text-center">O que dizem os participantes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-800/70 p-4">
                  <p className="italic text-slate-200">“O DNA do Vendedor mudou minha visão sobre vendas. Saí do evento
                    com estratégias práticas que já estão gerando resultados.”</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Image src={User} alt="Participante 1" width={40} height={40} loading="lazy"
                           className="w-10 h-10 rounded-full object-cover"/>
                    <span className="text-sm font-semibold text-slate-300">Maria Souza</span>
                  </div>
                </div>
                <div className="rounded-xl bg-slate-800/70 p-4">
                  <p className="italic text-slate-200">“Além do conteúdo incrível, o networking foi surreal. Fiz
                    conexões que abriram novas oportunidades no meu negócio.”</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Image src={User} alt="Participante 2" width={40} height={40} loading="lazy"
                           className="w-10 h-10 rounded-full object-cover"/>
                    <span className="text-sm font-semibold text-slate-300">João Oliveira</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="text-center text-sm text-slate-400 py-8">
            Plataforma Internacional — Alameda Tocantins, 956 — Alphaville, Barueri/SP • {" "}
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">Abrir no
              Google Maps</a>
            <br/>
            © {new Date().getFullYear()} DNA do Vendedor. Todos os direitos reservados.
          </footer>
        </div>
      </main>
  );
}
