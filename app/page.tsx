import Link from "next/link";
import { SECTIONS } from "@/lib/sections";
import Logo from "@/components/Logo";
import ShinyText from "@/components/ShinyText";
import StarBorder from "@/components/StarBorder";

export default function Home() {
  return (
    <main>
      <section className="hero wrap hero-wrap">
        <div className="hero-kicker">
          <span className="hero-id"><Logo size={22} /> T-ESP-800</span>
          <span className="hero-date">Epitech · EIP · <b>soutenance</b></span>
        </div>
        <h1 className="wordmark">
          PAWRISE
          <span className="care">CARE</span>
        </h1>
        <p className="hero-tag">
          <ShinyText
            text="Le collier qui comprend la santé de votre animal."
            className="shiny-tag"
            color="#e8edff"
            shineColor="#d3fc72"
            speed={4}
          />
        </p>
        <div className="cta">
          <StarBorder href="/assistant-ia" color="#d3fc72">
            L&apos;assistant IA →
          </StarBorder>
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
