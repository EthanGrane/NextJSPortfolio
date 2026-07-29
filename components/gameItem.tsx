import { Carousel, Button, ShineFx } from "@once-ui-system/core";
import { FaGithub, FaSteam } from "react-icons/fa";

export interface GameItemProps {
    title: string;
    description: string;
    youtubeLink?: string;
    images?: { slide: string; alt?: string }[];
    repoLink?: string;
    deployLink?: string;
}

// Extrae el ID de video de distintos formatos de URL de YouTube
// (watch?v=, youtu.be/, embed/, shorts/)
function getYoutubeId(url: string): string | null {
    const match = url.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
}

const GameItem = ({
    title,
    description,
    youtubeLink,
    images,
    repoLink,
    deployLink
}: GameItemProps) => {
    const imagesWithAlt: { slide: string; alt: string }[] = images
        ? images.map((image, index) => ({
            ...image,
            alt: image.alt ?? `${title} screenshot ${index + 1}`,
        }))
        : [];

    const youtubeId = youtubeLink ? getYoutubeId(youtubeLink) : null;

    return (
        <section
            className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8
            py-10 sm:py-12 md:py-16
            flex flex-col md:flex-row
            gap-8 sm:gap-10 md:gap-16
            border-b border-gray-800 last:border-none
            "
            aria-label={title}
        >
            {/* Media: video si hay youtubeLink válido, si no carrousel de imágenes */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
                {youtubeId ? (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${youtubeId}`}
                            title={`${title} trailer`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                ) : (
                    <a href={deployLink}>
                        <Carousel
                            play={{ auto: true, interval: 5000, controls: false }}
                            items={imagesWithAlt}
                        />
                    </a>
                )}
            </div>

            {/* Contenido: segundo en mobile, primero en desktop */}
            <div className="w-full h-auto md:w-1/2 order-2 md:order-1 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-12 sm:mb-24 md:mb-16">
                    {title}
                </h3>
                <p className=" mb-12 sm:mb-24 md:mb-16 text-sm sm:text-base leading-relaxed text-gray-300">
                    {description}
                </p>

                <div className="flex flex-row">
                    <div className="flex flex-col gap-0 w-full md:h-full">
                        <div className="mt-4 md:mt-auto md:h-full">
                            {deployLink &&
                                <Button
                                    size="l"
                                    variant="primary"
                                    className="ml-auto mt-8"
                                    href={deployLink}
                                >
                                    <span className="mr-4 inline-flex">
                                        <FaSteam />
                                    </span>
                                    <ShineFx inverse>
                                        Play the game
                                    </ShineFx>
                                </Button>
                            }

                            {repoLink &&
                                <Button
                                    size="l"
                                    variant="subtle"
                                    className="ml-auto mt-8"
                                    href={repoLink}
                                >
                                    <span className="mr-4 inline-flex">
                                        <FaGithub />
                                    </span>
                                    Github Repo
                                </Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { GameItem };