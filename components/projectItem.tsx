import { Carousel, Tag, Timeline, Button, ShineFx } from "@once-ui-system/core";
import { FaGithub, FaCloudUploadAlt } from "react-icons/fa";

export interface TimelineItem {
    label: string;
    description: string;
    state: "default" | "active" | "danger" | "success";
}

export interface ProjectItemProps {
    title: string;
    description: string;
    images: { slide: string; alt?: string }[];
    tags: string[];
    timeline: TimelineItem[];
    repoLink?: string;
    deployLink?: string;
}

const ProjectItem = ({
    title,
    description,
    images,
    tags,
    timeline,
    repoLink,
    deployLink
}: ProjectItemProps) => {
    // Fallback alt text per slide if one isn't provided, so images are
    // never left without a descriptive alt (bad for SEO + accessibility).
    const imagesWithAlt = images.map((image, index) => ({
        ...image,
        alt: image.alt ?? `${title} screenshot ${index + 1}`,
    }));

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
            {/* Carrusel: primero en mobile, segundo en desktop */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
                <Carousel
                    play={{ auto: true, interval: 5000, controls: false }}
                    items={imagesWithAlt}
                />
            </div>

            {/* Contenido: segundo en mobile, primero en desktop */}
            <div className="w-full h-auto md:w-1/2 order-2 md:order-1 flex flex-col justify-center">
                {/* SEO: h3, not h2 — each project title nests under the page's
                    "My Projects" h2, keeping one clean heading hierarchy. */}
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-12 sm:mb-24 md:mb-16">
                    {title}
                </h3>
                <p className=" mb-12 sm:mb-24 md:mb-16 text-sm sm:text-base leading-relaxed text-gray-300">
                    {description}
                </p>

                <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3  mb-32 sm:mb-64 md:mb-64">
                    {tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </div>

                <div className="flex flex-row">
                    <Timeline className="hidden sm:block w-1/2"
                        items={timeline}
                    />

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
                                        <FaCloudUploadAlt />
                                    </span>

                                    <ShineFx inverse>
                                        Deployment
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

export { ProjectItem };