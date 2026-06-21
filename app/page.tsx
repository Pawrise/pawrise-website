import Link from "next/link";
import { SECTIONS } from "@/lib/sections";

export default function Home() {
  return (
    <main>
      <section className="hero wrap">
        <span className="chip">Epitech · EIP · T-ESP-800</span>
        <h1>
          Le collier qui <span className="grad">oriente</span> vers le bon soin,
          au bon moment.
        </h1>
        <p className="lead">
          Pawrise Care relie capteurs de santé, IA d&apos;orientation
          non-diagnostique et réseau vétérinaire, pour agir avant que ça
          n&apos;empire.
        </p>
        <div className="cta">
          <Link href="/architecture" className="btn primary">
            Voir l&apos;architecture →
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
