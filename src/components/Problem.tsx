export function Problem() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Você está travado nessa <span className="text-cyan-400">linha do tempo?</span>
          </h2>
          <p className="text-xl text-gray-400">Este treinamento é exatamente para você constata pelo menos um destes problemas.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ProblemCard 
            title="Você não sabe programar"
            description="Acha que criar sites é “coisa de desenvolvedor”. Você vai criar páginas profissionais sem escrever UMA linha de código. A IA faz o trabalho pesado."
          />
          <ProblemCard 
            title="Você é LENTO DEMAIS"
            description="Você já perdeu dias brigando com plugins que quebram, páginas pesadas do WordPress e com o Elementor travando na sua cara. Enquanto você arranca os cabelos tentando centralizar um botão, a IA constrói a página inteira, converte e coloca o dinheiro no seu bolso."
          />
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl border border-gray-800 bg-[#121212] hover:border-cyan-500/50 transition-colors">
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-lg">{description}</p>
    </div>
  )
}
