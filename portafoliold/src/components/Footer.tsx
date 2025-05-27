import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black py-6 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
        <span className="font-dm-sans text-gray-400 text-sm text-center md:text-left">© 2025 Luis Diego Dien Barrantes. All rights reserved.</span>
        <div className="flex items-center space-x-6 pr-0 md:pr-6">

            {/* Whatsapp */}
          <a href="https://wa.me/+50686207668?text=Hola! Estoy interesado en tu trabajo." className="text-gray-400 hover:text-white" aria-label="Whatsapp">
            <FaWhatsapp size={22} />
          </a>
         
          {/* GitHub */}
          <a href="https://github.com/luisdienn" className="text-gray-400 hover:text-white" aria-label="GitHub">
            <FaGithub size={22} />
          </a>
          {/* LinkeIn */}
          <a href="https://www.linkedin.com/in/luis-diego-dien-84082a192/" className="text-gray-400 hover:text-white" aria-label="LinkeIn">
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
