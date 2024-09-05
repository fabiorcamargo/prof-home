"use client";
import React, { useEffect } from 'react';
import { DotLottie } from '@lottiefiles/dotlottie-web';
import Image from 'next/image';
import Script from 'next/script';

const Links: React.FC = () => {
  useEffect(() => {
    const canvas = document.querySelector('#dotlottie-canvas') as HTMLCanvasElement | null;

    if (canvas) {
      const dotLottie = new DotLottie({
        autoplay: true,
        loop: true,
        canvas: canvas,
        src: "/maintenance.json",
      });

      return () => {
        dotLottie.destroy();
      };
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-yellow">
      <main className="flex-grow mt-4 mx-auto mb-5 max-w-xl flex-col rounded-3xl border-4 border-t-8 border-gray-900 bg-white px-4 py-6 text-black shadow-2xl">
        <div className="grid place-items-center">
          <Image
            className="rounded-full animate-jump-in"
            alt="profile pic"
            src="https://storage.profissionalizaead.com.br/storage/logo%201x1.png"
            width={100}
            height={100}
          />
          <h2 className="text-2xl font-semibold">Estamos em manutenção</h2>
          <h4 className="text-xl">Em breve estaremos disponíveis</h4>

          <canvas id="dotlottie-canvas" className="w-full h-auto" />

          <a href="/" className="bg-purple hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Página inicial
          </a>
        </div>

        <div className="grid place-items-center pt-16">
          <h4>Quer ser avisado quando estivermos disponíveis? Deixe seu email.</h4>

          {/* Corrigido o iframe */}
          <iframe
            src="//mautic.profissionalizaead.com.br/form/3"
            width="300"
            height="300"
            style={{ border: 'none' }}
          />
        </div>
      </main>
      <footer className="text-center font-extrabold text-black pb-4">
        Profissionaliza EAD &copy;
      </footer>
    </div>
  );
};

export default Links;
