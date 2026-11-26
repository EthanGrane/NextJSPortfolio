"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaCopy, FaDiceFive } from "react-icons/fa";

import styles from "@/app/[locale]/GattosPizzeria/twitch/twitch.module.css";
import { CHAT_LIMIT, EMOTES, EXAMPLES, MODES, fromEmoticons, type ModePrefix } from "./emotes";

type Emote = (typeof EMOTES)[number];

const CODE_RE = /:(lost|love|wow|cry|happy|tongue):/gi;

const findEmote = (code: string) => EMOTES.find((e) => e.code === code.toLowerCase());

/** The game turns emoticons into emotes, removes < and > from chat and joins spaces, so the preview does too. */
const clean = (text: string) => fromEmoticons(text).replace(/[<>]/g, "").replace(/\s+/g, " ").trim();

/** Text and emotes in order, for the preview bubble. */
function split(text: string): (string | Emote)[] {
    const parts: (string | Emote)[] = [];
    let last = 0;
    for (const match of text.matchAll(CODE_RE)) {
        const at = match.index ?? 0;
        if (at > last) parts.push(text.slice(last, at));
        const emote = findEmote(match[1]);
        if (emote) parts.push(emote);
        last = at + match[0].length;
    }
    if (last < text.length) parts.push(text.slice(last));
    return parts;
}

