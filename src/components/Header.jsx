import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleDownload = () => {
    window.open('https://pay.cakto.com.br/c33fjfa_563575', '_blank');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-[#c9a227] to-[#b38f22] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">₿</span>
          </div>
          <span className="text-xl font-semibold text-stone-800">Bitcoin Estoico</span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('diferenciais')}
            className="text-stone-700 hover:text-[#c9a227] transition-colors font-medium"
          >
            Diferenciais
          </button>
          <button
            onClick={() => scrollToSection('beneficios')}
            className="text-stone-700 hover:text-[#c9a227] transition-colors font-medium"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection('depoimentos')}
            className="text-stone-700 hover:text-[#c9a227] transition-colors font-medium"
          >
            Depoimentos
          </button>
          <Button
            onClick={handleDownload}
            className="bg-[#c9a227] hover:bg-[#b38f22] text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Baixar Agora
          </Button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-stone-800"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-stone-200 shadow-lg"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('diferenciais')}
              className="text-stone-700 hover:text-[#c9a227] transition-colors font-medium text-left"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-stone-700 hover:text-[#c9a227] transition-colors font-medium text-left"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-stone-700 hover:text-[#c9a227] transition-colors font-medium text-left"
            >
              Depoimentos
            </button>
            <Button
              onClick={handleDownload}
              className="bg-[#c9a227] hover:bg-[#b38f22] text-white w-full"
            >
              Baixar Agora
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;