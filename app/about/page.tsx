import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      {/* Container principal */}
      <div className="flex flex-col md:max-h-[440px]  sm:flex-row justify-between mt-28 px-4 sm:px-4">
        {/* Section texte */}
        <div className="flex flex-col gap-y-8  mb-8 sm:mb-0 w-full sm:w-[515px]">
          <h1 className="text-[50px] sm:text-[40px] text-main-black font-medium leading-[97.2%] tracking-[-3%] mb-8 sm:mb-4">
            Hi, I'm Mehmet Akif Karasu, 3D artist & sculptor.
          </h1>
          <div className="flex flex-col gap-y-8 md:gap-y-32 text-[25px] sm:text-[20px] text-main-gray font-normal w-full">
            <p className="leading-[117%] tracking-[-3%]">
              My work is mainly focused on <br /> third-dimension modeling,
              texturing and rendering. I like exploring creatures with a touch
              of dark surrealism for characters and production.
            </p>
            <p className="leading-[117%] tracking-[-3%] text-[26px]">
              Now, I am an interactive media design student in
              Istanbul—currently freelancing and seeking internship
              opportunities.
            </p>
          </div>
        </div>

        {/* Image, positionnée après le texte sur mobile */}
        <div className="flex justify-center sm:w-[421px] w-full mb-8 sm:mb-0 sm:ml-8">
          <Image
            src="/Profile Photo.png"
            alt="Profile Photo"
            className="w-full bg-main-gray rounded-lg object-cover"
            width={421}
            height={421}
          />
        </div>
      </div>

      {/* Logic pour les logiciels principaux */}
      <div className="mt-36 max-h-[216px] my-auto text-main-black px-4">
        <div className="flex flex-col gap-y-6 w-full sm:w-[633px]">
          <div className="flex justify-between gap-x-3 md:gap-x-0">
            <p className="underline md:no-underline underline-offset-2 md:border-b h-fit border-black inter font-medium text-[18px] sm:text-[20px] leading-[121.5%] tracking-[-3%]">
              Main Software
            </p>
            <div className="flex flex-col text-body inter font-normal gap-y-6">
              <p className="leading-[121.5%] tracking-[-3%] text-sm sm:text-base">
                Pixologic ZBrush, Autodesk Maya, The Foundry Mari,
                <br />
                Arnold Renderer, Blender, Forger
              </p>
              <p className="leading-[121.5%] tracking-[-3%] text-sm sm:text-base">
                Adobe CC, Figma, Ableton
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-x-[90px] mt-6 sm:mt-0">
            <p className="underline md:no-underline underline-offset-2 md:border-b border-black h-fit inter font-medium text-[18px] sm:text-[20px] leading-[121.5%] tracking-[-3%]">
              Main Skills
            </p>
            <p className="text-body inter font-normal leading-[121.5%] tracking-[-3%] max-h-[44px] my-auto w-full sm:w-[421px] text-sm sm:text-base">
              Organic and Polygonal Modeling, UV Layout, Texturing, Retopology,
              Illustration, Sound Design
            </p>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="h-[166px] mt-20 max-w-[1120px] max-h-[2px] m-auto border-b-[3.5px] border-[#181717] mx-4" />

      <div className="pt-16 flex flex-col sm:flex-row gap-y-6 sm:gap-x-72 text-main-black px-4 sm:px-8">
        <p className="w-full sm:w-[347px] text-[22px] sm:text-[28px] font-normal leading-[117%] tracking-[-3%]">
          I am thrilled to answer to your next project
          <ArrowRight className="inline ml-4 sm:ml-6" />
        </p>
        <div className="flex flex-col gap-y-6 w-full sm:w-auto">
          <p className="text-[20px] sm:text-[26px] font-normal leading-[117%] tracking-[-3%] md:max-w-[355px] md:mx-auto">
            makifkrarasu@outlook.com
          </p>
          <p className="text-body inter font-normal leading-[121.5%] tracking-[-3%]">
            View Resume
          </p>
        </div>
      </div>
    </>
  );
}
