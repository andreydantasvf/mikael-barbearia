import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-background_black flex items-center flex-col justify-center pt-8 pb-4 border-t border-gold">
      <div className="max-w-[1440px] md:w-full md:mx-52 md:px-20">
        <div className="text-xs text-[#8C8C8C] font-roboto-slab">
          <div className="flex justify-between gap-3 text-[8px] md:text-lg font-roboto-slab">
            <div className="text-left">
              <p className="text-[10px] md:text-2xl md:mb-4 font-bold"><strong>LOCAL</strong></p>
              <p>Rua Manoel Reinaldo, 33</p>
              <p>Bairro Jatobá, Patos - PB</p>
            </div>
            <div className="text-left">
              <p className="text-[10px] md:text-2xl md:mb-4 font-bold"><strong>CONTATO</strong></p>
              <p>(83) 98193-6151</p>
              <p>mikael@email.com</p>
            </div>
            <div className="text-left">
              <p className="text-[10px] md:text-2xl md:mb-4 font-bold"><strong>HORÁRIOS</strong></p>
              <p>Seg-Sex: 8:30h às 21:00h</p>
              <p>Sáb: 8:30h às 12:00h</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-between mt-10 md:mt-28 md:text-lg">
            <Image className="hidden md:block" src='/logo-footer.png' alt="Logo da barbearia de Mikael" width={72} height={72} quality={100} />
            <span>2024 © Mikael Barbearia - Todos os direitos reservados.</span>
          </div>
        </div>
      </div>

    </footer>
  )
}