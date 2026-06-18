import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio - Sitio Optimizado SEO</title>

        <meta
          name="description"
          content="Página principal del laboratorio de optimización SEO desarrollado con Next.js."
        />

        <meta
          name="keywords"
          content="Next.js, SEO, optimización web, meta tags, sitemap"
        />

        <meta
          name="google-site-verification"
          content="v1C5Bz7JbLNWAFtcLPcUJBtIyKPZUmYOrVq7ZEvKNmY"
        />

        <meta property="og:title" content="Inicio - Sitio Optimizado SEO" />

        <meta
          property="og:description"
          content="Página principal optimizada con meta tags, Open Graph, imágenes optimizadas y sitemap dinámico."
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
        <h1>Bienvenido a mi página optimizada</h1>

        <p>
          Aprende cómo mejorar el rendimiento y SEO en Next.js.
        </p>

        <Image
          src="/images/seo-image.png"
          width={800}
          height={400}
          alt="Ejemplo de imagen optimizada"
          priority
        />
      </main>
    </>
  );
}