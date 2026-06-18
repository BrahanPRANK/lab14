import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>SEO Next.js</h2>

      <ul style={styles.menu}>
        <li>
          <Link href="/" style={styles.link}>
            Inicio
          </Link>
        </li>

        <li>
          <Link href="/blog" style={styles.link}>
            Blog
          </Link>
        </li>

        <li>
          <Link href="/contacto" style={styles.link}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    width: "100%",
    padding: "15px 30px",
    backgroundColor: "#0f172a",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
  },
  logo: {
    margin: 0,
    fontSize: "22px",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};