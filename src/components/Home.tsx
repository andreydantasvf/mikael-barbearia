"use client";
import Image from "next/image";
import { scrollToSection } from "./Header";

export function HomePage() {
  return (
    <div className="bg-background_black h-[90vh] md:h-[85vh] 2xl:h-[50rem] flex items-center justify-center md:pt-32">
      <div className="max-w-[1440px] md:w-full mt-20 md:mt-0 px-12 md:px-20 flex flex-col md:flex-row-reverse md:gap-16 justify-center md:justify-between items-center space-y-8">
        <Image alt="Foto de exemplo" src="/exemplo_barbeiro.png" width={513} height={340} quality={100} />

        <div className="flex flex-col items-start">
          <h1 className="border-b border-gold">
            <img className="w-[14rem] h-10 md:w-[32rem] md:h-auto" src='/mikael_barbearia.svg' alt="Mikael Barbearia" />
          </h1>

          <p className="leading-normal tracking-wider text-[#DCDCDC] mt-3 md:mt-6 text-left text-sm md:text-xl font-roboto-slab">Entre como você é, saia como você quer ser!</p>

          <p className="leading-normal md:max-w-[80%] text-[#DCDCDC] mt-3 md:mt-6 mb-6 md:mb-12 text-left text-xs md:text-sm font-roboto-slab">A melhor barbearia de Patos-PB: cortes modernos, barba feita e uma experiência única. Agende já!</p>

          <button onClick={(e) => {
            e.preventDefault();
            scrollToSection('agendamento');
          }} className="rounded-md font-roboto-slab bg-gold text-[#373535] font-bold p-4 text-sm flex items-center gap-2 md:text-base hover:bg-[#F9B256] transition-all ease-in-out duration-300">AGENDE AGORA</button>
        </div>
      </div>
    </div>
  )
}