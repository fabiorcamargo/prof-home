// app/contact/page.tsx
"use client"
import React from 'react';
import Mentor from '../components/Mentor/Mentor';
import Newsletter from '../components/Newsletter/Newsletter';
import Card from '../components/Card/Card'; // Importando o componente Card
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const Grupos: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Card /> {/* Adicionando o componente de card */}
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Grupos;
