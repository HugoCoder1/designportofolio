import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function Projet({
  titre,
  content,
  link,
  nombre,
  logo,
}: {
  titre: string;
  content?: string;
  link: string;
  nombre: string;
  logo?: boolean;
}) {
  return (
    <>
      <div className="px-4 sm:px-0 mt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center inter opacity-100 h-auto lg:h-[473px] gap-8">
        {/* Section texte */}
        <div className="flex flex-col gap-12 lg:gap-[175px]">
          <div className="w-full lg:w-[356px] leading-[121.5%] tracking-[-3%] gap-8 flex flex-col">
            <p className="font-medium text-[16px] lg:text-[18px] leading-[121.5%] tracking-[-3%] text-main-black">
              {nombre} / PROJET NAME
            </p>
            <p className="text-body text-main-black font-normal">
              {titre}
            </p>
            <p className="text-[14px] lg:text-[16px] text-main-gray font-normal leading-[121.5%] tracking-[-3%]">
              {content}
            </p>
          </div>

          <a className="border-b w-fit border-black flex gap-x-[2px] text-main-black text-link font-medium leading-[121.5%] tracking-[-3%]">
            {link}
            {logo && (
              <span className="">
                <ArrowUpRight />
              </span>
            )}
          </a>
        </div>

        {/* Section image */}
        <div className="w-full lg:w-[640px] h-[200px]  lg:h-[385px] bg-main-gray" />
      </div>

      {/* Ligne séparatrice */}
      <div className="mx-4 sm:mx-0 mt-10 border-b-[3.5px] border-[#181717]" />
    </>
  );
}
