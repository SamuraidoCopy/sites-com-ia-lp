import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Pillars } from "@/components/Pillars";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] flex flex-col overflow-x-hidden">
      <Hero />
      <Problem />
      <Pillars />
      <Pricing />
      
      <footer className="py-12 text-center text-gray-600 border-t border-gray-800">
        <p>© 2026 O Novo Mercado. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
