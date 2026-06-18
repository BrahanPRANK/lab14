import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto - Sitio SEO</title>

        <meta
          name="description"
          content="Página de contacto del sitio optimizado para SEO mediante meta tags y sitemap dinámico."
        />

        <meta
          name="keywords"
          content="contacto, SEO, Next.js, sitio optimizado"
        />

        <meta property="og:title" content="Contacto - Sitio SEO" />

        <meta
          property="og:description"
          content="Comunícate con el sitio del laboratorio de optimización SEO desarrollado con Next.js."
        />

        <meta
          property="og:image"
          content="https://lab14-j6vg.onrender.com/images/seo-image.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Laboratorio SEO Next.js" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
        <h1>Contacto</h1>
        <p>
          Esta página forma parte del sitio optimizado y cuenta con meta tags
          personalizados para mejorar su visibilidad en buscadores.
        </p>
      </main>
    </>
  );
}