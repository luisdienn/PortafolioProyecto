import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslateWidget() {
  useEffect(() => {
    // Si ya existe el script, no lo vuelvas a insertar
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'es',
            includedLanguages: 'en,es,fr,de,it,pt',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      };

      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // Limpieza del texto molesto
    const observer = new MutationObserver(() => {
      const container = document.getElementById('google_translate_element');
      if (container) {
        Array.from(container.childNodes).forEach((node) => {
          if (
            node.nodeType === Node.TEXT_NODE &&
            node.textContent?.includes('Con la tecnología de')
          ) {
            node.textContent = '';
          }
        });
      }
    });

    const target = document.getElementById('google_translate_element');
    if (target) {
      observer.observe(target, {
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  return <div id="google_translate_element" className="text-white" />;
}
