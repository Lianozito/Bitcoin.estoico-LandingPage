import React from 'react';
import { motion } from 'framer-motion';
import { Download, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const handleDownload = () => {
    window.open('https://pay.cakto.com.br/c33fjfa_563575', '_blank');
  };

  return (
    <section id="download" className="py-20 px-4 bg-stone-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#c9a227] to-[#b38f22] rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Comece sua jornada estoica no mundo do Bitcoin hoje
          </h2>

          <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Baixe agora o <span className="text-[#c9a227] font-semibold">Manual Bitcoin Estoico</span> e aprenda de forma clara, segura e sem enrolação.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-[#c9a227] hover:bg-[#b38f22] text-white px-12 py-8 text-xl rounded-2xl shadow-2xl hover:shadow-[#c9a227]/50 transition-all group"
            >
              <Download className="mr-3 group-hover:animate-bounce" size={28} />
              Baixar Agora — Download Imediato
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={28} />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center space-x-3 text-stone-400"
          >
            <Shield className="w-5 h-5 text-[#c9a227]" />
            <p className="text-sm">
              <span className="text-[#c9a227] font-semibold">Mais de 5.000</span> iniciantes já baixaram este guia
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;