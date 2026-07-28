const FooterSection = () => (
    <footer className="w-full bg-[#171717] p-6 overflow-x-hidden">

        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col items-start w-full md:w-3/4 mb-12">
                <p className="text-xl font-bold">
                    Ethan Grane Portfolio
                </p>
            </div>

            <div className="flex flex-col items-start w-full md:w-1/4 md:ml-auto mb-12">
                <p className="text-xl font-bold">Contact</p>
                <div className="pl-0 md:pl-12 space-y-2">
                    <a
                        href="mailto:EthanGraneGarcia.Job@gmail.com"
                        className="block text-lg hover:underline break-words"
                    >
                        EthanGraneGarcia.Job@gmail.com
                    </a>

                    <a
                        href="https://github.com/EthanGrane"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-lg hover:underline"
                    >
                        github.com/EthanGrane
                    </a>
                </div>
            </div>
        </div>

        <hr className="my-4" />

        <p className="text-center m-2">
            Made with Next.js & Once UI
        </p>
    </footer>
);

export { FooterSection };