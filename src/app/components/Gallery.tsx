export function Gallery() {
  return (
    <section id="galeria" className="bg-background_light flex items-center flex-col justify-center py-10">
      <div className="max-w-[1440px]">
        <div className="flex flex-col justify-end w-fit font-barlow-semi-condensed">
          <div className="flex gap-3">
            <div className="bg-gold w-7 md:w-14 h-3 md:h-6 rounded-xl mt-3"></div>
            <h2 className="text-3xl md:text-6xl font-bold mb-2">Galeria</h2>
          </div>
          <span className="text-[#373535] text-right justify-self-end ml-8 md:ml-16 md:text-2xl">Fotos do meu trabalho</span>
        </div>


        <div className="mt-10 grid gap-2 md:gap-8 grid-cols-[64px_64px_64px] grid-rows-[64px_64px] md:grid-cols-[264px_264px_264px] md:grid-rows-[264px_264px] auto-cols-[64px] md:auto-cols-[264px] auto-rows-[64px] md:auto-rows-[264px] text-gray-700">
          <div className="bg-[url('/barba.png')] bg-no-repeat bg-cover bg-center rounded p-5 col-start-1 col-span-2 row-span-2"></div>
          <div className="bg-[url('/corte.png')] bg-no-repeat bg-cover bg-center rounded p-5 col-span-1 col-start-3 row-start-1 row-span-2"></div>
          <div className="bg-[url('/hidratacao.png')] bg-no-repeat bg-cover bg-center rounded p-5 col-start-4 row-start-1 row-span-1"></div>
          <div className="bg-[url('/luzes.png')] bg-no-repeat bg-cover bg-center rounded p-5 col-start-1 col-span-1 row-start-3"></div>
          <div className="bg-[url('/sobrancelha.png')] bg-no-repeat bg-cover bg-center rounded p-5 col-start-2 col-span-2 row-start-3"></div>
          <div className="bg-[url('/barba.png')] bg-no-repeat bg-cover bg-center rounded p-5 col-start-4 col-span-1 row-start-2 row-span-2"></div>
        </div>
      </div>
    </section>
  )
}