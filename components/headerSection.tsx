"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "./languageSwitcher";

const HeaderSection = () => {
    const pathname = usePathname();
    const t = useTranslations("Header");

    return (
        <header className="fixed top-0 left-0 w-full bg-[#171717]/60 backdrop-blur-sm z-50 border-b border-white/[0.06]">
            <nav className="max-w-5xl mx-auto flex flex-col md:flex-row gap-2 items-center justify-between px-6 py-4">

                <p className="text-base font-semibold tracking-tight text-white select-none">
                    {t("siteName")}
                </p>

                <ul className="flex items-center gap-8 text-[13px] font-medium uppercase tracking-wider text-white/50">
                    <li>
                        <Link
                            href="/"
                            className={`transition-colors hover:text-white underline-offset-4 ${pathname === "/"
                                ? "!text-white !underline !decoration-2"
                                : "no-underline"
                                }`}>
                            {t("web")}
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/gamedev"
                            className={`transition-colors hover:text-white underline-offset-4 ${pathname === "/gamedev"
                                ? "!text-white !underline !decoration-2"
                                : "no-underline"
                                }`}>
                            {t("gameDev")}
                        </Link>
                    </li>


                    <li className="flex items-center gap-1.5 text-white/25 cursor-default select-none">
                        {t("blog")}
                        <span className="text-[9px] normal-case tracking-normal border border-white/15 rounded-full px-1.5 py-0.5">
                            {t("soon")}
                        </span>
                    </li>
                </ul>
                <LanguageSwitcher/>
            </nav>
        </header>
    );
};

export { HeaderSection };