import Head from 'next/head';
import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Profissionaliza EAD',
  description: 'Cursos para o seu futuro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="pt-BR">
      <Head>
        <meta name="theme-color" content="#FFFF00" />
      </Head>
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
