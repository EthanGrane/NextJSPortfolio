"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

import styles from "@/app/[locale]/GattosPizzeria/gattos.module.css";
import { SCREENSHOTS } from "./config";

/** Screenshot grid with a keyboard-friendly lightbox. */
export function ScreenshotGallery() {
    const [open, setOpen] = useState<number | null>(null);

    const close = useCallback(() => setOpen(null), []);
    const step = useCallback(
        (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + SCREENSHOTS.length) % SCREENSHOTS.length)),
        []
    );

    useEffect(() => {
        if (open === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open, close, step]);

    return (
        <>
            <ul className={styles.galleryGrid}>
                {SCREENSHOTS.map((s, i) => (
                    <li key={s.src}>
                        <button type="button" className={styles.thumb} onClick={() => setOpen(i)} aria-label={`Open screenshot: ${s.alt}`}>
                            <Image src={s.src} alt={s.alt} fill sizes="(min-width: 860px) 360px, 50vw" style={{ objectFit: "cover" }} />
                        </button>
                    </li>
                ))}
            </ul>

            {open !== null && (
                <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={SCREENSHOTS[open].alt} onClick={close}>
                    <div className={styles.lightboxImage} onClick={(e) => e.stopPropagation()}>
                        <Image src={SCREENSHOTS[open].src} alt={SCREENSHOTS[open].alt} fill sizes="100vw" style={{ objectFit: "contain" }} />
                    </div>
                    <div className={styles.lightboxControls} onClick={(e) => e.stopPropagation()}>
                        <button type="button" className={styles.roundBtn} onClick={() => step(-1)} aria-label="Previous screenshot">
                            <FaChevronLeft />
                        </button>
                        <button type="button" className={styles.roundBtn} onClick={close} aria-label="Close">
                            <FaTimes />
                        </button>
                        <button type="button" className={styles.roundBtn} onClick={() => step(1)} aria-label="Next screenshot">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
