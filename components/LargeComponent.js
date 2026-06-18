export default function LargeComponent() {
  return (
    <section>
      <h2>Componente cargado con React.lazy</h2>
      <p>
        Este componente se carga de forma diferida, es decir, solo cuando la
        página lo necesita. Esto ayuda a reducir la carga inicial del sitio web.
      </p>
    </section>
  );
}