import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Sitio Optimizado - Home</title>

        <meta
          name="description"
          content="Aprende sobre optimización SEO y rendimiento en Next.js."
        />

        <meta
          name="keywords"
          content="Next.js, SEO, optimización web"
        />

        <meta
          name="google-site-verification"
          content="v1C5Bz7JbLNWAFtcLPcUJBtIyKPZUmYOrVq7ZEvKNmY"
        />

        <meta
          property="og:title"
          content="Mi Sitio Optimizado"
        />

        <meta
          property="og:description"
          content="Descubre técnicas avanzadas para mejorar tu web con Next.js."
        />

        <meta
          property="og:image"
          content="https://lab14-j6vg.onrender.com/images/seo-image.png"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Laboratorio SEO Next.js"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Head>

      <h1>Bienvenido a mi página optimizada</h1>
      <p>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>
    </>
  );
}