export function Pricing() {
  return (
    <section id="oferta" className="py-24 bg-gradient-to-b from-[#121212] to-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="p-10 md:p-14 rounded-3xl border border-cyan-500/30 bg-gray-900/50 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Comece agora sem riscos
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Tenha acesso a 2 SUPER BÔNUS que valem mais do que o nosso treinamento inteiro.
            </p>

            <div className="flex flex-col items-center justify-center gap-2 mb-10">
              <span className="text-gray-500 line-through text-xl font-medium">De R$ 97</span>
              <div className="text-5xl md:text-7xl font-extrabold text-white">
                R$ 29,90
              </div>
              <span className="text-cyan-400 font-bold">PAGAMENTO ÚNICO</span>
            </div>

            <button className="w-full md:w-auto px-12 py-5 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-extrabold text-xl rounded-full transition-all duration-300 box-glow hover:scale-105 cursor-pointer">
              QUERO ACESSAR O TREINAMENTO AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
