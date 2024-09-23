import Image from "next/image";

export function Services() {
  return (
    <section id="servicos" className="bg-background_light flex items-center flex-col justify-center mt-10 pb-10">
      <div className="max-w-[1440px]">
        <div className="flex flex-col justify-end w-fit font-barlow-semi-condensed">
          <div className="flex gap-3">
            <div className="bg-gold w-7 md:w-14 h-3 md:h-6 rounded-xl mt-3"></div>
            <h2 className="text-3xl md:text-6xl font-bold mb-2">Serviços</h2>
          </div>
          <span className="text-[#373535] text-right justify-self-end ml-8 md:ml-16 md:text-2xl">Confira os serviços disponíveis</span>
        </div>

        <div className="flex flex-col gap-4 md:gap-20 md:items-center font-barlow-semi-condensed font-bold">
          <div className="flex flex-col md:flex-row gap-4 md:gap-20 mt-10">
            <div className="bg-[url('/corte.png')] rounded-lg bg-contain bg-center bg-clip-content brightness-50 hover:brightness-100 transition-all duration-300 ease-in-out w-60 md:w-72 h-40 md:h-48 flex flex-col items-center justify-center gap-2 text-[#A9A9A9] font-bold text-3xl">
              <div className="brightness-200 flex flex-col items-center">
                <Image src="/pente.svg" alt="Imagem de um pente" width={90} height={90} />
                <span className="mt-3 block">CORTE</span>
              </div>
            </div>

            <div className="bg-[url('/hidratacao.png')] rounded-lg bg-contain bg-center bg-clip-content brightness-50 hover:brightness-100 transition-all duration-300 ease-in-out w-60 md:w-72 h-40 md:h-48 flex flex-col items-center justify-center gap-2 text-[#A9A9A9] font-bold text-3xl">
              <div className="brightness-200 flex flex-col items-center">
                <Image src="/borrifador.svg" alt="Imagem de um pente" width={45} height={45} />
                <span className="mt-3 block">SELAGEM</span>
              </div>
            </div>

            <div className="bg-[url('/sobrancelha.png')] rounded-lg bg-contain bg-center bg-clip-content brightness-50 hover:brightness-100 transition-all duration-300 ease-in-out w-60 md:w-72 h-40 md:h-48 flex flex-col items-center justify-center gap-2 text-[#A9A9A9] font-bold text-3xl">
              <div className="brightness-200 flex flex-col items-center">
                <Image src="/navalha.svg" alt="Imagem de um pente" width={90} height={90} />
                <span className="mt-3 block">SOBRANCELHA</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-20">
            <div className="bg-[url('/barba.png')] rounded-lg bg-contain bg-center bg-clip-content brightness-50 hover:brightness-100 transition-all duration-300 ease-in-out w-60 md:w-72 h-40 md:h-48 flex flex-col items-center justify-center gap-2 text-[#A9A9A9] font-bold text-3xl">
              <div className="brightness-200 flex flex-col items-center">
                <Image src="/tesoura.svg" alt="Imagem de um pente" width={90} height={90} />
                <span className="mt-3 block">BARBA</span>
              </div>
            </div>

            <div className="bg-[url('/luzes.png')] rounded-lg bg-contain bg-center bg-clip-content brightness-50 hover:brightness-100 transition-all duration-300 ease-in-out w-60 md:w-72 h-40 md:h-48 flex flex-col items-center justify-center gap-2 text-[#A9A9A9] font-bold text-3xl">
              <div className="brightness-200 flex flex-col items-center">
                <Image src="/pincel.svg" alt="Imagem de um pente" width={60} height={60} />
                <span className="mt-3 block">LUZES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}