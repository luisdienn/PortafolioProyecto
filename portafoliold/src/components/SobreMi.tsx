import CVESPANOL from '../assets/CVMarcaEspañol.pdf';

export default function SobreMi() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-stretch mt-10  bg-white mx-6 ">
            <div className="w-full max-w-xl bg-white my-4 p-6 h-full">
                <p className="font-syne text-xl font-semibold pb-5">Sobre Mí</p>
                <p className="font-dm-sans pb-2 text-gray-500">
                    Desarrollador Fullstack con enfoque en desarrollo de software, análisis de requerimientos y documentación técnica. Experiencia colaborando en equipos ágiles en proyectos dinámicos. Bilingüe en inglés y español, con habilidades sólidas de comunicación y pensamiento analítico.
                </p>
            </div>


            <div className="w-full max-w-xl bg-white my-4 p-6 flex flex-col items-center h-full">
                <p className="font-syne text-xl font-semibold pb-8 text-center">Curriculum Vitae</p>
                <a
                    href={CVESPANOL}
                    download
                    className="inline-flex px-6 py-3 bg-white border-2 border-pink-700 text-pink-700 font-dm-sans group hover:bg-pink-700 hover:text-white transition-colors duration-300"
                >
                    <svg className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
                    </svg>
                    Descargar CV
                </a>
            </div>
        </div>
    );
}