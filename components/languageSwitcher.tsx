"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchTo = (newLocale: "es" | "en") => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex items-center gap-3 text-[13px] font-medium uppercase tracking-wider text-white/50">
            <button
                onClick={() => switchTo("en")}
                disabled={locale === "en"}
                className={`transition-colors hover:text-white underline-offset-4 ${locale === "en"
                    ? "!text-white !underline !decoration-2"
                    : "no-underline"
                    }`}
            >
                EN
            </button>

            <span className="text-white/20 select-none">/</span>

            <button
                onClick={() => switchTo("es")}
                disabled={locale === "es"}
                className={`transition-colors hover:text-white underline-offset-4 ${locale === "es"
                    ? "!text-white !underline !decoration-2"
                    : "no-underline"
                    }`}
            >
                ES
            </button>



        </div>
    );
}