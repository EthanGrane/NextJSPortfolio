import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaSteam, FaTwitch } from "react-icons/fa";

import { ASSET_BASE, STEAM_URL } from "@/components/gattos/config";
import { COMMANDS } from "@/components/gattos/emotes";
import { EmoteWriter } from "@/components/gattos/emoteWriter";

import gattos from "../gattos.module.css";
import styles from "./twitch.module.css";

const TITLE = "Twitch Emotes — Gatto's Pizzeria";
const DESCRIPTION =
    "Write your Twitch chat message for Gatto's Pizzeria with one-click emotes (:lost: :love: :wow: :cry: :happy: :tongue:, or O_o <3 :O :( :) :p), see what your customer will do and copy it into chat.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/GattosPizzeria/twitch" },
    openGraph: { title: TITLE, description: DESCRIPTION, url: "/GattosPizzeria/twitch" },
    twitter: { title: TITLE, description: DESCRIPTION },
};

const LOGO = { src: `${ASSET_BASE}/logo.webp`, width: 1400, height: 407 };

export default function GattosTwitchPage() {
    return (
        <div className={gattos.page} id="top">
            <header className={gattos.nav}>
                <nav className={`${gattos.wrap} ${gattos.navInner}`} aria-label="Main">
                    <Link href="/GattosPizzeria" aria-label="Back to Gatto's Pizzeria">
                        <Image src={LOGO.src} alt="Gatto's Pizzeria" width={LOGO.width} height={LOGO.height} className={gattos.navLogo} preload />
                    </Link>
                    <div className={gattos.navSpacer} />
                    <a href={STEAM_URL} target="_blank" rel="noopener noreferrer" className={`${gattos.btn} ${gattos.btnSmall} ${gattos.btnWhite}`}>
                        <FaSteam /> Wishlist
                    </a>
                </nav>
            </header>

            <main>
                <section className={`${styles.hero} ${gattos.bgMorning}`} aria-labelledby="twitch-title">
                    <div className={gattos.wrap}>
                        <Link href="/GattosPizzeria" className={styles.back}>
                            <FaArrowLeft aria-hidden="true" /> Back to the game
                        </Link>
                        <h1 id="twitch-title" className={styles.title}>
                            <FaTwitch aria-hidden="true" /> Twitch Emotes
                        </h1>
                        <p className={styles.lede}>
                            Watching a stream of Gatto&apos;s Pizzeria? Your chat messages come to life over your customer&apos;s head. Write one here, add emotes, then copy it into chat.
                        </p>
                    </div>
                </section>

                <section className={`${styles.body} ${gattos.bgMorningSoft}`} aria-label="Emote writer">
                    <div className={`${gattos.wrap} ${styles.layout}`}>
                        <div className={styles.card}>
                            <EmoteWriter />
                        </div>

                        <aside className={styles.side} aria-labelledby="commands-title">
                            <h2 id="commands-title" className={styles.sideTitle}>Chat commands</h2>
                            <dl className={styles.commands}>
                                {COMMANDS.map((c) => (
                                    <div key={c.command} className={styles.command}>
                                        <dt><code>{c.command}</code></dt>
                                        <dd>{c.text}</dd>
                                    </div>
                                ))}
                            </dl>
                            <p className={styles.sideNote}>
                                Only works while the streamer has Twitch chat turned on in the game. Messages are cut at 150 characters, and anything else appears exactly as you type it.
                            </p>
                        </aside>
                    </div>
                </section>
            </main>

            <footer className={gattos.footer}>
                <div className={`${gattos.wrap} ${gattos.footerInner}`}>
                    <Image src={LOGO.src} alt="Gatto's Pizzeria" width={LOGO.width} height={LOGO.height} className={gattos.footerLogo} />
                    <div className={gattos.navSpacer} />
                    <p className={gattos.footerCredit}>
                        A game by <Link href="/gamedev">Ethan Grané</Link> · © 2026
                    </p>
                </div>
            </footer>
        </div>
    );
}
