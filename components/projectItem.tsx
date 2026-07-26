import { Carousel, Tag, Timeline } from "@once-ui-system/core";

const ProjectItem = () => {
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
                    items={[
                        {
                            slide: "/projects/SocialMediaProject_Image1.webp",
                        },
                        {
                            slide: "/projects/SocialMediaProject_Image2.webp",
                        },
                        {
                            slide: "/projects/SocialMediaProject_Image3.webp",
                        },

                    ]}
                />
            </div>

            {/* Contenido: segundo en mobile, primero en desktop */}
            <div className="w-full h-auto md:w-1/2 order-2 md:order-1 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-12 sm:mb-24 md:mb-16">
                    Social Network with VUE & Laravel
                </h2>
                <p className=" mb-12 sm:mb-24 md:mb-16 text-sm sm:text-base leading-relaxed text-gray-300">
                    A location-based social network where users can create posts tied to any point on the map, combining social interaction with geolocation to provide a unique way of discovering content.
                </p>

                <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3  mb-32 sm:mb-64 md:mb-64">
                    <Tag>HTML</Tag>
                    <Tag>CSS</Tag>
                    <Tag>JavaScript</Tag>
                    <Tag>VUE</Tag>
                    <Tag>PHP</Tag>
                    <Tag>LARAVEL</Tag>
                    <Tag>MAPBOXGL (API)</Tag>
                </div>

                <Timeline className="hidden sm:block"
                 items={[
                    {
                        label: "January 2025",
                        description: "Project kickoff",
                        state: "completed"
                    },
                    {
                        label: "April 2025",
                        description: "Project delivery",
                        state: "active"
                    }
                ]}
                />
            </div>
        </section>
    );
}

export { ProjectItem };