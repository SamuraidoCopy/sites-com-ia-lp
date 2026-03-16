import { Zap, Target, Star } from "lucide-react";

export function Pillars() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            O passo a passo completo para faturar no <span className="text-cyan-400">automático</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Você não vai assistir 40 horas de aulas teóricas. Você vai ter exatamente o necessário para sair FAZENDO e FATURANDO.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <PillarCard 
            icon={<Zap className="w-8 h-8 text-cyan-400" />}
            title="Escala Implacável"
            subtitle="PILAR 1: VELOCIDADE DE EXECUÇÃO"
            description="Como esmagar seus concorrentes entregando um site premium em 2 horas (enquanto eles pedem 15 dias de prazo)."
          />
          <PillarCard 
            icon={<Target className="w-8 h-8 text-cyan-400" />}
            title="Caçada Injusta"
            subtitle="PILAR 2: PROSPECÇÃO AUTOMATIZADA"
            description="O sistema que faz clientes implorarem pela sua velocidade (não precisa ser o 'cara de vendas', o robô prospecta por você)."
          />
          <PillarCard 
            icon={<Star className="w-8 h-8 text-cyan-400" />}
            title="Entrega Premium"
            subtitle="PILAR 3: ALTO VALOR"
            description="Como cobrar mais de R$ 1.500+ ao invés de R$ 800 por projeto. Saiba exatamente qual é a diferença de uma pessoa que faz ‘qualquer trabalho’ para um profissional desejado."
          />
        </div>
      </div>
    </section>
  );
}

function PillarCard({ icon, title, subtitle, description }: { icon: React.ReactNode, title: string, subtitle: string, description: string }) {
  return (
    <div className="group p-10 rounded-3xl bg-[#0a0a0a] border border-gray-800 relative overflow-hidden transition-all duration-300 hover:border-gray-700">
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
        {icon}
      </div>
      <div className="mb-6 inline-flex p-4 rounded-2xl bg-gray-900 border border-gray-800">
        {icon}
      </div>
      <div className="text-cyan-500 font-bold text-sm tracking-widest uppercase mb-2">
        {subtitle}
      </div>
      <h3 className="text-2xl font-extrabold mb-4 text-white">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed text-lg">
        {description}
      </p>
    </div>
  )
}
