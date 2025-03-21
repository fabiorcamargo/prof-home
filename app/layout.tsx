import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Profissionaliza EAD | Cursos para o seu Futuro",
  description:
    "A Profissionaliza EAD oferece cursos de alta qualidade para impulsionar sua carreira. Confira nossos preparatórios e cursos profissionalizantes!",
  keywords: [
    "Cursos Online",
    "Educação a Distância",
    "Profissionaliza EAD",
    "Capacitação",
    "Preparatórios",
  ],
  themeColor: "#fdc500",
  openGraph: {
    title: "Profissionaliza EAD | Cursos Online",
    description:
      "A melhor plataforma de cursos profissionalizantes e preparatórios para concursos.",
    site_name: "Profissionaliza EAD",
    images: [
      {
        url: "https://profissionalizaead.com.br/Logo1200x630.png",
        width: 1200,
        height: 630,
        alt: "Logo Profissionaliza EAD",
      },
    ],
    type: "website",
    locale: "pt_BR",
    url: "https://profissionalizaead.com.br",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ProfissionalizaEAD",
    title: "Profissionaliza EAD | Cursos para seu Futuro",
    description:
      "Cursos online para capacitação profissional e preparatórios para concursos públicos.",
    image: "https://profissionalizaead.com.br/Thumbnail.png",
  },
  canonical: "https://profissionalizaead.com.br",
  additionalMetaTags: [
    {
      name: "fb:app_id",
      content: "3834776773426810",
    },
    {
      name: "robots",
      content:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Ícones e Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="Profissionaliza EAD" />
        <meta name="theme-color" content="#fdc500" />

        {/* Canonical */}
        <link rel="canonical" href="https://profissionalizaead.com.br" />

        {/* Dados Estruturados de Avaliação */}
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Profissionaliza EAD",
              "url": "https://profissionalizaead.com.br",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "5210",
              },
            }),
          }}
          id="structured-data-rating" // Adicionando o id aqui
        />
      </head>
      <body>
        <main>{children}</main>
        <footer>{/* Rodapé do site */}</footer>
      </body>
    </html>
  );
}
