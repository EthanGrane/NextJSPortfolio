import { Carousel, Tag, Timeline, Button } from "@once-ui-system/core";
import { FaGithub } from "react-icons/fa";

export interface TimelineItem {
    label: string;
    description: string;
    state: "completed" | "active" | "upcoming" | "success";
}

export interface ProjectItemProps {
    title: string;
    description: string;
    images: { slide: string }[];
    tags: string[];
    timeline: TimelineItem[];
    repoLink?: string;
}

const ProjectItem = ({
    title,
    description,
    images,
    tags,
    timeline,
    repoLink
}: ProjectItemProps) => {
    return (
        <section
            className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8
            py-10 sm:py-12 md:py-16
            flex flex-col md:flex-row
            gap-8 sm:gap-10 md:gap-16
            border-b border-gray-800 last:border-none
            "
        >
            {/* Carrusel: primero en mobile, segundo en desktop */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
                <Carousel
                    items={images}
                />
            </div>

            {/* Contenido: segundo en mobile, primero en desktop */}
            <div className="w-full h-auto md:w-1/2 order-2 md:order-1 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-12 sm:mb-24 md:mb-16">
                    {title}
                </h2>
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

                    {repoLink &&
                        <Button
                            size="l"
                            variant="subtle"
                            className="ml-auto mt-auto"
                            href={repoLink}
                        >
                            <FaGithub className="mr-4" />
                            Github Repo
                        </Button>
                    }
                </div>
            </div>
        </section>
    );
}

export { ProjectItem };