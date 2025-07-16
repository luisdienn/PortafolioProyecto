import { ArrowUpIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export function scrollToIdWithOffset(id: string, offset = 70) {
    const el = document.getElementById(id);
    if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

export default function ToTop() {
    const [isVisible,setIsVisible] = useState(false);

    useEffect(() =>{
        const toggleVisibility = () =>{
            if(window.scrollY>400){
                setIsVisible(true)
            }else{
                setIsVisible(false)
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return() => window.removeEventListener("scroll", toggleVisibility);
    },[])
    
    if(!isVisible){
        return null;
    }

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <button
                onClick={() => scrollToIdWithOffset('inicio', 70)}
                className="bg-pink-700 text-white px-4 py-2 hover:bg-pink-800 transition"
                aria-label="Ir al inicio"
            >
                <ArrowUpIcon className="w-4 h-4" />
            </button>
        </div>
    )
}