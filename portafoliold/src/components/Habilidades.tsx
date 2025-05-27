//FALTA TODO


import { FaReact, FaJava, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiDotnet, SiRuby, SiMongodb } from 'react-icons/si';

const techs = [
    { icon: <FaReact className="text-cyan-400 w-8 h-8" />, label: 'React' },
    { icon: <SiTailwindcss className="text-sky-400 w-8 h-8" />, label: 'Tailwind CSS' },
    { icon: <FaJava className="text-orange-500 w-8 h-8" />, label: 'Java' },
    { icon: <SiDotnet className="text-purple-700 w-8 h-8" />, label: '.NET' },
    { icon: <SiRuby className="text-red-500 w-8 h-8" />, label: 'Ruby' },
    { icon: <SiMongodb className="text-green-500 w-8 h-8" />, label: 'MongoDB' },
    { icon: <FaGitAlt className="text-orange-600 w-8 h-8" />, label: 'Git' },
    { icon: <FaDocker className="text-blue-400 w-8 h-8" />, label: 'Docker' },
];

export default function Habilidades() {
    return (
        <div className="flex flex-col items-center py-40">
            <h1 className="font-syne text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white pb-14 text-center">Habilidades</h1>
            <div className="flex gap-6 flex-wrap justify-center">
                {techs.map((tech, idx) => (
                    <div key={idx} className="relative flex items-center justify-center w-20 h-20">
                        <span className="absolute w-20 h-20 text-gray-700/60">
                            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                                <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
                            </svg>
                        </span>
                        <span className="relative z-10 flex items-center justify-center">
                            {tech.icon}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}