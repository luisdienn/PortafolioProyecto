//FALTA TODO

import { useState, useRef } from "react";
import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";
import { SiTailwindcss, SiDotnet, SiRuby, SiMongodb } from "react-icons/si";

const techs = [
  { icon: <FaReact className="text-cyan-400 w-8 h-8" />, label: "React" },
  {
    icon: <SiTailwindcss className="text-sky-400 w-8 h-8" />,
    label: "Tailwind CSS",
  },
  { icon: <FaJava className="text-orange-500 w-8 h-8" />, label: "Java" },
  { icon: <SiDotnet className="text-purple-700 w-8 h-8" />, label: ".NET" },
  { icon: <SiRuby className="text-red-500 w-8 h-8" />, label: "Ruby" },
  { icon: <SiMongodb className="text-green-500 w-8 h-8" />, label: "MongoDB" },
  { icon: <FaGitAlt className="text-orange-600 w-8 h-8" />, label: "Git" },
  { icon: <FaDocker className="text-blue-400 w-8 h-8" />, label: "Docker" },
];

const softSkills = [
  {
    icon: <FaLightbulb className="text-yellow-400 w-8 h-8" />,
    label: "Liderazgo",
  },
  {
    icon: <FaUsers className="text-blue-400 w-8 h-8" />,
    label: "Trabajo en equipo",
  },
  {
    icon: <FaComments className="text-green-400 w-8 h-8" />,
    label: "Comunicación",
  },
  {
    icon: <FaHandshake className="text-pink-400 w-8 h-8" />,
    label: "Adaptación al cambio",
  },
];

export default function Habilidades() {
  const [page, setPage] = useState(0);
  const [transition, setTransition] = useState(false);

  // Drag state
  const dragStartX = useRef<number | null>(null);

  const pages = [
    { title: "Técnicas", items: techs },
    { title: "Blandas", items: softSkills },
  ];

  // Cambia de página con animación
  const goToPage = (idx: number) => {
    if (idx === page) return;
    setTransition(true);
    setTimeout(() => {
      setPage(idx);
      setTransition(false);
    }, 200);
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 50) {
      // Sensibilidad del drag
      if (diff < 0 && page < pages.length - 1) {
        goToPage(page + 1);
      } else if (diff > 0 && page > 0) {
        goToPage(page - 1);
      }
    }
    dragStartX.current = null;
  };

  const handleMouseLeave = () => {
    dragStartX.current = null;
  };

  return (
    <>
      <h1 className="font-syne text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white pt-32 text-center">
        Habilidades
      </h1>
      <p className="font-sans text-gray-400 text-center pt-2 px-10">

        Mis habilidades combinan el dominio técnico con la capacidad de
        adaptación a nuevos retos. A lo largo de mi formación y experiencia, he
        fortalecido competencias en desarrollo de software, resolución de
        problemas y trabajo en equipo, que me permiten crear soluciones
        eficientes y de calidad.
      </p>

      <div
        className="flex flex-col items-center py-10 select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        tabIndex={0}
      >
        <h1 className="font-dm-sans font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white pb-6 text-center ">
          {pages[page].title}
        </h1>
        <div
          style={{ outline: "none", cursor: "grab" }}
          className={`flex gap-6 flex-wrap justify-center mb-8 transition-all duration-300 ease-in-out
                        ${
                          transition
                            ? "opacity-0 translate-x-10 pointer-events-none"
                            : "opacity-100 translate-x-0"
                        }
                    `}
        >
          {pages[page].items.map((skill, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-center w-20 h-20"
            >
              <span className="absolute w-20 h-20 text-gray-700/60">
                <svg
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
                </svg>
              </span>
              <span className="relative z-10 flex items-center justify-center">
                {skill.icon}
              </span>
            </div>
          ))}
        </div>
        {/* Carousel navigation */}
        <div className="flex gap-2">
          {pages.map((_, idx) => (
            <button
              key={idx}
              className={`w-6 h-1  ${
                page === idx ? "bg-white" : "bg-gray-500"
              } transition`}
              onClick={() => goToPage(idx)}
              aria-label={`Ir a la página ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
