"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import QRCode from "qrcode.react";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

const Links: React.FC = () => {
  const links = [
    { url: "https://instagram.com/profissionalizaead", image: "/ig.png", delay: 0.2 },
    { url: "https://facebook.com/profissionalizaead", image: "/fb.png", delay: 0.4 },
    { url: "https://youtube.com/@profissionalizaead", image: "/yt.png", delay: 0.6 },
    { url: "https://home.profissionalizaead.com.br", image: "/logo.svg", delay: 0.8 },
    { url: "https://wa.me/5544984233200", image: "/wa.png", delay: 1 }
  ];

  const [paymentInfo, setPaymentInfo] = useState<any>(null);
  const [pixCode, setPixCode] = useState<string>("");
  const [payCustomer, setCustomer] = useState<any>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const payId = new URLSearchParams(window.location.search).get("payid");

    if (!payId) {
      setError("Sem informações para consultar pagamento.");
      return;
    }

    const fetchPaymentInfo = async () => {
      try {
        const response = await axios.get('/api/payments', {
          params: { payId: payId },
        });
        setPaymentInfo(response.data.payment);
        setPixCode(response.data.pixQrCode.payload);
        setCustomer(response.data.customer);
      } catch (error) {
        console.error('Erro ao buscar informações de pagamento:', error);
        setError("Erro ao buscar as informações de pagamento.");
      }
    };

    fetchPaymentInfo();
  }, []);

  const copyToClipboard = () => {
    if (pixCode) {
      navigator.clipboard.writeText(pixCode);
      alert("Código Pix copiado!");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-yellow">
      <main className="flex-grow mt-4 mx-auto mb-5 max-w-sm flex-col rounded-3xl border-4 border-t-8 border-gray-900 bg-white px-4 py-6 text-black shadow-2xl">
        <div className="grid place-items-center">
          <Image className="rounded-full animate-jump-in" alt="profile pic" src="/logo.svg" width={100} height={100} priority />
          <p className="pt-2 text-lg font-medium animate-jump-in">@profissionalizaead</p>
          <p className="text-sm font-extrabold text-gray-900 animate-jump-in">Cursos para o seu Futuro</p>
        </div>

        {/* Verifica se houve erro, se sim, exibe a mensagem */}
        {error ? (
          <div className="my-4 p-4 border-2 border-red-500 text-red-500 rounded-lg">
            <p>{error}</p>
          </div>
        ) : (
          <>
            <div className="my-4 p-4 border-2 border-black rounded-lg shadow-lg bg-gray-100">
              <h2 className="text-lg font-bold text-center">QR Code para Pagamento</h2>
              <div className="flex justify-center my-4">
                {pixCode ? <QRCode value={pixCode} size={180} /> : <p className="text-sm text-red-600">Carregando QR Code...</p>}
              </div>
            </div>

            <div className="my-4 p-4 border-2 border-black rounded-lg shadow-lg bg-gray-100">
              <h2 className="text-lg font-bold text-center">Informações de Pagamento</h2>
              {paymentInfo ? (
                <>
                  <p className="text-sm font-medium">Cliente: {payCustomer?.name}</p>
                  <p className="text-sm font-medium">
                    Mês de Referência: {paymentInfo.dueDate ? format(parseISO(paymentInfo.dueDate), "MMMM", { locale: ptBR }).charAt(0).toUpperCase() + format(parseISO(paymentInfo.dueDate), "MMMM", { locale: ptBR }).slice(1) : "Carregando..."}
                  </p>
                  <p className="text-sm font-medium">
                    Vencimento: {paymentInfo.dueDate ? format(parseISO(paymentInfo.dueDate), "dd/MM/yy") : "Carregando..."}
                  </p>
                  <p className="text-sm font-medium">Valor: R$ {paymentInfo.value}</p>
                </>
              ) : (
                <p className="text-sm font-medium text-red-600">Carregando informações de pagamento...</p>
              )}
            </div>

            {pixCode && (
              <motion.div
                className="my-2 flex h-16 items-center justify-between rounded-lg border-2 border-b-4 border-l-4 border-black px-4 shadow-xl cursor-pointer bg-white hover:bg-gray-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                onClick={copyToClipboard}
              >
                <div className="flex items-center">
                  <Image alt="pix logo" className="w-10 rounded-full" src="/pix.svg" width={40} height={40} priority />
                  <div className="ml-2">
                    <div className="text-xs font-semibold">Copiar Código PIX</div>
                    <div className="flex text-xs font-light text-gray-600">Clique para copiar e pagar</div>
                  </div>
                </div>
              </motion.div>
            )}

            {paymentInfo && paymentInfo.invoiceUrl ? (
              <a href={paymentInfo.invoiceUrl} target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="my-2 flex h-16 items-center justify-between rounded-lg border-2 border-b-4 border-l-4 border-black px-4 shadow-xl cursor-pointer bg-white hover:bg-gray-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="flex items-center">
                    <Image alt="invoice icon" className="w-10 rounded-full" src="/fatura.svg" width={40} height={40} priority />
                    <div className="ml-2">
                      <div className="text-xs font-semibold">Ver Fatura Online</div>
                      <div className="flex text-xs font-light text-gray-600">Clique para acessar sua fatura</div>
                    </div>
                  </div>
                </motion.div>
              </a>
            ) : (
              <p>Carregando fatura...</p> // Mensagem exibida enquanto o paymentInfo não estiver disponível
            )}

            <div className="mt-10 grid grid-cols-5 items-center gap-4 px-4">
              {links.map((link, index) => (
                <a href={link.url} key={index} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="h-12 w-12 transform rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: link.delay, duration: 0.5 }}
                  >
                    <Image className="w-12 rounded-full" alt="social icon" src={link.image} width={48} height={48} />
                  </motion.button>
                </a>
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="text-center font-extrabold text-black pb-4">Profissionaliza EAD &copy;</footer>
    </div>
  );
};

export default Links;
