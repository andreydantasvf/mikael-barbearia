import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function HomePage() {
  return (
    <div className="bg-background_black h-[90vh] md:h-[85vh] flex items-center justify-center md:pt-32">
      <div className="max-w-[1440px] mt-20 md:mt-0 px-12 md:px-0 flex flex-col md:flex-row-reverse md:gap-16 justify-center md:justify-between items-center space-y-8">
        <Image alt="Foto de exemplo" src="/exemplo_barbeiro.png" width={513} height={340} quality={100} />

        <div className="flex flex-col items-start">
          <h1 className="border-b border-gold">
            <img className="w-[14rem] h-10 md:w-[32rem] md:h-auto" src='/mikael_barbearia.svg' alt="Mikael Barbearia" />
          </h1>

          <p className="leading-6 text-[#DCDCDC] mt-8 md:mt-14 mb-6 md:mb-16 text-left md:text-xl font-barlow-semi-condensed">Me chamo Mikael xxxxxxxxxx, tenho xx anos, trabalho na barbearia a xx anos.</p>

          <button className="rounded-md font-roboto-slab bg-gold text-[#373535] font-bold p-4 text-sm flex items-center gap-2 md:text-base hover:bg-[#F9B256] transition-all ease-in-out duration-300"> <Link href="https://api.whatsapp.com/send?phone=+5583993486548&text=Me chamo Andrey e quero marcar um agendamento para o dia 22/07. Possui disponibilidade"> FAÇA O SEU AGENDAMENTO </Link> <FaWhatsapp className="mb-1" size={20} /></button>
        </div>
      </div>
    </div>
  )
}