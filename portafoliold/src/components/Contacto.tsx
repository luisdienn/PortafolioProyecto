//FALTA TODO

export default function Contacto() {


    return (
        <div className="pb-10">
            <div className="py-20">
                <h1 className="font-syne text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">Contacto</h1>
            </div>

            <div >
                <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl bg-white [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                    <div>
                        <h1 className="text-slate-900 text-3xl font-dm-sans">Hablemos</h1>
                        <p className="text-sm text-slate-500 mt-4 leading-relaxed font-dm-sans">No dudes en contactarme si estás buscando a alguien comprometido, creativo y con pasión por el desarrollo de software.</p>

                    </div>

                    <form className="space-y-4">
                        <input type='text' placeholder='Nombre'
                            className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500" />
                        <input type='email' placeholder='Correo electrónico'
                            className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500" />
                        <input type='text' placeholder='Asunto'
                            className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500" />
                        <textarea placeholder='Mensaje' rows={6}
                            className="w-full text-slate-900 rounded-md px-4 border border-gray-300 text-sm pt-2.5 outline-0 focus:border-blue-500"></textarea>
                        <button type='button'
                            className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-[15px] font-medium px-4 py-2 w-full cursor-pointer !mt-6">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}