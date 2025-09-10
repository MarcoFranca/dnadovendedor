import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PremiumFX from "@/components/PremiumFX"; // ⬅️ novo

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DNA do Vendedor — Imersão",
    description: "Frequência, High Ticket, Branding, IA e mais...",
    icons: {
        icon: [{ url: "/icon.png", type: "image/png" }], // type = image/png
        apple: "/apple-touch-icon.png",
    },
    openGraph: {
        title: "DNA do Vendedor",
        description: "Imersão em Alphaville — 06/09, 9h",
        images: ["/og-image.jpg"],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* EFEITOS PREMIUM (globais) */}
        <PremiumFX />
        {children}
        </body>
        </html>
    );
}
