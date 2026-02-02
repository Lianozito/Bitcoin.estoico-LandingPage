import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Differentials from '@/components/Differentials';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Manual Bitcoin Estoico – Guia para Iniciantes | Aprenda Bitcoin do Zero</title>
        <meta name="description" content="Aprenda Bitcoin do zero com o método estoico. Um guia claro e didático para quem quer começar no mundo do Bitcoin com sabedoria, segurança e propósito." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-stone-50 via-yellow-50/30 to-stone-100">
        <Header />
        <Hero />
        <Differentials />
        <Benefits />
        <Testimonials />
        <CTA />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;