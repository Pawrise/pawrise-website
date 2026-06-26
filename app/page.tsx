import Link from "next/link";
import Logo from "@/components/Logo";
import ShinyText from "@/components/ShinyText";
import StarBorder from "@/components/StarBorder";
import BlurText from "@/components/fx/BlurText";
import SectionCards from "@/components/SectionCards";

export default function Home() {
  return (
    <main>
      <section className="hero wrap hero-wrap">
        <div className="hero-kicker">
          <span className="hero-id"><Logo size={22} /> T-ESP-800</span>
          <span className="hero-date">Epitech · EIP · <b>soutenance</b></span>
        </div>
        <h1 className="wordmark">
          <BlurText text="PAWRISE" per="char" stagger={0.06} />
          <span className="care"><BlurText text="CARE" per="char" stagger={0.06} startDelay={0.45} /></span>
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

      <SectionCards />

      <footer className="footer">
        Pawrise Care · support de soutenance · {new Date().getFullYear()}
      </footer>
    </main>
  );
}
