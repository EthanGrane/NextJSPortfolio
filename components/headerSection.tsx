import Link from "next/link";

const HeaderSection = () => (
    <header className="fixed top-0 left-0 w-full bg-[#171717]/60 backdrop-blur-sm z-50 border-b border-white/[0.06]">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
            <a className="text-sm font-medium tracking-wide text-white">
                Ethan Grane Website
            </a>

            <ul className="flex items-center gap-8 text-sm text-white/70">
                <li>
                    <Link
                        href="/"
                        className="transition-colors hover:text-white">
                        Web
                    </Link>
                </li>
                <li className="flex items-center gap-1.5 text-white/30 cursor-default select-none">
                    Game Dev
                    <span className="text-[10px] uppercase tracking-wider border border-white/20 rounded-full px-1.5 py-0.5">
                        Soon
                    </span>
                </li>
                <li className="flex items-center gap-1.5 text-white/30 cursor-default select-none">
                    Blog
                    <span className="text-[10px] uppercase tracking-wider border border-white/20 rounded-full px-1.5 py-0.5">
                        Soon
                    </span>
                </li>
            </ul>
        </nav>
    </header>
);

export { HeaderSection };