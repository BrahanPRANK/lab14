import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio - Sitio Web Optimizado para SEO con Next.js</title>

        <meta
          name="description"
          content="Página principal del laboratorio de optimización SEO desarrollado con Next.js, meta tags dinámicos, Open Graph, imágenes optimizadas y sitemap dinámico."
        />

        <meta
          name="keywords"
          content="Next.js, SEO, optimización web, meta tags, sitemap dinámico, Open Graph"
        />

        <meta
          name="google-site-verification"
          content="v1C5Bz7JbLNWAFtcLPcUJBtIyKPZUmYOrVq7ZEvKNmY"
        />

        <meta
          property="og:title"
          content="Inicio - Sitio Web Optimizado para SEO con Next.js"
        />

        <meta
          property="og:description"
          content="Página principal optimizada con meta tags, Open Graph, imágenes optimizadas y sitemap dinámico."
        />

        <meta
          property="og:image"
          content="https://lab14-j6vg.onrender.com/images/seo-image.png"
        />

        <meta
          property="og:image:width"
          content="1200"
        />

        <meta
          property="og:image:height"
          content="630"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://lab14-j6vg.onrender.com/"
        />

        <meta
          property="og:site_name"
          content="Laboratorio SEO Next.js"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Inicio - Sitio Web Optimizado para SEO con Next.js"
        />

        <meta
          name="twitter:description"
          content="Página principal optimizada con meta tags, Open Graph, imágenes optimizadas y sitemap dinámico."
        />

        <meta
          name="twitter:image"
          content="https://lab14-j6vg.onrender.com/images/seo-image.png"
        />
      </Head>

      <main style={styles.main}>
        <h1>Bienvenido a mi página optimizada</h1>

        <p>
          Aprende cómo mejorar el rendimiento y SEO en Next.js.
        </p>

        <Image
          src="/images/seo-image.png"
          width={1200}
          height={630}
          alt="Imagen SEO optimizada para Open Graph"
          priority
          style={styles.image}
        />

        <section style={styles.section}>
          <h2>Optimización SEO con Next.js</h2>

          <p>
            Esta página utiliza meta tags dinámicos, etiquetas Open Graph,
            optimización de imágenes con next/image y un sitemap dinámico para
            mejorar la visibilidad del sitio en buscadores.
          </p>
        </section>
      </main>
    </>
  );
}

const styles = {
  main: {
    padding: "30px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
  },
  section: {
    marginTop: "25px",
  },
};