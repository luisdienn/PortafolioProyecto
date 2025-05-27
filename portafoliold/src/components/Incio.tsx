import cyberpunkVideo from '../assets/Cyberpunk.mp4';

export default function Inicio() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-4 ">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60 pt-10"
        src={cyberpunkVideo}
        autoPlay
        loop
        muted
        playsInline
      />


      {/* Contenido central */}
      <div className="z-20 flex flex-col items-center w-full max-w-2xl">
        <h1 className="font-syne text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-2 text-center">
          LUIS DIEGO DIEN
        </h1>
        <p className="font-dm-sans text-gray-100 mb-6 text-base sm:text-lg md:text-xl text-center">
          portfolio 2025
        </p>
      </div>
    </div>
  );
}
