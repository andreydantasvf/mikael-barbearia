import { FaWhatsapp } from "react-icons/fa";

export function HomePage() {
  return (
    <div className="bg-background_black h-screen flex items-center justify-center md:pt-32">
      <div className="max-w-[1440px] mt-12 md:mt-0 px-12 md:px-0 flex flex-col md:flex-row-reverse md:gap-16 justify-center md:justify-between items-center space-y-8">
        <div className="w-56 md:w-[27rem] h-64 md:h-[28rem] bg-slate-500">

        </div>

        <div className="flex flex-col items-center">
          <h1 className="border-b border-gold">
            <img className="w-[14rem] h-10 md:w-[32rem] md:h-auto" src='/mikael_barbearia.svg' alt="Mikael Barbearia" />
          </h1>

          <p className="leading-6 text-slate-200 mt-8 mb-6 text-left md:text-xl">Me chamo Mikael xxxxxxxxxx, tenho xx anos, trabalho na barbearia a xx anos.</p>

          <button className="rounded-md bg-gold text-[#373535] font-bold p-4 text-sm flex items-center gap-2 md:text-base">CONHEÇA O MEU TRABALHO <FaWhatsapp className="mb-1" size={20} /></button>
        </div>
      </div>
    </div>
  )
}