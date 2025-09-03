"use client";
import React, { useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "lavado y corte",
    img: "/lavado_corte.png",
    services: [
      { name: "Corte básico", price: "20€" },
      { name: "Corte avanzado", price: "35€" },
    ],
  },
  {
    id: 2,
    name: "color",
    img: "/color.png",
    services: [
      { name: "Corte clásico", price: "15€" },
      { name: "Corte moderno", price: "25€" },
    ],
  },
  {
    id: 3,
    name: "mechas",
    img: "/mechas.png",
    services: [
      { name: "Tinte completo", price: "40€" },
      { name: "Mechas", price: "50€" },
    ],
  },
  {
    id: 4,
    name: "permanente",
    img: "/permanente.png",
    services: [
      { name: "Peinado diario", price: "18€" },
      { name: "Peinado de fiesta", price: "35€" },
    ],
  },
  {
    id: 5,
    name: "nutrición",
    img: "/nutricion.png",
    services: [
      { name: "Hidratación", price: "25€" },
      { name: "Keratina", price: "60€" },
    ],
  },
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<
    null | (typeof categories)[0]
  >(null);

  return (
    <section id="services" className="w-full my-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-h4 font-raleway text-gold font-bold text-center mb-8 p-4">
          SERVICIOS
        </h2>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-lg cursor-pointer"
              style={{
                filter: `
      drop-shadow(-32px 36px 28px rgba(252, 204, 208, 0.15))
      drop-shadow(0px 4px 20px rgba(252, 204, 208, 0.7))
    `,
              }}
              onClick={() => setSelectedCategory(cat)}
            >
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay rosa de base */}
                <div className="absolute inset-0 bg-[#FCCCD0]/50"></div>

                {/* Overlay negro encima */}
                <div className="absolute inset-0 bg-black/75"></div>

                {/* Texto centrado */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gold text-p1 font-lato underline hover:text-gold relative z-10">
                    {cat.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCategory && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center px-10 z-50"
          style={{
            boxShadow:
              "inset -4px -4px 10px #FCCCD0, inset 4px 4px 10px #FCCCD0",
          }}
          onClick={() => setSelectedCategory(null)} // cerrar al hacer click fuera
        >
          <div
            className="bg-white rounded-lg p-8 shadow-lg max-w-lg w-full relative"
            style={{
              boxShadow:
                "inset -4px -4px 10px #FCCCD0, inset 4px 4px 10px #FCCCD0",
            }}
            onClick={(e) => e.stopPropagation()} // evita cerrar al hacer click dentro
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className="absolute top-4  right-4 text-gold hover:text-black"
            >
              ✕
            </button>
            <h3 className="text-2xl text-gold font-raleway font-bold mb-4">
              {selectedCategory.name}
            </h3>
            <ul className="space-y-2">
              {selectedCategory.services.map((service, i) => (
                <li
                  key={i}
                  className="flex justify-between text-gold border-b pb-2"
                >
                  <span className="text-gold font-raleway">{service.name}</span>
                  <span className="text-gold font-raleway font-semibold">
                    {service.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
