import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crie Sites Profissionais com IA",
  description: "Aprenda a criar sites em horas e fature pelo menos R$1.500 por cada projeto usando Inteligência Artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased selection:bg-cyan-500/30`}>
        {children}
      </body>
    </html>
  );
}
