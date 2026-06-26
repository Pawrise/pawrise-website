import Link from "next/link";
import { SECTIONS } from "@/lib/sections";
import Logo from "@/components/Logo";
import HeroCoil from "@/components/HeroCoil";

export default function Home() {
  return (
    <main>
      <section className="hero wrap hero-wrap">
        <div className="hero-coil-wrap"><HeroCoil /></div>
        <div className="hero-kicker">
          <span className="hero-id"><Logo size={22} /> T-ESP-800</span>
          <span className="hero-date">Epitech · EIP · <b>soutenance</b></span>
        </div>
        <h1 className="wordmark">
          PAWRISE
          <span className="care">CARE</span>
        </h1>
        <p className="hero-tag">Le collier qui comprend la santé de votre animal.</p>
        <div className="cta">
          <Link href="/assistant-ia" className="btn primary">
            L&apos;assistant IA →
          </Link>
          <Link href="/architecture" className="btn">
            L&apos;architecture
          </Link>
          <Link href="/vision" className="btn">
            La vision
          </Link>
        </div>
      </section>

      <section className="wrap grid">
        {SECTIONS.map((s) => (
          <Link
            key={s.slug}
            href={`/${s.slug}`}
            className="card glass"
            style={{ ["--a" as string]: s.accent }}
          >
            <span className="card-acc" />
            <span className="ctag">{s.tag}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <span className="more">Explorer →</span>
          </Link>
        ))}
      </section>

      <footer className="footer">
        Pawrise Care · support de soutenance · {new Date().getFullYear()}
      </footer>
    </main>
  );
}
