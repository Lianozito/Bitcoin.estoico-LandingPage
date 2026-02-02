import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/bitcoin.estoico", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@bitcoinestoico", label: "YouTube" },
    { icon: Mail, href: "mailto:btcestoico@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c9a227] to-[#b38f22] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">₿</span>
              </div>
              <span className="text-xl font-semibold text-white">Bitcoin Estoico</span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Aprenda Bitcoin com sabedoria, clareza e propósito.
            </p>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Links Rápidos</span>
            <ul className="space-y-2">
              <li>
                <a href="#diferenciais" className="text-stone-400 hover:text-[#c9a227] transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-stone-400 hover:text-[#c9a227] transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-stone-400 hover:text-[#c9a227] transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Redes Sociais</span>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-stone-800 hover:bg-[#c9a227] rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-stone-500 text-sm">
            © {currentYear} Bitcoin Estoico. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-stone-500 hover:text-[#c9a227] transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-stone-500 hover:text-[#c9a227] transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;