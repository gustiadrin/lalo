"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Nani",
    text: "I visited about two weeks ago for a quick haircut and had a great experience. The salon is beautiful, clean, and well-maintained. Lalo was incredibly kind and provided excellent service. Highly recommended!",
    img: "/nani.png",
  },
  {
    id: 2,
    name: "Lora",
    text: "Muy profesional . El peluquero Lalo te trata con paciencia y te cuida muy bien el cabello ,eso quiere decir que le importa mucho no quemarte el pelo y da buenos consejos ,que color deberías ponerte y como cuidarte el cabello. GRACIAS !",
    img: "/lora.png",
  },
  {
    id: 3,
    name: "Anne Liebau",
    text: "Ich bin begeistert! Lalo hat mir meine Traumfrisur gezaubert! Nebenher hat er mich noch mit Tipps und Tricks zu meinen Haaren versorgt. Auch meinem Mann hat er absolut professionell die Haare geschnitten, sieht super aus. Vielen Dank!",
    img: "/anne.png",
  },
  {
    id: 4,
    name: "Yogur de fresa",
    text: "Posiblemente el mejor peluquero de toda torrevieja, un profesional de pies a cabeza, un salón precioso y limpio. Enhorabuena!",
    img: "/yogur.png",
  },
  {
    id: 5,
    name: "Iveta Šindelářová",
    text: "Navštívila jsem tento salón a jsem z práce tohoto skvělého kadeřníka nadšená. Příjemné prostředí ochota,prostě veliká spokojenost s úpravou vlasů, určitě se vrátím znovu a znovu.🙏🏻",
    img: "/iveta.png",
  },
];

export default function Reviews() {
  const [paused, setPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    setPaused(true);
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = x - startX.current;
    if (scrollRef.current)
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setPaused(false);
  };

  return (
    <section
      id="reviews"
      className="w-full mt-14 mb-4 overflow-hidden scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-h4 font-raleway text-gold font-bold text-center mb-4 p-4">
          NUESTRAS CLIENTAS DICEN...
        </h2>

        {/* Contenedor scrollable */}
        <div
          ref={scrollRef}
          className="relative overflow-x-auto overflow-y-hidden no-scrollbar touch-scroll cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            className={`flex w-[max-content] pb-6 pt-2 ${
              paused ? "" : "animate-marquee"
            }`}
          >
            {/* Duplicamos las reseñas para loop infinito */}
            {reviews.concat(reviews).map((review, index) => (
              <div
                key={review.id + "-" + index}
                className="bg-white p-6 rounded-xl min-w-[300px] max-w-[350px] flex flex-col mr-6"
                style={{
                  boxShadow:
                    " -32px 36px 24px rgba(252, 204, 208, 0.04), 0px 2px 16px rgba(252, 204, 208, 0.5)",
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                    <Image
                      src={review.img}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-lato text-gold text-[16px]">
                    {review.name}
                  </p>
                </div>
                <p className="font-lato text-gold text-[12px]">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 50s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .touch-scroll {
          -webkit-overflow-scrolling: touch;
        }
        .cursor-grab {
          cursor: grab;
        }
        .cursor-grab:active {
          cursor: grabbing;
        }
      `}</style>
    </section>
  );
}
