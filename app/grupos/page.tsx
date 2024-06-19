// app/contact/page.tsx
"use client"
import React from 'react';
import Mentor from '../components/Mentor/Mentor';
import Newsletter from '../components/Newsletter/Newsletter';
import Card from '../components/Card/Card'; // Importando o componente Card


const Grupos: React.FC = () => {
  return (
    <main>
      <Card /> {/* Adicionando o componente de card */}
      <Newsletter />
    </main>
  );
};

export default Grupos;
