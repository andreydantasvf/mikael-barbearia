import { MapPin } from "lucide-react";
import Link from "next/link";

export function Localization() {
  return (
    <section className="bg-background_black flex items-center flex-col justify-center py-10">
      <div className="max-w-[1440px]">
        <div className="flex flex-col justify-end w-fit">
          <div className="flex gap-3">
            <div className="bg-gold w-7 md:w-14 h-3 md:h-6 rounded-xl mt-3"></div>
            <h2 className="text-3xl md:text-6xl font-bold mb-2 text-slate-200">Localização</h2>
          </div>
          <span className="text-[#8C8C8C] text-right justify-self-end ml-7 md:ml-14 md:text-2xl">Encontre a Barbearia</span>
        </div>

        <div className="flex flex-col items-center md:flex-row md:mt-14 md:gap-24">
          <iframe className="hidden md:flex" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.629433931269!2d-37.282374615672396!3d-7.052755650915822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7af5fe047314a55%3A0x65f1930a956ba7f2!2sR.%20Manoel%20Reinaldo%2C%2033%20-%20Jatob%C3%A1%2C%20Patos%20-%20PB%2C%2058707-420!5e0!3m2!1spt-BR!2sbr!4v1726965253604!5m2!1spt-BR!2sbr" width="600" height="450" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          
          <div className="flex flex-col items-center justify-center" >
            <div className="bg-slate-400 w-56 md:w-96 h-40 md:h-60 mt-10">

            </div>

            <Link href="https://maps.app.goo.gl/qMbitsmqHHyPf5wC6" className="flex items-center gap-2 text-[#C9C9C9] underline font-bold text-base mt-4 md:hidden">
              <MapPin className="text-gold" /> Via Google Maps
            </Link>

            <div className="space-y-3 mt-6 text-[#8C8C8C] md:text-2xl">
              <div>
                <p>Rua Manoel Reinaldo, 33</p>
                <p>Bairro Jatobá, Patos - PB</p>
              </div>

              <div>
                <p>Seg-Sex: 8:30h às 21:00h</p>
                <p>Sáb: 8:30h às 12:00h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}