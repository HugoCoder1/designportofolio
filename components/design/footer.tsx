import React from "react";

export default function Footer() {
  const texte = "Mehmet Akif Karasu -- 2020";
  const texteModifie = texte.replace(/--/g, "—");

  return (
    <footer className="mt-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-6">
        {/* Texte de copyright */}
        <a
          href=""
          className="text-main-secondary text-center sm:text-left leading-[120%] tracking-[-3%] mb-4 sm:mb-0"
        >
          {texteModifie}
        </a>

        {/* Liens sociaux */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-main-black items-center sm:items-center">
          <a href="" className="leading-[120%] tracking-[-3%]">
            Arstation
          </a>
          <a href="" className="leading-[120%] tracking-[-3%]">
            Linkedin
          </a>
          <a href="" className="leading-[120%] tracking-[-3%]">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
