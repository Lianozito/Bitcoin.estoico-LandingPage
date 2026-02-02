import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Shield, Lightbulb } from 'lucide-react';

const Differentials = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Linguagem Simples",
      description: "Nada de termos técnicos — aprenda passo a passo, sem confusão.",
      color: "from-[#c9a227] to-[#b38f22]"
    },
    {
      icon: Lightbulb,
      title: "Método Estoico",
      description: "Entenda Bitcoin com princípios de clareza, paciência e disciplina.",
      color: "from-[#c9a227] to-[#b38f22]"
    },
    {
      icon: Shield,
      title: "Segurança Real",
      description: "Saiba comprar, transferir e declarar seus bitcoins com confiança.",
      color: "from-[#c9a227] to-[#b38f22]"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            Por que este guia é diferente?
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Desenvolvido com sabedoria estoica e clareza moderna
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-stone-50 to-yellow-50/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-200 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;