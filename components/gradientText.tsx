import { ElementType } from "react";

interface GradientTextProps {
    text: string;
    className: string;
    angle?: number;
    as?: ElementType;
    id?: string;
}

const GradientText_Purple_Orange = ({
    text,
    className,
    angle = 135,
    as: Tag = "span",
    id,
}: GradientTextProps) => {
    return (
        <Tag
            id={id}
            className={`bg-clip-text text-transparent ${className}`}
            style={{
                backgroundImage: `linear-gradient(${angle}deg, #a855f7, #fd944a)`,
            }}
        >
            {text}
        </Tag>
    );
};

const GradientText_Grey_White = ({
    text,
    className,
    angle = 135,
    as: Tag = "span",
    id,
}: GradientTextProps) => {
    return (
        <Tag
            id={id}
            className={`bg-clip-text text-transparent ${className}`}
            style={{
                backgroundImage: `linear-gradient(${angle}deg, #98a0b1, #ffffff)`,
            }}
        >
            {text}
        </Tag>
    );
};


export { GradientText_Purple_Orange, GradientText_Grey_White };