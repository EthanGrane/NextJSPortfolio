import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiVuedotjs,
    SiMysql,
    SiMongodb,
    SiDocker,
    SiFlask,
    SiLaravel,
    SiPhp,
} from "react-icons/si";
import { IconType } from "react-icons";

export type TechItem = {
    icon: IconType;
    label: string;
    color: string;
};

export const techStack: TechItem[] = [
    { icon: SiHtml5, label: "HTML5", color: "text-orange-500" },
    { icon: SiCss, label: "CSS", color: "text-blue-500" },
    { icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
    { icon: SiReact, label: "React", color: "text-cyan-400" },
    { icon: SiNextdotjs, label: "Next.js", color: "text-white" },
    { icon: SiVuedotjs, label: "Vue", color: "text-green-400" },
    { icon: SiPhp, label: "PHP", color: "text-indigo-400" },
    { icon: SiLaravel, label: "Laravel", color: "text-red-500" },
    { icon: SiFlask, label: "Flask", color: "text-white" },
    { icon: SiMysql, label: "MySQL", color: "text-blue-400" },
    { icon: SiMongodb, label: "MongoDB", color: "text-green-500" },
    { icon: SiDocker, label: "Docker", color: "text-blue-500" },
];