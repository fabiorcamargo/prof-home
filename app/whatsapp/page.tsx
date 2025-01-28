// app/contact/page.tsx
"use client";

import React from 'react';
import Head from 'next/head'; // Importando a tag Head do Next.js
import Card from '../components/Card/Card'; // Importando o componente Card
import HeaderAlert from '../components/HeaderAlert/HeaderAlert'; // Importando o componente Card


const Grupos: React.FC = () => {
  return (
    <>
      <Head>
        <title>Profissionaliza EAD</title>
        <meta name="description" content="Cursos para o seu Futuro" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Profissionaliza EAD" />
        <meta property="og:description" content="Cursos para o seu Futuro" />
        <meta property="og:image" content="/Logo.png" />
        <meta property="og:url" content="https://profissionalizaead.com.br/whatsapp" />
        <meta property="og:type" content="website" />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Profissionaliza EAD" />
        <meta name="twitter:description" content="Cursos para o seu Futuro" />
        <meta name="twitter:image" content="/Logo.png" />
        <meta name="twitter:url" content="https://profissionalizaead.com.br/whatsapp" />
      </Head>
      <main className="pt-16">
  <HeaderAlert />
  <Card />
</main>
    </>
  );
};

export default Grupos;
