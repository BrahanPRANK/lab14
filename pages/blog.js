import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Consejos de SEO</title>

        <meta
          name="description"
          content="Artículos sobre optimización SEO, rendimiento web y buenas prácticas usando Next.js."
        />

        <meta
          name="keywords"
          content="blog SEO, Next.js, optimización web, rendimiento"
        />

        <meta property="og:title" content="Blog - Consejos de SEO" />

        <meta
          property="og:description"
          content="Aprende consejos prácticos para mejorar el SEO y el rendimiento de una aplicación web."
        />

        <meta
          property="og:image"
          content="https://lab14-j6vg.onrender.com/images/seo-image.png"
        />

        <meta property="og:type" content="article" />
      </Head>

      <main style={{ padding: "30px" }}>
        <h1>Blog de Optimización SEO</h1>

        <p>
          En esta sección se presentan consejos para mejorar el posicionamiento
          de una página web usando meta tags, sitemap dinámico e imágenes
          optimizadas.
        </p>

        <article>
          <h2>¿Por qué son importantes los meta tags?</h2>
          <p>
            Los meta tags ayudan a los buscadores a entender el contenido de una
            página y también mejoran la vista previa cuando el enlace se comparte
            en redes sociales.
          </p>
        </article>

        <article>
          <h2>Importancia del sitemap</h2>
          <p>
            El sitemap permite que Google encuentre las rutas principales del
            sitio de manera más ordenada y eficiente.
          </p>
        </article>
      </main>
    </>
  );
}