/** Message composer for the Twitch chat: emote buttons, live preview, random examples and copy. */
export function EmoteWriter() {
    const [prefix, setPrefix] = useState<ModePrefix>("");
    const [message, setMessage] = useState("Where is my wallet?! :lost: oh, here it is :love:");
    const [example, setExample] = useState<string | null>(null);
    const [copied, setCopied] = useState<string | null>(null);
    const lastExample = useRef(-1);
    const box = useRef<HTMLTextAreaElement>(null);
    const line = useRef<HTMLDivElement>(null);

    // Fixed width: the message box grows downwards with the text.
    useLayoutEffect(() => {
        const area = box.current;
        if (!area) return;
        const fit = () => {
            area.style.height = "auto";
            area.style.height = `${area.scrollHeight + 4}px`; // + borders (border-box)
        };
        fit();
        window.addEventListener("resize", fit);
        return () => window.removeEventListener("resize", fit);
    }, [message]);

    const text = clean(message);
    // What to paste: the message as typed (emoticons kept: the game understands them), spaces joined.
    const full = (prefix + message.replace(/\s+/g, " ").trim()).trim();
    const counted = (prefix + text).trim().length; // the game counts after turning emoticons into codes
    const parts = split(text);
    const emotes = parts.filter((p): p is Emote => typeof p !== "string");
    const words = text.replace(CODE_RE, "").trim();
    const mode = MODES.find((m) => m.prefix === prefix) ?? MODES[0];

    function insert(code: string) {
        const area = box.current;
        const start = area?.selectionStart ?? message.length;
        const end = area?.selectionEnd ?? start;
        const before = message.slice(0, start);
        const after = message.slice(end);
        const pad1 = before && !/\s$/.test(before) ? " " : "";
        const pad2 = after && !/^\s/.test(after) ? " " : "";
        const next = before + pad1 + code + pad2 + after;
        const caret = (before + pad1 + code + pad2).length;
        setMessage(next);
        setExample(null);
        requestAnimationFrame(() => {
            area?.focus();
            area?.setSelectionRange(caret, caret);
        });
    }

    function randomExample() {
        let i = 0;
        do i = Math.floor(Math.random() * EXAMPLES.length);
        while (EXAMPLES.length > 1 && i === lastExample.current);
        lastExample.current = i;
        const ex = EXAMPLES[i];
        setPrefix(ex.prefix);
        setMessage(ex.text);
        setExample(ex.why);
    }

    async function copy() {
        try {
            await navigator.clipboard.writeText(full);
            setCopied("Copied. Paste it into Twitch chat.");
        } catch {
            if (line.current) {
                const range = document.createRange();
                range.selectNodeContents(line.current);
                const selection = window.getSelection();
                selection?.removeAllRanges();
                selection?.addRange(range);
            }
            setCopied("Selected: press Ctrl+C (or ⌘C) to copy.");
        }
        window.setTimeout(() => setCopied(null), 2500);
    }

    let bubble: React.ReactNode;
    if (!words && emotes.length === 0) bubble = <span className={styles.bubbleEmpty}>Type something&hellip;</span>;
    else if (!words)
        bubble = (
            <span className={styles.bubbleEmpty}>
                {prefix ? "Only emotes: your customer plays them, then says a normal line." : "Only emotes: no bubble, your customer just plays them."}
            </span>
        );
    else
        bubble = parts.map((p, i) =>
            typeof p === "string" ? (
                <span key={i}>{p}</span>
            ) : (
                <Image key={i} src={p.image} alt={`:${p.code}:`} width={48} height={33} className={styles.inlineFace} style={{ background: p.color }} />
            )
        );

    return (
        <div className={styles.writer}>
            <section aria-labelledby="mode-label">
                <h2 id="mode-label" className={styles.step}>What are you writing?</h2>
                <div className={styles.modes} role="group" aria-labelledby="mode-label">
                    {MODES.map((m) => (
                        <button
                            key={m.label}
                            type="button"
                            className={styles.mode}
                            aria-pressed={m.prefix === prefix}
                            onClick={() => setPrefix(m.prefix)}
                        >
                            <span className={styles.modeLong}>{m.label}</span>
                            <span className={styles.modeShort}>{m.short}</span> {m.command && <code>{m.command}</code>}
                        </button>
                    ))}
                </div>
                <p className={styles.hint}>{mode.hint}</p>
            </section>

            <section aria-labelledby="emotes-label">
                <h2 id="emotes-label" className={styles.step}>Emotes</h2>
                <div className={styles.emotes}>
                    {EMOTES.map((e) => (
                        <button
                            key={e.code}
                            type="button"
                            className={styles.emote}
                            title={`${e.name}: :${e.code}: or ${e.emoticon}`}
                            aria-label={`Insert ${e.name} (:${e.code}:)`}
                            onClick={() => insert(`:${e.code}:`)}
                        >
                            <span className={styles.face} style={{ background: e.color }}>
                                <Image src={e.image} alt="" width={120} height={82} />
                            </span>
                        </button>
                    ))}
                </div>
            </section>

            <section className={styles.box}>
                <div className={styles.boxHead}>
                    <label htmlFor="emote-message" className={styles.step}>Your message</label>
                    <button type="button" className={styles.random} onClick={randomExample}>
                        <FaDiceFive aria-hidden="true" /> Random example
                    </button>
                </div>
                <textarea
                    id="emote-message"
                    ref={box}
                    className={styles.textarea}
                    value={message}
                    maxLength={400}
                    onChange={(e) => {
                        setMessage(e.target.value);
                        setExample(null);
                    }}
                />
                <div className={styles.meta}>
                    <span className={styles.metaHint}>Emotes play when the text reaches them, with a short pause around them.</span>
                    <span className={counted > CHAT_LIMIT ? styles.over : undefined}>
                        {counted} / {CHAT_LIMIT}
                    </span>
                </div>
                {example && (
                    <p className={styles.example}>
                        <b>What happens:</b> {example}
                    </p>
                )}
            </section>

            <section aria-labelledby="preview-label">
                <h2 id="preview-label" className={styles.step}>Preview</h2>
                <div className={styles.stage}>
                    <div className={styles.bubble}>{bubble}</div>
                    {emotes.length > 0 && (
                        <ol className={styles.events} aria-label="What your customer does">
                            {emotes.map((e, i) => (
                                <li key={i}>
                                    <code>:{e.code}:</code> {e.does}
                                </li>
                            ))}
                        </ol>
                    )}

                    {/* What to paste in chat, inside the preview. */}
                    <h3 id="out-label" className={styles.outLabel}>Paste this in chat</h3>
                    <div className={styles.out} role="group" aria-labelledby="out-label">
                        <div ref={line} className={styles.line} aria-live="polite">
                            {full || " "}
                        </div>
                        <button type="button" className={styles.copy} onClick={copy} disabled={!full} aria-label="Copy">
                            <FaCopy aria-hidden="true" /> <span className={styles.copyText}>Copy</span>
                        </button>
                    </div>
                    {copied && <p className={styles.copied}>{copied}</p>}
                </div>
            </section>
        </div>
    );
}
