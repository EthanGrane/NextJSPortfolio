"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

import { GradientText_Green_White, GradientText_Grey_White } from "@/components/gradientText";
import { GameItem } from "@/components/gameItem";

import { Background, RevealFx, LetterFx } from "@once-ui-system/core";

// Unity Asset Store packages by Code Trigger (https://assetstore.unity.com/publishers/43932)
const ASSETS: { key: string; youtubeLink?: string; assetStoreLink: string }[] = [
    {
        key: "raytracedSpatialAudio",
        youtubeLink: "https://www.youtube.com/watch?v=0VxFtoMKp6w",
        assetStoreLink: "https://assetstore.unity.com/packages/tools/audio/raytraced-spatial-audio-dynamic-acoustics-dynamic-occlusion-402454",
    },
    {
        key: "digAHoleKit",
        youtubeLink: "https://www.youtube.com/watch?v=0Olvzt5uq7Y",
        assetStoreLink: "https://assetstore.unity.com/packages/templates/systems/dig-a-hole-kit-3d-digging-engine-jobs-burst-388036",
    },
    {
        key: "reflectIt",
        youtubeLink: "https://www.youtube.com/watch?v=oy4j9eOQ9aE",
        assetStoreLink: "https://assetstore.unity.com/packages/vfx/shaders/reflect-it-urp-glass-refraction-shader-pack-stylized-realistic-338954",
    },
    {
        key: "infestIt",
        youtubeLink: "https://www.youtube.com/watch?v=77an0-IJyoc",
        assetStoreLink: "https://assetstore.unity.com/packages/tools/behavior-ai/infest-it-smart-insect-emitter-301063",
    },
    {
        key: "soundIt",
        youtubeLink: "https://www.youtube.com/watch?v=x9IsuMiSq3o",
        assetStoreLink: "https://assetstore.unity.com/packages/tools/audio/sound-it-shape-based-adaptive-audio-316470",
    },
    {
        key: "splineAudioSource",
        youtubeLink: "https://www.youtube.com/watch?v=Scx1IsJvmmM",
        assetStoreLink: "https://assetstore.unity.com/packages/tools/audio/spline-audio-source-306126",
    },
    {
        key: "stylizedHandpaintedPack",
        assetStoreLink: "https://assetstore.unity.com/packages/vfx/shaders/stylized-handpainted-shader-textures-pack-urp-triplanar-pbr-329434",
    },
];

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
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const t = useTranslations("GameDevPortfolio");

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
                <div style={{ height: "6rem" }} />

                {/* - Presentation */}
                <div className="flex flex-col items-center justify-center py-10 text-center relative z-10">
                    <p className="text-lg font-bold sm:text-xl">{t("greeting")}</p>

                    <h1 className="flex flex-col items-center gap-2">
                        <LetterFx trigger="instant" speed="medium" className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            Ethan Grané Garcia
                        </LetterFx>

                        <GradientText_Green_White
                            text={t("heroDescription")}
                            className="max-w-2xl text-3xl font-[900] tracking-tight sm:text-5xl md:text-6xl"
                        />
                    </h1>
                </div>
            </div>

            {/* Games */}
            <section className="w-full flex flex-col items-center" aria-labelledby="games-heading">
                <GradientText_Grey_White
                    className="text-4xl font-bold tracking-tight sm:text-5xl m-3 mb-8 md:mb-12"
                    text={t("gamesTitle")}
                    angle={0}
                    as="h2"
                    id="games-heading"
                />

                <GameItem
                    title={t("games.gattosPizzeria.title")}
                    description={t("games.gattosPizzeria.description")}
                    youtubeLink=""
                    images={[
                        { slide: "/games/GattosPizzeria_Image1.png", alt: "Social network feed showing posts pinned to a map" },
                    ]}
                    deployLink="https://store.steampowered.com/app/3137770/Gattos_Pizzeria/"
                />

            </section>

            {/* Spacer */}
            <div style={{ height: "6rem" }} />

            {/* Prototipes */}
            <section className="w-full flex flex-col items-center" aria-labelledby="prototypes-heading">
                <GradientText_Grey_White
                    className="text-4xl font-bold tracking-tight sm:text-5xl m-3 mb-8 md:mb-12"
                    text={t("prototypesTitle")}
                    angle={0}
                    as="h2"
                    id="prototypes-heading"
                />

                <GameItem
                    title={t("prototypes.factorioClicker.title")}
                    description={t("prototypes.factorioClicker.description")}
                    youtubeLink="https://www.youtube.com/watch?v=RlD0FcA5vko"
                    repoLink="https://github.com/EthanGrane/ClickerFactorio"
                />

                <GameItem
                    title={t("prototypes.deterministicFactoryGame.title")}
                    description={t("prototypes.deterministicFactoryGame.description")}
                    youtubeLink="https://www.youtube.com/watch?v=NTykMgVD5Tg"
                    repoLink="https://github.com/EthanGrane/DeterministicFactoryGame"
                />

            </section>

            <section className="w-full flex flex-col items-center" aria-labelledby="assets-heading">
                <GradientText_Grey_White
                    className="text-4xl font-bold tracking-tight sm:text-5xl m-3 mb-8 md:mb-12"
                    text={t("assetsTitle")}
                    angle={0}
                    as="h2"
                    id="assets-heading"
                />

                {ASSETS.map((asset) => (
                    <GameItem
                        key={asset.key}
                        title={t(`assets.${asset.key}.title`)}
                        description={t(`assets.${asset.key}.description`)}
                        youtubeLink={asset.youtubeLink}
                        assetStoreLink={asset.assetStoreLink}
                    />
                ))}
            </section>

            {/* Spacer */}
            <div style={{ height: "6rem" }} />
        </div>
    );
}