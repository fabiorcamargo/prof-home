// app/contact/page.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Links: React.FC = () => {

  const links = [
    { url: 'https://instagram.com/profissionalizaead', image: '/ig.png', delay: 0.2 },
    { url: 'https://facebook.com/profissionalizaead', image: '/fb.png', delay: 0.4 },
    { url: 'https://youtube.com/@profissionalizaead', image: '/yt.png', delay: 0.6 },
    { url: 'https://home.profissionalizaead.com.br', image: '/logo.svg', delay: 0.8 },
    { url: 'https://wa.me/5544984233200', image: '/wa.png', delay: 1 }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-yellow">
      <main className="flex-grow mt-4 mx-auto mb-5 max-w-sm flex-col rounded-3xl border-4 border-t-8 border-gray-900 bg-white px-4 py-6 text-black shadow-2xl">
        <div className="grid place-items-center">
          <Image
            className="rounded-full animate-jump-in"
            alt="profile pic"
            src="/logo.svg"
            width={100}
            height={100}
            priority
          />
          <p className="pt-2 text-lg font-medium animate-jump-in">@profissionalizaead</p>
          <p className="text-sm font-extrabold text-gray-900 animate-jump-in">Cursos para o seu Futuro</p>
        </div>
        <div className="my-3 grid grid-cols-5 items-center gap-4 px-4">
          {links.map((link, index) => (
             <a href={link.url} key={index} target="_blank" rel="noopener noreferrer">
              <motion.button
                className="h-12 w-12 transform rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: link.delay, duration: 0.5 }}
              >
                <Image
                  className="w-12 rounded-full"
                  alt="social icon"
                  src={link.image}
                  width={48}
                  height={48}
                />
              </motion.button>
            </a>
          ))}
        </div>
        {['https://home.profissionalizaead.com.br'].map((link, index) => (
          <a href={link} key={index} target="_blank" rel="noopener noreferrer">
          <motion.div
            className="my-2 flex h-16 items-center justify-between rounded-lg border-2 border-b-4 border-l-4 border-black px-4 shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex items-center">
              <Image
                alt="photo"
                className="w-10 rounded-full"
                src="/logo.svg"
                width={40}
                height={40}
                priority
              />
              <div className="ml-2">
                <div className="text-xs font-semibold">Acesse a plataforma</div>
                <div className="flex text-xs font-light text-gray-600">
                  profissionalizaead.com.br
                </div>
              </div>
            </div>
          </motion.div>
        </a>
        ))}
      </main>
      <footer className="text-center font-extrabold text-black pb-4">
        Profissionaliza EAD &copy;
      </footer>
    </div>
  );
};

export default Links;
