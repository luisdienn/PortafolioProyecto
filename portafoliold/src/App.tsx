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

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./components/Incio";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";
import ToTop from "./components/ToTop";
import AnimatedContent from "./AnimatedContent";

function App() {
  useEffect(() => {
    const interval = setInterval(removeGoogleTranslateCredit, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <section id="inicio">
        <Inicio />
      </section>
      <AnimatedContent
        distance={120}
        direction="vertical"
        reverse={false}
        duration={0.8}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}
      >
        <section id="sobremi">
          <SobreMi />
        </section>
      </AnimatedContent>
      <AnimatedContent
        distance={120}
        direction="vertical"
        reverse={false}
        duration={0.8}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}
      >
        <section id="proyectos">
          <Proyectos />
        </section>
      </AnimatedContent>
      <AnimatedContent
        distance={120}
        direction="vertical"
        reverse={false}
        duration={0.8}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}
      >
        <section id="habilidades">
          <Habilidades />
        </section>
      </AnimatedContent>
      <AnimatedContent
        distance={120}
        direction="vertical"
        reverse={false}
        duration={0.8}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}
      >
        <section id="contacto">
          <Contacto />
        </section>
      </AnimatedContent>

      <Footer />
      <ToTop />
    </>
  );
}

export default App;
