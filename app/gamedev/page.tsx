"use client";

import { useState, useEffect } from "react";

import { GradientText_Green_White, GradientText_Grey_White } from "@/components/gradientText";
import { GameItem } from "@/components/gameItem";

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
                            "--custom-gradient-color": "#1b361b",
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

                    <h1 className="flex flex-col items-center gap-2">
                        <LetterFx trigger="instant" speed="medium" className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            Ethan Grané Garcia
                        </LetterFx>

                        <GradientText_Green_White
                            text="A Unity3D Game Developer."
                            className="max-w-2xl text-3xl font-[900] tracking-tight sm:text-5xl md:text-6xl"
                        />
                    </h1>
                </div>
            </div>

            {/* Games */}
            <section className="w-full flex flex-col items-center" aria-labelledby="projects-heading">
                <GradientText_Grey_White
                    className="text-4xl font-bold tracking-tight sm:text-5xl m-3 mb-16 md:mb-32"
                    text="My Games"
                    angle={0}
                    as="h2"
                    id="projects-heading"
                />

                <GameItem
                    title="Gatto's Pizzeria"
                    description="In this first-person cozy cooking game, you can choose between 5 adorable cats and manage a small pizzeria full of hungry human customers."
                    youtubeLink=""
                    images={[
                        { slide: "/games/GattosPizzeria_Image1.png", alt: "Social network feed showing posts pinned to a map" },
                    ]}
                    deployLink="https://store.steampowered.com/app/3137770/Gattos_Pizzeria/"
                />

            </section>

            {/* Prototipes */}
            <section className="w-full flex flex-col items-center" aria-labelledby="projects-heading">
                <GradientText_Grey_White
                    className="text-4xl font-bold tracking-tight sm:text-5xl m-3 mb-16 md:mb-32"
                    text="My Favorite Prototypes"
                    angle={0}
                    as="h2"
                    id="projects-heading"
                />

                <GameItem
                    title="Factorio Clicker"
                    description="A first-person game that blends Factorio and CookieClicker. In this prototype, your goal is to automate the collection and sale of resources to improve your buildings and abilities."
                    youtubeLink="https://www.youtube.com/watch?v=RlD0FcA5vko"
                    repoLink="https://github.com/EthanGrane/ClickerFactorio"
                />

                <GameItem
                    title="Deterministic Factory Game"
                    description="A 2D top-down game where you must defend yourself against enemies in a tower defense style by building defenses similar to Factorio. Modify the enemy's path to give yourself more time to defeat them before they reach your base."
                    youtubeLink="https://www.youtube.com/watch?v=NTykMgVD5Tg"
                    repoLink="https://github.com/EthanGrane/DeterministicFactoryGame"
                />

            </section>

            {/* Spacer */}
            <div style={{ height: "6rem" }} />
        </div>
    );
}