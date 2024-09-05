import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Profissionaliza EAD',
  description: 'Cursos para o seu futuro',
  keywords: ['Profissionaliza', 'Profissionaliza EAD', 'Educação', 'Cursos', 'Preparatórios'],

  // Colocando o themeColor dentro do campo correto
  themeColor: '#fdc500',

  facebook: {
    appId: '3834776773426810',
  },

  openGraph: {
    title: 'Profissionaliza EAD',
    description: 'Cursos para o seu futuro',
    // Certifique-se de que o caminho para a imagem está correto e acessível
    images: [
      {
        url: 'https://home.profissionalizaead.com.br/Logo.png', // Se estiver no diretório público
        width: 1200,
        height: 630,
        alt: 'Logo Profissionaliza EAD',
      }
    ],
    type: 'website',
    locale: 'pt_BR',
    url: 'https://profissionalizaead.com.br',
  },

  canonical: 'https://profissionalizaead.com.br',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="pt-BR">
      <body>
        {children}
        <Script
        id="mautic-tracking"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,t,u,n,a,m){
              w['MauticTrackingObject']=n;
              w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},
              a=d.createElement(t),
              m=d.getElementsByTagName(t)[0];
              a.async=1;
              a.src=u;
              m.parentNode.insertBefore(a,m);
            })(window,document,'script','https://mautic.profissionalizaead.com.br/mtc.js','mt');

            mt('send', 'pageview');
          `,
        }}
      />
      </body>
    </html>

  )
}
