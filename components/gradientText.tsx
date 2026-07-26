const GradientText_Purple_Orange = ({
    text,
    className,
    angle = 135,
}: {
    text: string;
    className: string;
    angle?: number;
}) => {
    return (
        <span
            className={`bg-clip-text text-transparent ${className}`}
            style={{
                backgroundImage: `linear-gradient(${angle}deg, #a855f7, #fd944a)`,
            }}
        >
            {text}
        </span>
    );
};

const GradientText_Grey_White = ({
    text,
    className,
    angle = 135,
}: {
    text: string;
    className: string;
    angle?: number;
}) => {
    return (
        <span
            className={`bg-clip-text text-transparent ${className}`}
            style={{
                backgroundImage: `linear-gradient(${angle}deg, #98a0b1, #ffffff)`,
            }}
        >
            {text}
        </span>
    );
};


export { GradientText_Purple_Orange, GradientText_Grey_White };