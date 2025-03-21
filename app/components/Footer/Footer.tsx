"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Abre o modal automaticamente ao carregar a página
    setIsModalOpen(true);
  }, []);

  const closeModal = () => setIsModalOpen(false);

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  return (
    <div className="mt-10">
      <div className="bg-blue pt-10" id="first-section">
        {/* All Rights Reserved */}
        <div className="w-full flex flex-col items-center">
          <div className="flex gap-2 justify-center">
            <Link href="https://www.instagram.com/profissionalizaead">
              <Image  width={50}
                      height={50}
                      src="/assets/footer/instagram.svg"
                      alt="instagram"
                      className="footer-icons" />
            </Link>
            <Link href="https://www.facebook.com/profissionalizaead">
              <Image  width={50}
                      height={50}
                      src="/assets/footer/facebook.svg"
                      alt="facebook"
                      className="footer-icons" />
            </Link>
            <Link href="https://www.youtube.com/@profissionalizaead">
              <Image  width={50}
                      height={50}
                      src="/assets/footer/youtube.svg"
                      alt="youtube"
                      className="footer-icons" />
            </Link>
            {/* <Link href="https://t.me/profissionaliza_bot">
              <Image  width={50}
                      height={50}
                      src="/assets/footer/whatsapp.svg"
                      alt="whatsapp"
                      className="footer-icons" />
            </Link> */}
          </div>

          <div className="w-full flex flex-col items-center pt-8">
            <Image width={120}
                   height={80} 
                   src="/assets/logo/Logo-White.svg" 
                   alt="logo" 
                   className="mb-4" 
                   style={{ width: 'auto', height: 'auto' }}
                   />
            <h3 className="text-white text-lg font-medium">Seu caminho para o Sucesso.</h3>
          </div>
        </div>

        <div className="pb-24 px-4 pt-10">
          <h3 className="text-center text-offwhite">
            Avenida Advogado Horácio Raccanello Filho
            <br />
            5410 Salas 01 e 02 - Zona 7, Novo Centro, 87020-035 Maringá - PR | Brasil
            <br />
            CEP: 87020-035
            <br />
            CNPJ: 42.866.959/0001-54
            <br />
            CNPJ: 41.769.690/0001-25
          </h3>
          <br />
          <h3 className="text-center text-offwhite">
            @2024 - Todos os direitos Reservados à
            <Link href="https://profissionalizaead.com.br/" target="_blank">
              Profissionaliza EAD
            </Link>
          </h3>
        </div>

        <div className="fixed bottom-4 right-4 z-10">
          <a href="https://wa.me/message/ZQW6XHYT6UVGI1" target="_blank" rel="noopener noreferrer">
            <Image
              className="w-20 h-20 rounded-full p-2 footer-icons"
              alt="whatsapp"
              src="WhatsApp.svg"
              width={100}
              height={100}
              priority={true}
            />
          </a>
        </div>

        {/* Modal Component */}
        {/* {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={handleOutsideClick}
          >
            <div
              className="bg-white w-96 rounded-lg shadow-lg p-6"
              ref={modalRef}
              onClick={(e) => e.stopPropagation()} // Impede o clique no conteúdo de fechar o modal
            >
              <h2 className="text-xl font-semibold mb-4">Aviso Importante</h2>
              <p className="text-gray-600 mb-4">
                Nosso atendimento via Whatsapp está indisponível. Caso precise de ajuda clique em AJUDA ou clique em CONTINUAR.
              </p>
              <div className="flex justify-end gap-2">
                <a
                  href="https://wa.me/message/ZQW6XHYT6UVGI1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                >
                  AJUDA
                </a>
                <button
                  onClick={closeModal}
                  className="bg-lightgrey hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                >
                  CONTINUAR
                </button>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Footer;
