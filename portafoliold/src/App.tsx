import { useEffect } from "react";

function removeGoogleTranslateCredit() {
  const container = document.getElementById("google-translate-element");

  if (container) {
    Array.from(container.childNodes).forEach((node) => {
      if (
        node.nodeType === Node.TEXT_NODE &&
        node.textContent?.includes("Con la tecnología de")
      ) {
        node.textContent = "";
      }
    });
  }
}


import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './components/Incio'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Habilidades from './components/Habilidades'
import Contacto from './components/Contacto'
import ToTop from './components/ToTop'


function App() {
  useEffect(() => {
    const interval = setInterval(removeGoogleTranslateCredit, 500);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <Navbar />
      <section id="inicio"><Inicio /></section>
      <section id="sobremi"><SobreMi /></section>
      <section id="proyectos"><Proyectos /></section>
      <section id="habilidades"><Habilidades /></section>
      <section id="contacto"><Contacto /></section>
      <Footer />
      <ToTop />
    </>
  )
}

export default App
