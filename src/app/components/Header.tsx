"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"

export function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const menus = [
    { title: "Início", path: "home" },
    { title: "Serviços", path: "servicos" },
    { title: "Localização", path: "localizacao" },
    { title: "Galeria", path: "galeria" },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - 145;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <header className={`bg-background_black md:fixed md:w-full ${isOpen ? 'overflow-hidden' : 'overflow-auto'} z-50`}>
      <div className="relative">
        <div className="border-b border-gold w-full h-28 fixed z-50 md:border-b-0 md:static md:h-auto bg-background_black">
          <button
            onClick={toggleMenu}
            className="fixed top-10 left-4 z-50 text-gold outline-none p-2 rounded-md md:hidden"
          >
            {isOpen ? <X size={36} /> : <Menu size={36} />}
          </button>

          <div className="fixed top-4 md:static md:top-auto left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 mb-8 md:mb-0 flex items-center justify-center z-50">
            <Link href="/">
              <Image src='/logo.svg' alt="Logo da barbearia de Mikael" width={92} height={92} />
            </Link>
          </div>
        </div>
        <div
          className={`fixed bg-background_black top-0 left-0 h-full w-full text-white md:text-[#8C8C8C] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out z-40 md:static md:top-auto md:left-auto md:translate-x-0`}
        >
          <div className="p-6 mt-32 md:mt-0 md:border-b border-gold md:p-2 font-barlow-semi-condensed font-normal">
            <nav className="space-y-6 md:space-y-0 md:flex md:gap-10 md:justify-center">
              {menus.map(item => (
                <a key={item.title} onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.path);
                  setIsOpen(false);
                }} className="block text-2xl md:hover:text-white duration-500 transition-all leading-7 cursor-pointer">{item.title}</a>
              ))}
            </nav>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gold md:hidden">
            <div className="text-xs text-[#8C8C8C] font-roboto-slab">
              <div className="flex justify-between gap-3 text-[8px]">
                <div className="text-left">
                  <p className="text-[10px]"><strong>LOCAL</strong></p>
                  <p>Rua Manoel Reinaldo, 33</p>
                  <p>Bairro Jatobá, Patos - PB</p>
                </div>
                <div className="text-left">
                  <p className="text-[10px]"><strong>CONTATO</strong></p>
                  <p>(83) 98193-6151</p>
                  <p>mikael@email.com</p>
                </div>
                <div className="text-left">
                  <p className="text-[10px]"><strong>HORÁRIOS</strong></p>
                  <p>Seg-Sex: 8:30h às 21:00h</p>
                  <p>Sáb: 8:30h às 12:00h</p>
                </div>
              </div>

              <div className="flex items-center justify-center mt-12">
                <span>2024 © Mikael Barbearia - Todos os direitos reservados.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}