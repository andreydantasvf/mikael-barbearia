"use client";
import Image from "next/image";
import { DatePicker } from "./ui/datePicker";
import { MultiSelect } from "./ui/multi-select";
import { RxScissors } from "react-icons/rx";
import { GiBeard, GiToothbrush } from "react-icons/gi";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const servicesList = [
  { value: "cabelo", label: "Cabelo", icon: RxScissors },
  { value: "barba", label: "Barba", icon: GiBeard },
  { value: "selagem", label: "Selagem", icon: GiToothbrush },
];

export function Scheduling() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["cabelo"]);

  return (
    <section id="agendamento" className="bg-background_light flex items-center flex-col justify-center py-10">
      <div className="max-w-[1440px]">
        <div className="flex flex-col justify-end w-fit font-barlow-semi-condensed">
          <div className="flex gap-3">
            <div className="bg-gold w-7 md:w-14 h-3 md:h-6 rounded-xl mt-3"></div>
            <h2 className="text-3xl md:text-6xl font-bold mb-2">Agendamento</h2>
          </div>
          <span className="text-[#373535] text-right justify-self-end ml-8 md:ml-16 md:text-2xl">Deseja agendar algum serviço?</span>
        </div>

        <div className="w-72 min-h-96 md:w-[34rem] md:h-[39rem] bg-white border border-[9B9EA3] rounded-md mt-10 relative flex flex-col justify-between">
          <div className="absolute -left-3 top-7">
            <Image className="h-[21rem] md:h-auto" src="/ideia-caderno.svg" alt="lateral de caderno" width={24} height={572} quality={100} />
          </div>

          <form action="" className="text-sm md:text-base mx-7 md:mx-14 my-5 md:my-11 font-barlow-semi-condensed flex flex-col items-center gap-3 md:gap-6">
            <div className="w-full space-y-1 md:space-y-2">
              <label htmlFor="name" className="text-[5F6368] font-bold">Nome</label>
              <input className="border border-A19D9D bg-[#F9F9F9] w-full p-2 md:p-4 rounded-md" type="text" name="name" id="name" placeholder="Digite o seu Nome" />
            </div>

            <div className="w-full space-y-1 md:space-y-2">
              <label htmlFor="date" className="text-[5F6368] font-bold">Selecione uma data</label>
              <DatePicker />
            </div>

            <div className="w-full space-y-1 md:space-y-2">
              <label htmlFor="services" className="text-[5F6368] font-bold">Escolha um ou mais serviços</label>
              <MultiSelect
                options={servicesList}
                onValueChange={setSelectedServices}
                defaultValue={selectedServices}
                placeholder="Selecione os serviços"
                variant="destructive"
                maxCount={3}
              />
            </div>
          </form>

          <div className="flex justify-center items-center mb-12">
            <button className="max-h-14 rounded-md font-roboto-slab bg-gold text-[#373535] font-bold p-3 md:p-4 text-xs flex items-center gap-2 md:text-base hover:bg-[#F9B256] transition-all ease-in-out duration-300">SOLICITAR AGENDAMENTO <FaWhatsapp className="mb-1" size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}