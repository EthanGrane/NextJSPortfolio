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
        <div className="inline-flex items-center rounded-full border border-white/15 p-0.5 text-sm">
            <button
                type="button"
                aria-current={locale === "en"}
                onClick={() => switchTo("en")}
                className={`rounded-full px-2.5 py-1 text-xs transition-colors ${locale === "en"
                    ? "bg-white text-[#171717]"
                    : "text-white/50 hover:text-white"
                    }`}
            >
                EN
            </button>
            <button
                type="button"
                aria-current={locale === "es"}
                onClick={() => switchTo("es")}
                className={`rounded-full px-2.5 py-1 text-xs transition-colors ${locale === "es"
                    ? "bg-white text-[#171717]"
                    : "text-white/50 hover:text-white"
                    }`}
            >
                ES
            </button>
        </div>
    );
}