import { FaLaptopCode } from 'react-icons/fa';

export default function Proyectos() {
    return (
        <>
            <div className="py-20">
                <h1 className="font-syne text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 text-center">Proyectos</h1>
            </div>

            <div className="container bg-transparent mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden h-full">
                    <div
                        className="border-2 absolute border-white h-full"
                        style={{ left: '50%' }}
                    ></div>

                    {/* Right timeline 1 */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1">
                            <FaLaptopCode className="w-8 h-8 text-white bg-black rounded-full pl-1" />

                        </div>
                        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">HealthTag</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                Una pulsera inteligente equipada con tecnología NFC y sensores de frecuencia cardíaca, diseñada para brindar acceso instantáneo a información médica crítica durante emergencias. Mediante un escaneo rápido, el personal de emergencia y las personas presentes pueden acceder a datos esenciales como historial médico, alergias y contactos de emergencia.
                            </p>
                            <p>Tecnologías: .NET Framework, Azure SQL, Bootstrap, Git</p>



                        </div>
                    </div>

                    {/* Left timeline 2 */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <FaLaptopCode className="w-8 h-8 text-white bg-black rounded-full pl-1" />
                        </div>
                        <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl">SMT (Sistema de Multas de Transito)</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                Sistema web desarrollado para optimizar la gestión y resolución de multas de tránsito de forma eficiente y segura. Permite la interacción de múltiples tipos de usuarios como ciudadanos, oficiales, personal administrativo y jueces.</p>
                            <p>Entre sus funcionalidades destacan: creación y asignación de multas con evidencia, resolución de disputas con verificación documental, pagos en línea, notificaciones en tiempo real y análisis estadístico con mapas de calor. También cuenta con autenticación multifactor, control de roles, diseño responsivo y consultas públicas sin registro.</p>
                            <p>Tecnologías: .NET Framework, React.js, Azure SQL, Tailwind CSS, Git, Python</p>
                        </div>
                    </div>

                    {/* Right timeline 3 */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <FaLaptopCode className="w-8 h-8 text-white bg-black rounded-full pl-1" />
                        </div>
                        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Portafolio Creativo</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                Sitio web personal diseñado para exhibir mi trabajo en fotografía y videografía, combinando creatividad visual con desarrollo web moderno. La plataforma ofrece una experiencia inmersiva, con una interfaz limpia, responsiva y atractiva.

                                Entre sus principales funciones destacan: galerías dinámicas de fotos y videos, integración con Cloudinary para una gestión eficiente de medios, diseño adaptable a todo tipo de dispositivos y navegación intuitiva para explorar el contenido fácilmente.

                                Tecnologías: React.js, Tailwind CSS, Cloudinary</p>
                        </div>
                    </div>

                    {/* Left timeline 4 */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <FaLaptopCode className="w-8 h-8 text-white bg-black rounded-full pl-1" />
                        </div>
                        <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl">RetoApp</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                            Aplicación web que permite a los usuarios registrar manualmente sus partidos y goles, llevar un historial personalizado y crear su propio “mundial personal”, el cual progresa automáticamente según los resultados ingresados. Además, incluye funciones sociales como agregar amigos, visualizar sus perfiles y comparar estadísticas en rankings. La app cuenta con cuatro secciones principales: dashboard personal, sección de amigos, mundiales personales y perfil del usuario.                            </p>
                            <p>Tecnologías: Ruby on Rails, React, MongoDB, Tailwind CSS, Git, Docker</p>

                        </div>
                    </div>
                </div>
            </div>



        </>

    )
}