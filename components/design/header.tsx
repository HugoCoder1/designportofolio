"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Référence pour le menu

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Ferme le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="flex justify-between items-center px-4 py-4">
      {/* Logo */}
      <Link href="/" className="text-main-black font-bold text-xl md:text-2xl">
        ma.
      </Link>

      {/* Wrapper pour l'icône hamburger et le menu */}
      <div ref={menuRef} className="relative z-20">
        {/* Hamburger Icon for Mobile */}
        <button
          className="block md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <nav
          id="mobile-menu"
          className={`fixed top-0 left-0 h-full w-2/3 bg-gray-50 shadow-lg transform transition-transform duration-300 z-10 md:static md:w-auto md:h-auto md:bg-transparent md:shadow-none md:translate-x-0 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col p-6 gap-4 font-medium md:flex-row md:gap-6 md:p-0">
            <li>
              <Link
                href="#"
                className="hover:border-b-2 hover:border-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:border-b-2 hover:border-black ${
                  pathname === "/about" ? "border-b-2 border-black" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:border-b-2 hover:border-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Playground
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:border-b-2 hover:border-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
