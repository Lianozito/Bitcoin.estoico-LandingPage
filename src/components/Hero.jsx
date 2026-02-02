import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {

  const handleDownload = () => {
    window.open('https://pay.cakto.com.br/c33fjfa_563575', '_blank');
  };

  return <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5OTk5OTkiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-8">
            <div className="inline-block">
              <motion.span initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2
            }} className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                ✨ Guia Completo para Iniciantes
              </motion.span>
            </div>

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
              Aprenda Bitcoin do Zero com o{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#b38f22]">
                Método Estoico
              </span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="text-xl text-stone-600 leading-relaxed">
              Um guia claro e didático para quem quer começar no mundo do Bitcoin com sabedoria, segurança e propósito.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }} className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleDownload} size="lg" className="bg-[#c9a227] hover:bg-[#b38f22] text-white px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-yellow-200 transition-all group">
                <Download className="mr-2 group-hover:animate-bounce" />
                Baixar o Guia Agora
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => document.getElementById('beneficios')?.scrollIntoView({
              behavior: 'smooth'
            })} size="lg" variant="outline" className="border-2 border-stone-300 hover:border-[#c9a227] text-stone-700 hover:text-[#c9a227] px-8 py-6 text-lg rounded-xl transition-all">
                Saiba Mais
              </Button>
            </motion.div>

            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.6
          }} className="flex items-center space-x-2 text-stone-600">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white"></div>
              </div>
              <p className="text-sm font-medium">
                <span className="text-[#c9a227] font-bold">+5.000</span> iniciantes já baixaram
              </p>
            </motion.div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative">
            <div className="relative z-10">
              <motion.div animate={{
              y: [0, -20, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="relative">
                <img className="w-full max-w-md mx-auto drop-shadow-2xl rounded-lg" alt="Manual Bitcoin Estoico - Capa do Ebook" src="/Capa-Manual-Bitcoin-Estoico.png" loading="eager" fetchpriority="high"/>
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 blur-3xl -z-10"></div>
              </motion.div>
            </div>

            <div className="absolute top-10 -right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 -left-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;