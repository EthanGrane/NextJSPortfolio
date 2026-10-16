import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaEnvelope, FaFlag, FaGithub, FaMoon, FaPlay, FaSteam, FaSun } from "react-icons/fa";
import { FiSunrise } from "react-icons/fi";

import { ASSET_BASE, DAY_PHASES, ROADMAP, STEAM_URL, TAGLINE, TRAILER_URL } from "@/components/gattos/config";
import { ScreenshotGallery } from "@/components/gattos/screenshotGallery";

import styles from "./gattos.module.css";

// Section look per time of day. `textFirst` puts the text on the left on desktop.
const PHASE_STYLE = {
    morning: { bg: styles.bgMorningSoft, label: styles.labelMorning, color: "#5A2A22", icon: <FiSunrise />, framed: false, textFirst: false },
    day: { bg: styles.bgDay, label: styles.labelDay, color: "#FFFFFF", icon: <FaSun />, framed: false, textFirst: true },
    night: { bg: styles.bgNight, label: styles.labelNight, color: "#FFFFFF", icon: <FaMoon />, framed: true, textFirst: false },
} as const;

const LOGO = { src: `${ASSET_BASE}/logo.webp`, width: 1400, height: 407 };

export default function GattosPizzeriaPage() {
    return (
        <div className={styles.page} id="top">
            {/* ============================ NAV ============================ */}
            <header className={styles.nav}>
                <nav className={`${styles.wrap} ${styles.navInner}`} aria-label="Main">
                    <a href="#top" aria-label="Gatto's Pizzeria home">
                        <Image src={LOGO.src} alt="Gatto's Pizzeria" width={LOGO.width} height={LOGO.height} className={styles.navLogo} preload />
                    </a>
                    <ul className={styles.navLinks}>
                        <li><a href="#gameplay">Gameplay</a></li>
                        <li><a href="#screenshots">Screenshots</a></li>
                        <li><a href="#roadmap">Roadmap</a></li>
                    </ul>
                    <div className={styles.navSpacer} />
                    <a href={STEAM_URL} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSmall} ${styles.btnWhite}`}>
                        <FaSteam /> Wishlist
                    </a>
                </nav>
            </header>

            <main>
                {/* ============================ HERO (morning) ============================ */}
                <section className={`${styles.hero} ${styles.bgMorning}`} aria-labelledby="hero-title">
                    <h1 id="hero-title">
                        <Image
                            src={LOGO.src}
                            alt="Gatto's Pizzeria"
                            width={LOGO.width}
                            height={LOGO.height}
                            sizes="(min-width: 860px) 780px, 92vw"
                            className={styles.heroLogo}
                            preload
                        />
                    </h1>
                    <p className={styles.tagline}>{TAGLINE}</p>
                    <div className={styles.ctas}>
                        <a href={STEAM_URL} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnWhite}`}>
                            <FaSteam /> Wishlist on Steam
                        </a>
                        {TRAILER_URL ? (
                            <a href={TRAILER_URL} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnGhost}`}>
                                <FaPlay /> Trailer
                            </a>
                        ) : (
                            <a href="#screenshots" className={`${styles.btn} ${styles.btnGhost}`}>
                                <FaPlay /> Screenshots
                            </a>
                        )}
                    </div>
                    <div style={{ height: "3rem" }} />
                </section>

                {/* ============================ MORNING / DAY / NIGHT ============================ */}
                <div id="gameplay">
                    {DAY_PHASES.map((phase) => {
                        const look = PHASE_STYLE[phase.id];
                        return (
                            <section key={phase.id} className={`${styles.phase} ${look.bg}`} style={{ color: look.color }} aria-labelledby={`phase-${phase.id}`}>
                                <div className={`${styles.wrap} ${styles.split} ${look.textFirst ? styles.splitReverse : ""}`}>
                                    <Image
                                        src={phase.image}
                                        alt={phase.alt}
                                        width={1280}
                                        height={720}
                                        sizes="(min-width: 860px) 560px, 92vw"
                                        className={`${styles.shot} ${look.framed ? styles.shotFramed : ""}`}
                                    />
                                    <div className={styles.splitText}>
                                        <span className={`${styles.label} ${look.label}`}>
                                            {look.icon} {phase.label}
                                        </span>
                                        <h2 id={`phase-${phase.id}`} className={styles.phaseTitle}>{phase.title}</h2>
                                        <p className={styles.phaseText}>{phase.text}</p>
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>

                {/* ============================ SCREENSHOTS ============================ */}
                <section id="screenshots" className={`${styles.gallery} ${styles.bgNeutral}`} aria-labelledby="screenshots-title">
                    <div className={styles.wrap}>
                        <h2 id="screenshots-title" className={styles.sectionTitle}>Screenshots</h2>
                        <p className={styles.sectionSub}>Fresh out of the oven</p>
                        <ScreenshotGallery />
                    </div>
                </section>

                {/* ============================ ROADMAP ============================ */}
                <section id="roadmap" className={`${styles.roadmap} ${styles.bgMorningSoft}`} aria-labelledby="roadmap-title">
                    <div className={styles.wrap}>
                        <h2 id="roadmap-title" className={styles.sectionTitle}>Roadmap</h2>
                        <p className={styles.sectionSub}>What&apos;s cooking next</p>
                        <ol className={styles.road}>
                            {ROADMAP.map((m) => (
                                <li key={m.title} className={styles.milestone}>
                                    <span className={`${styles.pin} ${m.done ? styles.pinDone : ""}`} aria-hidden="true">
                                        {m.done ? <FaCheck /> : <FaFlag />}
                                    </span>
                                    <div className={styles.milestoneCard}>
                                        <span className={styles.milestoneDate}>{m.date}</span>
                                        <h3 className={styles.milestoneTitle}>{m.title}</h3>
                                        <p className={styles.milestoneText}>{m.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* ============================ CTA (a new morning) ============================ */}
                <section className={`${styles.cta} ${styles.bgMorning}`} aria-labelledby="cta-title">
                    <div className={styles.wrap}>
                        <h2 id="cta-title" className={styles.ctaTitle}>Let&apos;s bake!</h2>
                        <p className={styles.ctaText}>Gatto&apos;s Pizzeria launches on Steam in February 2027. Add it to your wishlist so you don&apos;t miss opening day.</p>
                        <a href={STEAM_URL} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnLarge} ${styles.btnWhite}`}>
                            <FaSteam /> Wishlist on Steam
                        </a>
                    </div>
                </section>
            </main>

            {/* ============================ FOOTER ============================ */}
            <footer className={styles.footer}>
                <div className={`${styles.wrap} ${styles.footerInner}`}>
                    <Image src={LOGO.src} alt="Gatto's Pizzeria" width={LOGO.width} height={LOGO.height} className={styles.footerLogo} />
                    <div className={styles.footerLinks}>
                        <a href={STEAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Steam"><FaSteam /></a>
                        <a href="https://github.com/EthanGrane" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="mailto:EthanGraneGarcia.Job@gmail.com" aria-label="Email"><FaEnvelope /></a>
                    </div>
                    <div className={styles.navSpacer} />
                    <p className={styles.footerCredit}>
                        A game by <Link href="/gamedev">Ethan Grané</Link> · © 2026
                    </p>
                </div>
            </footer>
        </div>
    );
}
