import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold tracking-wide uppercase">
          Método Comprovado - Vagas Limitadas
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
          Crie sites profissionais em poucas horas e receba pelo menos <span className="text-cyan-400">R$ 1.500</span> por cada um.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
          Saiba exatamente o que fazer (e como fazer) para criar páginas com Inteligência Artificial. Você não precisa de experiência ou ser programador para começar hoje! O mercado já está procurando profissionais para pagar por velocidade.
        </p>
        
        <a href="#oferta" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-extrabold text-lg md:text-xl rounded-full transition-all duration-300 box-glow hover:scale-105">
          QUERO CRIAR SITES COM IA
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
