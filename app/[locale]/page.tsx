"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

import { GradientText_Purple_Orange, GradientText_Grey_White } from "@/components/gradientText";
import { ProjectItem } from "@/components/projectItem";
import { TechCard } from "@/components/techCard";
import { techStack } from "@/components/techStack";

import { Background, RevealFx, LetterFx } from "@once-ui-system/core";


export default function WebPortfolio() {

    {/* Gradient follows mouseX */ }
    const [mouseX, setMouseX] = useState(50);
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Prevent mobile interaction
            if (window.innerWidth > window.innerHeight) {
                const xValue = (e.clientX / window.innerWidth) * 100
                setMouseX(Math.min(Math.max(xValue, 25), 75));
            }
        }

        window.addEventListener("mousemove", handleMouseMove);


    }, []);

    const t = useTranslations("WebPortfolio");

    return (
        <div className="flex flex-col items-center justify-center w-full">
            {/* Hero section */}

            {/* - Background */}
            <div
                className="w-full items-center justify-center"
                style={{ position: "relative" }}
            >
                <RevealFx fill position="absolute">
                    <Background
                        style={{
                            "--custom-gradient-color": "#3d323d",
                        } as React.CSSProperties}
                        gradient={{
                            display: true,
                            opacity: 100,
                            x: mouseX,
                            y: -10,
                            colorStart: "custom-gradient-color",
                            colorEnd: "page-background",
                        }}
                        mask={{
                            x: 50,
                            y: 50,
                            radius: 100,
                        }}
                    />
                </RevealFx>

                {/* Spacer */}
                <div style={{ height: "4rem" }} />

                {/* - Presentation */}
                <div className="flex flex-col items-center justify-center py-10 text-center relative z-10">
                    <p className="text-lg font-bold sm:text-xl">{t("greeting")}</p>

                    <h1 className="flex flex-col items-center gap-2">
                        <LetterFx trigger="instant" speed="medium" className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            Ethan Grané Garcia
                        </LetterFx>

                        <GradientText_Purple_Orange
                            text={t("heroDescription")}
                            className="max-w-2xl text-3xl font-[900] tracking-tight sm:text-5xl md:text-6xl"
                        />
                    </h1>
                </div>
            </div>

            {/* My skills (card with tech icons) */}
            <section className="w-full flex flex-col items-center" aria-labelledby="skills-heading">
                <GradientText_Grey_White
                    text={t("skillsTitle")}
                    className="text-3xl font-bold tracking-tight sm:text-5xl"
                    angle={0}
                    as="h2"
                    id="skills-heading"
                />
                <div className="grid grid-cols-3 grid-rows-4
    md:grid-cols-4 md:grid-rows-3 gap-2 sm:gap-4 w-full max-w-xs sm:max-w-2xl 
    justify-items-center
    mx-auto bg-[#1E1E1E] border border-gray-600 rounded-lg py-3 sm:py-6 lg:py-8 px-3 sm:px-10 md:px-8 lg:px-12">
                    {techStack.map((tech) => (
                        <TechCard
                            key={tech.label}
                            icon={tech.icon}
                            label={tech.label}
                            color={tech.color}
                        />
                    ))}
                </div>
            </section>

            {/* Spacer */}
            <div style={{ height: "6rem" }} />

            {/* Projects */}
            <section className="w-full flex flex-col items-center" aria-labelledby="projects-heading">
                <GradientText_Grey_White
                    className="text-4xl font-bold tracking-tight sm:text-5xl"
                    text={t("projectsTitle")}
                    angle={0}
                    as="h2"
                    id="projects-heading"
                />

                <ProjectItem
                    title={t("projects.socialNetwork.title")}
                    description={t("projects.socialNetwork.description")}
                    images={[
                        { slide: "/projects/SocialMediaProject_Image1.webp", alt: "Social network feed showing posts pinned to a map" },
                        { slide: "/projects/SocialMediaProject_Image2.webp", alt: "Social network post creation screen with location picker" },
                        { slide: "/projects/SocialMediaProject_Image3.webp", alt: "Social network map view with geolocated posts" },
                    ]}
                    tags={["HTML", "CSS", "JavaScript", "VUE", "PHP", "LARAVEL", "MAPBOXGL"]}
                    timeline={[
                        {
                            label: "January 2025",
                            description: t("projects.socialNetwork.timeline.kickoff"),
                            state: "active"
                        },
                        {
                            label: "April 2025",
                            description: t("projects.socialNetwork.timeline.delivery"),
                            state: "success"
                        }
                    ]}
                    repoLink="https://github.com/EthanGrane/Proyecto-2-Whatevernever"
                />


                <ProjectItem
                    title={t("projects.steamMarketAnalyzer.title")}
                    description={t("projects.steamMarketAnalyzer.description")}
                    images={[
                        { slide: "/projects/SteamMarketAnalyzer_Image1.webp", alt: "Steam Market Analyzer dashboard showing market trends" },
                        { slide: "/projects/SteamMarketAnalyzer_Image2.webp", alt: "Steam Market Analyzer game comparison screen" },
                        { slide: "/projects/SteamMarketAnalyzer_Image3.webp", alt: "Steam Market Analyzer sales estimate view" },
                    ]}
                    tags={["HTML", "CSS", "JavaScript", "React", "React Native", "Steam API"]}
                    timeline={[
                        {
                            label: "April 2026",
                            description: t("projects.steamMarketAnalyzer.timeline.kickoff"),
                            state: "active"
                        },
                        {
                            label: "May 2026",
                            description: t("projects.steamMarketAnalyzer.timeline.mvp"),
                            state: "success"
                        },
                        {
                            label: "Undefined",
                            description: t("projects.steamMarketAnalyzer.timeline.delivery"),
                            state: "default"
                        }
                    ]}
                    repoLink="https://github.com/EthanGrane/Steam-Market-Analyzer"
                    deployLink="https://github.com/EthanGrane/Steam-Market-Analyzer/releases"
                />

                <ProjectItem
                    title={t("projects.digitalLogicSimulator.title")}
                    description={t("projects.digitalLogicSimulator.description")}
                    images={[
                        { slide: "/projects/DigitalLogicSimulator_Gif.gif", alt: "Digital Logic Simulator demo showing gates connected together" },
                        { slide: "/projects/DigitalLogicSimulator_Image1.webp", alt: "Digital Logic Simulator interface with custom logic gates" },
                        { slide: "/projects/DigitalLogicSimulator_Image2.webp", alt: "Digital Logic Simulator binary calculator built from gates" },
                    ]}
                    tags={["C#", "WinForms"]}
                    timeline={[
                        {
                            label: "October 2024",
                            description: t("projects.digitalLogicSimulator.timeline.kickoff"),
                            state: "active"
                        },
                        {
                            label: "April 2024",
                            description: t("projects.digitalLogicSimulator.timeline.mvp"),
                            state: "success"
                        }
                    ]}
                    repoLink="https://github.com/EthanGrane/Digital-Logic-Simulator"
                    deployLink="https://github.com/EthanGrane/Digital-Logic-Simulator/releases"
                />
            </section>

            <div style={{ height: "6rem" }} />

            {/* About me */}
            <div className="flex flex-col w-full md:flex-row items-center justify-center gap-8 md:gap-24 p-6 md:p-16 max-w-6xl mx-auto">

                {/* Text */}
                <div className="w-full md:w-2/3">
                    <section
                        className="w-full flex flex-col items-center md:items-start text-center md:text-left"
                        aria-labelledby="about-heading"
                    >
                        <GradientText_Grey_White
                            text={t("aboutTitle")}
                            className="text-3xl font-bold tracking-tight sm:text-5xl mb-6"
                            angle={0}
                            as="h2"
                            id="about-heading"
                        />

                        <p className="max-w-2xl text-neutral-300 leading-relaxed mb-16 md:mb-16">
                            {t("aboutParagraph1")}
                        </p>

                        <p className="max-w-2xl text-neutral-300 leading-relaxed mb-16 md:mb-16">
                            {t("aboutParagraph2")}
                        </p>

                        <p className="max-w-2xl text-neutral-300 leading-relaxed mb-16 md:mb-16">
                            {t("aboutParagraph3")}
                        </p>
                    </section>
                </div>
            </div>

            {/* Spacer */}
            <div style={{ height: "6rem" }} />
        </div>
    );
}