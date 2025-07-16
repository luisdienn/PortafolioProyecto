import cyberpunkVideo from "../assets/Cyberpunk.mp4";

export default function Inicio() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-2 ">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60 "
        src={cyberpunkVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls
      />

      {/* Contenido central */}
      <div className="z-20 flex flex-col items-center w-full max-w-full">
        <h1 className="font-syne text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 text-center">
          LUIS DIEGO DIEN BARRANTES
        </h1>
        <p className="font-dm-sans text-white mb-6 text-base sm:text-sm md:text-lg text-center">
          PORTAFOLIO 2025
        </p>
      </div>
    </div>
  );
}
