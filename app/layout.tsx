import './globals.css';
import Script from 'next/script';
import Head from 'next/head';

export const metadata = {
  title: 'Profissionaliza EAD',
  description: 'Cursos para o seu futuro',
  keywords: ['Profissionaliza', 'Profissionaliza EAD', 'Educação', 'Cursos', 'Preparatórios'],

  themeColor: '#fdc500',

  openGraph: {
    title: 'Profissionaliza EAD',
    description: 'Cursos para o seu futuro',
    images: [
      {
        url: 'https://home.profissionalizaead.com.br/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo Profissionaliza EAD',
      },
    ],
    type: 'website',
    locale: 'pt_BR',
    url: 'https://profissionalizaead.com.br',
  },

  canonical: 'https://profissionalizaead.com.br',

  additionalMetaTags: [
    {
      name: 'fb:app_id',
      content: '3834776773426810',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Head>
        {/* Favicon */}

        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Pro EAD" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Canonical */}
        <link rel="canonical" href="https://profissionalizaead.com.br" />

        
        
      </Head>
      <body>
        <header>
          {/* Adicione elementos globais do cabeçalho aqui, se necessário */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Rodapé do site */}
        </footer>
        
        
      </body>
    </html>
  );
}
