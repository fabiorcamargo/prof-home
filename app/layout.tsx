import './globals.css';
import Script from 'next/script';
import Head from 'next/head';

export const metadata = {
  title: 'Profissionaliza EAD | Cursos para o seu Futuro',
  description: 'A Profissionaliza EAD oferece cursos de alta qualidade para impulsionar sua carreira. Confira nossos preparatórios e cursos profissionalizantes!',
  keywords: ['Cursos Online', 'Educação a Distância', 'Profissionaliza EAD', 'Capacitação', 'Preparatórios'],

  themeColor: '#fdc500',

  openGraph: {
    title: 'Profissionaliza EAD | Cursos Online',
    description: 'A melhor plataforma de cursos profissionalizantes e preparatórios para concursos.',
    site_name: 'Profissionaliza EAD',
    images: [
      {
        url: 'https://profissionalizaead.com.br/Logo1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Logo Profissionaliza EAD',
      },
      {
        url: 'https://profissionalizaead.com.br/Thumbnail.png',
        width: 600,
        height: 315,
        alt: 'Thumbnail Profissionaliza EAD',
      },
    ],
    type: 'website',
    locale: 'pt_BR',
    url: 'https://profissionalizaead.com.br',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@ProfissionalizaEAD',
    title: 'Profissionaliza EAD | Cursos para seu Futuro',
    description: 'Cursos online para capacitação profissional e preparatórios para concursos públicos.',
    image: 'https://profissionalizaead.com.br/Thumbnail.png',
  },

  canonical: 'https://profissionalizaead.com.br',

  additionalMetaTags: [
    {
      name: 'fb:app_id',
      content: '3834776773426810',
    },
    {
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
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
        {/* Ícones e Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Profissionaliza EAD" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Meta Tags SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="author" content="Profissionaliza EAD" />
        <meta name="theme-color" content="#fdc500" />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://profissionalizaead.com.br" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Profissionaliza EAD | Cursos Online" />
        <meta property="og:description" content="Cursos online profissionalizantes e preparatórios para concursos." />
        <meta property="og:image" content="https://profissionalizaead.com.br/Logo1200x630.png" />
        <meta property="og:url" content="https://profissionalizaead.com.br" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Profissionaliza EAD | Cursos para seu Futuro" />
        <meta name="twitter:description" content="Cursos online para capacitação profissional e preparatórios para concursos públicos." />
        <meta name="twitter:image" content="https://profissionalizaead.com.br/Thumbnail.png" />
        
        {/* JSON-LD Estruturado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Profissionaliza EAD",
              "url": "https://profissionalizaead.com.br",
              "logo": "https://profissionalizaead.com.br/Logo.png",
              "sameAs": [
                "https://www.facebook.com/ProfissionalizaEAD",
                "https://www.instagram.com/ProfissionalizaEAD",
                "https://www.youtube.com/@profissionalizaead",
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+55-11-99999-9999",
                  "contactType": "customer service",
                  "areaServed": "BR",
                  "availableLanguage": ["Portuguese", "English"]
                }
              ]
            }),
          }}
        />
      </Head>
      <body>
        <header>
          {/* Cabeçalho do site */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Rodapé do site */}
        </footer>
      </body>
    </html>
  );
}
