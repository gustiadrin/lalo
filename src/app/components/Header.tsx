"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";
import { Home, User, Star, Scissors, Clock } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 bg-white shadow-md h-16 md:h-20 lg:h-24 py-4"
        style={{
          boxShadow: "inset -4px -4px 10px #FCCCD0, inset 4px 4px 10px #FCCCD0",
        }}
      >
        <div className="max-w-6xl mx-auto relative top-1/2 -translate-y-1/2 flex justify-between items-center p-4 h-24">
          {/* <div className="relative w-24 h-16 left-[-20px] flex-shrink-0">
            <Link href={"#hero"}>
              <Image
                src="/logotipo.png"
                alt="logotipo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </Link>
          </div> */}

          {/* Menú de escritorio */}
          <nav className="hidden lg:flex space-x-6">
            <a
              href="#hero"
              className="font-lato text-gold text-p1 hover:text-pink"
            >
              Inicio
            </a>
            <a
              href="#about"
              className="font-lato text-gold text-p1 hover:text-pink"
            >
              Sobre mí
            </a>
            <a
              href="#reviews"
              className="font-lato text-gold text-p1 hover:text-pink"
            >
              Reseñas
            </a>
            <a
              href="#services"
              className="font-lato text-gold text-p1 hover:text-pink"
            >
              Servicios
            </a>
            <a
              href="#schedule"
              className="font-lato text-gold text-p1 hover:text-pink"
            >
              Horario
            </a>
          </nav>

          {/* Botón hamburguesa */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className=" text-gold focus:outline-none"
            >
              {
                <svg
                  className="w-6 h-6 md:h-8 md:w-8 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              }
            </button>
          </div>
          <div className="relative w-24 h-16 md:w-32 md:h-24 lg:w-36 lg:h-28 right-[-15px] flex-shrink-0">
            <Link href={"#hero"}>
              <Image
                src="/logotipo.png"
                alt="logotipo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </Link>
          </div>
        </div>

        {/* Menú móvil con overlay */}
        <div
          className={`lg:hidden fixed inset-0 z-40 bg-gradient-to-br from-black/50 to-[#FCCCD0]/50 transition-opacity duration-300
    ${
      menuOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
          onClick={() => setMenuOpen(false)}
        >
          {/* Menú deslizable */}
          <div
            className={`absolute top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col space-y-4
            transform transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{
              boxShadow:
                "inset -4px -4px 10px #FCCCD0, inset 4px 4px 10px #FCCCD0",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-4 text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6 md:h-8 md:w-8 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <a
              href="#hero"
              onClick={() => setMenuOpen(false)}
              className="font-lato items-center gap-2 flex text-p3 md:text-p1 text-gold hover:text-indigo-500"
            >
              <Home className="w-4 h-4 md:w-5 md:h-5" />
              Inicio
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="font-lato items-center gap-2 flex text-p3 md:text-p1 text-gold hover:text-indigo-500"
            >
              <User className="w-4 h-4 md:w-5 md:h-5" /> Sobre mí
            </a>
            <a
              href="#reviews"
              onClick={() => setMenuOpen(false)}
              className="font-lato items-center gap-2 text-p3 md:text-p1 flex text-gold hover:text-indigo-500"
            >
              <Star className="w-4 h-4 md:w-5 md:h-5" /> Reseñas
            </a>
            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="font-lato items-center gap-2 flex text-p3 md:text-p1 text-gold hover:text-indigo-500"
            >
              <Scissors className="w-4 h-4 md:w-5 md:h-5" /> Nuestros servicios
            </a>
            <a
              href="#schedule"
              onClick={() => setMenuOpen(false)}
              className="font-lato items-center gap-2 flex text-p3 md:text-p1 text-gold hover:text-indigo-500"
            >
              <Clock className="w-4 h-4 md:w-5 md:h-5" /> Horario
            </a>
          </div>
        </div>
      </header>
      <WhatsAppButton menuOpen={menuOpen} />
    </>
  );
}
