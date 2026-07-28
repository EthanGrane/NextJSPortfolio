"use client";

import { useState, useEffect } from "react";

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
            if (window.innerWidth > window.innerHeight)
            {
                const xValue =(e.clientX / window.innerWidth) * 100
                setMouseX(Math.min(Math.max(xValue, 25), 75));
            }
        }

        window.addEventListener("mousemove", handleMouseMove);


    }, []);

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
                            "--custom-gradient-color": "#313131",
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
                    <p className="text-lg font-bold sm:text-xl">Hey, my name is</p>

                    <LetterFx trigger="instant" speed="medium" className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Ethan Grané Garcia
                    </LetterFx>

                    <GradientText_Purple_Orange
                        text="A Full-Stack Developer with a passion for creating and innovative."
                        className="max-w-2xl text-3xl font-[900] tracking-tight sm:text-5xl md:text-6xl"
                    />
                </div>
            </div>

            {/* My skills (card with tech icons) */}
            <GradientText_Grey_White
                text="My Skills"
                className="text-3xl font-bold tracking-tight sm:text-5xl m-3 mb-6 md:mb-8"
                angle={0}
            />
            <section className="w-full">
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
            <GradientText_Grey_White
                className="text-4xl font-bold tracking-tight sm:text-5xl m-3 mb-16 md:mb-32"
                text="My Projects"
                angle={0}
            />

            <ProjectItem
                title="Social Network with VUE & Laravel"
                description="A location-based social network where users can create posts tied to any point on the map, combining social interaction with geolocation to provide a unique way of discovering content."
                images={[
                    { slide: "/projects/SocialMediaProject_Image1.webp" },
                    { slide: "/projects/SocialMediaProject_Image2.webp" },
                    { slide: "/projects/SocialMediaProject_Image3.webp" },
                ]}
                tags={["HTML", "CSS", "JavaScript", "VUE", "PHP", "LARAVEL", "MAPBOXGL (API)"]}
                timeline={[

                    {
                        label: "January 2025",
                        description: "Project kickoff",
                        state: "active"
                    },
                    {
                        label: "April 2025",
                        description: "Project delivery",
                        state: "success"
                    }
                ]}
                repoLink="https://github.com/EthanGrane/Proyecto-2-Whatevernever"
            />


            <ProjectItem
                title="Steam Market Analyzer"
                description="
                Steam Market Analyzer is a mobile application developed with React Native that allows developers, analysts, and enthusiasts in the video game industry to study the Steam market quickly and intuitively.
                "
                images={[
                    { slide: "/projects/SteamMarketAnalyzer_Image1.webp" },
                    { slide: "/projects/SteamMarketAnalyzer_Image2.webp" },
                    { slide: "/projects/SteamMarketAnalyzer_Image3.webp" },
                ]}
                tags={["HTML", "CSS", "JavaScript", "React", "React Native", "Steam API"]}
                timeline={[
                    {
                        label: "April 2026",
                        description: "Project kickoff",
                        state: "active"
                    },
                    {
                        label: "May 2026",
                        description: "MVP",
                        state: "success"
                    },
                    {
                        label: "Undefined",
                        description: "Project delivery",
                        state: "default"
                    }
                ]}
                repoLink="https://github.com/EthanGrane/Steam-Market-Analyzer"
                deployLink="https://github.com/EthanGrane/Steam-Market-Analyzer/releases"
            />

            <ProjectItem
                title="Digital Logic Simulator"
                description="
                In this project I made a logic gate simulator where you can create your own logic gates and combine them infinitely; the maximum calculation capacity I have tested has been a basic binary calculator.
                With this project I got an excellent grade in advanced programming
                "
                images={[
                    { slide: "/projects/DigitalLogicSimulator_Gif.gif" },
                    { slide: "/projects/DigitalLogicSimulator_Image1.webp" },
                    { slide: "/projects/DigitalLogicSimulator_Image2.webp" },
                ]}
                tags={["C#", "WinForms"]}
                timeline={[
                    {
                        label: "October 2024",
                        description: "Project kickoff",
                        state: "active"
                    },
                    {
                        label: "April 2024",
                        description: "MVP",
                        state: "success"
                    }
                ]}
                repoLink="https://github.com/EthanGrane/Digital-Logic-Simulator"
                deployLink="https://github.com/EthanGrane/Digital-Logic-Simulator/releases"
            />

            {/* Spacer */}
            <div style={{ height: "6rem" }} />
        </div>
    );
}