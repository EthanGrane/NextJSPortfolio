import { IconType } from "react-icons";

type TechCardProps = {
    icon: IconType;
    label: string;
    color: string;
};

export const TechCard = ({ icon: Icon, label, color }: TechCardProps) => {
    return (
        <div className="
    flex flex-col gap-2 py-3 px-4 sm:px-6
    items-center justify-center aspect-square w-full sm:w-24 md:w-28
    rounded-lg border-2 border-gray-500
    hover:border-gray-200 hover:bg-[#3B3B3B]
    transition-colors duration-300
">
            <div className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9">
                <span className={`${color} w-full h-full inline-block`}>
                    <Icon />
                </span>
            </div>
            <p className="text-xs sm:text-sm font-bold select-none">
                {label}
            </p>
        </div>
    );
};