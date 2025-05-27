import { useState } from "react";

//FALTA TODO

export default function Contacto() {
    const [toast, setToast] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; target: any; }) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        const res = await fetch("https://formspree.io/f/xgvkgaob", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json",
            },
        });

        if (res.ok) {
            setToast("¡Mensaje enviado correctamente!");
            form.reset();
            setTimeout(() => setToast(""), 3000);
        } else {
            setToast("Hubo un error al enviar el mensaje.");
            setTimeout(() => setToast(""), 3000);
        }
    };

    return (
        <div className="pb-10">
            <div className="py-20">
                <h1 className="font-syne text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">Contacto</h1>
            </div>

            <div className="px-5">
                <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl bg-white">
                    <div>
                        <h1 className="text-slate-900 text-3xl font-dm-sans">Hablemos</h1>
                        <p className="text-sm text-slate-500 mt-4 leading-relaxed font-dm-sans">No dudes en contactarme si estás buscando a alguien comprometido, creativo y con pasión por el desarrollo de software.</p>

                    </div>

                    <form
                        className="space-y-4"
                        onSubmit={handleSubmit}
                    >
                        <input name="nombre" type='text' placeholder='Nombre'
                            className="w-full text-slate-900  py-2.5 px-4 border border-gray-300 text-sm font-dm-sans outline-0 focus:border-pink-500" />
                        <input name="email" type='email' placeholder='Correo electrónico'
                            className="w-full text-slate-900  py-2.5 px-4 border border-gray-300 text-sm font-dm-sans outline-0 focus:border-pink-500" />
                        <input name="asunto" type='text' placeholder='Asunto'
                            className="w-full text-slate-900  py-2.5 px-4 border border-gray-300 text-sm font-dm-sans outline-0 focus:border-pink-500" />
                        <textarea name="mensaje" placeholder='Mensaje' rows={6}
                            className="w-full text-slate-900  px-4 border border-gray-300 text-sm font-dm-sans pt-2.5 outline-0 focus:border-pink-500"></textarea>
                        <button type='submit'
                            className=" hover:bg-pink-700 hover:text-white border-2 border-pink-700  text-[15px] font-medium font-syne px-4 py-2 w-full cursor-pointer text-pink-700 !mt-6 transition-colors duration-300">ENVIAR</button>
                    </form>
                </div>
                {/* Toast */}
                {toast && (
                    <div className="font-dm-sans font-bold fixed top-14 right-10 border-2 border-pink-700 text-pink-700 px-6 py-3 z-50 transition">
                        {toast}
                    </div>
                )}
            </div>
        </div>
    );
}