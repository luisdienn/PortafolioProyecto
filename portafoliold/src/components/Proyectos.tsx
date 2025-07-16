import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import RetoAppImage from "../assets/RetoApp.png";
import CreativePort from "../assets/CreativePort.jpg";
import Multas from "../assets/Multas.jpg";
import HealthTag from "../assets/HealthTag.png";

export default function Proyectos() {
  return (
    <>
      <div className="py-20">
        <h1 className="font-syne text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 text-center">
          Proyectos
        </h1>
        <p className="font-sans text-gray-400 text-center pt-2 px-10">
          A lo largo de mi trayectoria he desarrollado diversos proyectos que
          reflejan mi compromiso con la innovación, la calidad y el aprendizaje
          constante. Cada uno de ellos ha sido una oportunidad para poner en
          práctica mis habilidades técnicas y explorar nuevas soluciones que
          generen impacto.
        </p>
      </div>
      <div className="pt-2 h-screen px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 max-w-screen-xl mx-auto">
        <ScrollStack>
          <ScrollStackItem
            itemClassName="    relative
    text-white
    bg-center
    bg-no-repeat
    before:content-['']
    before:absolute
    before:inset-0
    before:bg-black/50
    before:rounded-[40px]"
            style={{
              backgroundImage: `url(${RetoAppImage})`,
            }}
          >
            <a href="https://xvideos.com">
              <div className="relative z-10">
                <h2 className="text-xl font-syne font-bold pb-4">RetoApp</h2>
                <p className="font-sans">
                  {" "}
                  Red social que permite a los usuarios registrar manualmente
                  sus partidos y goles, llevar un historial personalizado y
                  crear su propio “mundial personal” y comparar estadísticas con
                  amigos.
                </p>
                <br />
                <br />
                <p className="font-sans">
                  Tecnologías: Ruby on Rails, React, PostgreSQL, Tailwind CSS,
                  Git, Docker
                </p>
              </div>
            </a>
          </ScrollStackItem>
          <ScrollStackItem
            itemClassName="    relative
    text-white
    bg-center
    bg-no-repeat
    before:content-['']
    before:absolute
    before:inset-0
    before:bg-black/50
    before:rounded-[40px]"
            style={{
              backgroundImage: `url(${CreativePort})`,
              backgroundSize: "cover",
              backgroundPosition: "center ",
            }}
          >
            <a href="https://luis-diego-portafolio-ftvd.vercel.app/">
              <div className="relative z-10">
                <h2 className="text-xl font-syne font-bold pb-4">
                  Portafolio Creativo
                </h2>
                <p className="font-sans">
                  {" "}
                  Sitio web personal diseñado para exhibir mi trabajo en
                  fotografía y videografía, combinando creatividad visual con
                  desarrollo web moderno.
                </p>
                <br />
                <br />
                <p className="font-sans">
                  Tecnologías: React.js, Tailwind CSS, Cloudinary
                </p>
              </div>
            </a>
          </ScrollStackItem>
          <ScrollStackItem
            itemClassName="    relative
    text-white
    bg-center
    bg-no-repeat
    before:content-['']
    before:absolute
    before:inset-0
    before:bg-black/70
    before:rounded-[40px]"
            style={{
              backgroundImage: `url(${Multas})`,
              backgroundSize: "cover",
              backgroundPosition: "center bottom ",
            }}
          >
            <a href="https://github.com/Alexlop175Cenfotec/Proyecto2">
              <div className="relative z-10">
                <h2 className="text-xl font-syne font-bold pb-4">
                  Sistema de Multas{" "}
                </h2>
                <p className="font-sans">
                  {" "}
                  Sistema para la creación y asignación de multas con evidencia,
                  resolución de disputas con verificación documental, pagos en
                  línea, notificaciones en tiempo real y análisis estadístico
                  con mapas de calor.
                </p>
                <br />
                <br />
                <p className="font-sans">
                  Tecnologías: .NET Framework, React.js, Azure SQL, Tailwind
                  CSS, Git, Python
                </p>
              </div>
            </a>
          </ScrollStackItem>
          <ScrollStackItem
            itemClassName="    relative
    text-white
    bg-center
    bg-no-repeat
    before:content-['']
    before:absolute
    before:inset-0
    before:bg-black/70
    before:rounded-[40px]"
            style={{
              backgroundImage: `url(${HealthTag})`,
              backgroundSize: "cover",
              backgroundPosition: "center ",
            }}
          >
            <a href="https://github.com/Alexlop175Cenfotec/HealthTag">
              <div className="relative z-10">
                <h2 className="text-xl font-syne font-bold pb-4">
                  Health Tag{" "}
                </h2>
                <p className="font-sans">
                  {" "}
                  Una pulsera inteligente equipada con tecnología NFC y sensores
                  de frecuencia cardíaca, diseñada para brindar acceso
                  instantáneo a información médica crítica durante emergencias.
                </p>
                <br />
                <br />
                <p className="font-sans">
                  Tecnologías: .NET Framework, Azure SQL, Bootstrap, Git
                </p>
              </div>
            </a>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </>
  );
}
