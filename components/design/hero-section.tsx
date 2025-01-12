import React from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import Transition from "../Transition";

export default function HeroSection() {
  return (
    <Transition>
      <div className="mt-20 md:mt-40 h-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row gap-x-[20px] gap-y-6 md:gap-x-[116px] md:gap-y-[70px]">
          <h1
            className={`text-[24px] sm:text-[30px] md:w-[370px] md:h-[129px] md:text-heading1 font-medium leading-[1.2] md:leading-[97.2%] tracking-[-3%]`}
          >
            Hello, I'm Mehmet Akif.
          </h1>
          <p className="text-base sm:text-lg md:text-[28px] font-normal leading-[1.5] md:leading-[117%] md:mt-16 tracking-[-3%] md:w-[580px]">
            A senior-year design student trying to specialize in 3D modeling &
            texturing.
          </p>
        </div>
        <div className="flex justify-center md:justify-start mt-10 md:mt-20">
          <ArrowDown className="w-8 h-8 md:w-[33.61px] md:h-[38.04px] text-main-black" />
        </div>
      </div>
    </Transition>
  );
}
