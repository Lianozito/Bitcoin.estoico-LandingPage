import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Iniciante em Bitcoin",
      content: "Finalmente um guia que explica Bitcoin de forma clara! Consegui comprar meu primeiro satoshi sem medo.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Investidor Iniciante",
      content: "A abordagem estoica fez toda diferença. Aprendi com calma e segurança, sem pressa.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Profissional Liberal",
      content: "Excelente para quem não entende nada de tecnologia. Linguagem simples e direta ao ponto.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 px-4 bg-gradient-to-b from-yellow-50/50 to-stone-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            O que dizem nossos leitores
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Mais de 5.000 pessoas já transformaram sua relação com Bitcoin
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-200 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-yellow-200" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#c9a227] text-[#c9a227]" />
                ))}
              </div>

              <p className="text-stone-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#c9a227] to-[#b38f22] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-stone-900">{testimonial.name}</p>
                  <p className="text-sm text-stone-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;