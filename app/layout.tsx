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
        url: 'https://home.profissionalizaead.com.br/Logo1200x630.png.png',
        width: 1200,
        height: 630,
        alt: 'Logo Profissionaliza EAD',
      },
      {
        url: 'https://home.profissionalizaead.com.br/Thumbnail.png',
        width: 600,
        height: 315,
        alt: 'Thumbnail Profissionaliza EAD',
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
        
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"  />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Pro EAD" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Meta Tags SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Profissionaliza EAD" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#fdc500" />

        {/* Canonical */}
        <link rel="canonical" href="https://profissionalizaead.com.br" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Profissionaliza EAD",
              "url": "https://profissionalizaead.com.br",
              "logo": "https://home.profissionalizaead.com.br/Logo.png",
              "sameAs": [
                "https://www.facebook.com/ProfissionalizaEAD",
                "https://www.instagram.com/ProfissionalizaEAD",
                "https://www.linkedin.com/company/profissionalizaead",
              ],
            }),
          }}
        />
      </Head>
      <body>
        <header>
          {/* Elementos globais do cabeçalho podem ser adicionados aqui */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Adicione elementos do rodapé aqui */}
        </footer>
      </body>
    </html>
  );
}
