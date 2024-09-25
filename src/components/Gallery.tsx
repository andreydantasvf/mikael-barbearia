"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export function Gallery() {
  const [showImage, setShowImage] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <section id="galeria" className="bg-background_black flex items-center flex-col justify-center py-10">
      <div className="max-w-[1440px] md:w-full md:mx-52 md:px-20">
        <div className="flex flex-col justify-end w-fit font-barlow-semi-condensed">
          <div className="flex gap-3">
            <div className="bg-gold w-7 md:w-14 h-3 md:h-6 rounded-xl mt-3"></div>
            <h2 className="text-3xl md:text-6xl font-bold mb-2 text-[#DCDCDC]">Galeria</h2>
          </div>
          <span className="text-[#8C8C8C] text-right justify-self-end ml-8 md:ml-16 md:text-2xl">Fotos do meu trabalho</span>
        </div>


        <div className="mt-10 grid gap-2 md:gap-8 grid-cols-[64px_64px_64px] grid-rows-[64px_64px] md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[264px_264px] auto-cols-[64px] md:auto-cols-[264px] auto-rows-[64px] md:auto-rows-[264px] text-gray-700">
          <div className="bg-[url('/barba.png')] bg-no-repeat cursor-pointer bg-cover bg-center rounded p-5 col-start-1 col-span-2 row-span-2" onClick={() => {
            setImageIndex(0);
            setShowImage(true);
          }}></div>
          <div className="bg-[url('/corte.png')] bg-no-repeat cursor-pointer bg-cover bg-center rounded p-5 col-span-1 col-start-3 row-start-1 row-span-2" onClick={() => {
            setImageIndex(1);
            setShowImage(true);
          }}></div>
          <div className="bg-[url('/hidratacao.png')] bg-no-repeat cursor-pointer bg-cover bg-center rounded p-5 col-start-4 row-start-1 row-span-1" onClick={() => {
            setImageIndex(2);
            setShowImage(true);
          }}></div>
          <div className="bg-[url('/luzes.png')] bg-no-repeat cursor-pointer bg-cover bg-center rounded p-5 col-start-1 col-span-1 row-start-3" onClick={() => {
            setImageIndex(3);
            setShowImage(true);
          }}></div>
          <div className="bg-[url('/sobrancelha.png')] bg-no-repeat cursor-pointer bg-cover bg-center rounded p-5 col-start-2 col-span-2 row-start-3" onClick={() => {
            setImageIndex(4);
            setShowImage(true);
          }}></div>
          <div className="bg-[url('/barba.png')] bg-no-repeat cursor-pointer bg-cover bg-center rounded p-5 col-start-4 col-span-1 row-start-2 row-span-2" onClick={() => {
            setImageIndex(5);
            setShowImage(true);
          }}></div>
        </div>
      </div>

      <Lightbox
        open={showImage}
        close={() => setShowImage(false)}
        slides={[
          { src: "/barba.png" },
          { src: "/corte.png" },
          { src: "/hidratacao.png" },
          { src: "/luzes.png" },
          { src: "/sobrancelha.png" },
          { src: "/barba.png" },
        ]}
        index={imageIndex}
      />
    </section>
  )
}