"use client";
import React, { useState, useRef, useEffect } from "react";
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
    text: "Muy profesional. El peluquero Lalo te trata con paciencia y te cuida muy bien el cabello. GRACIAS!",
    img: "/lora.png",
  },
  {
    id: 3,
    name: "Anne Liebau",
    text: "Ich bin begeistert! Lalo hat mir meine Traumfrisur gezaubert! Auch meinem Mann hat er absolut professionell die Haare geschnitten.",
    img: "/anne.png",
  },
  {
    id: 4,
    name: "Yogur de fresa",
    text: "Posiblemente el mejor peluquero de toda Torrevieja, un profesional de pies a cabeza, un salón precioso y limpio.",
    img: "/yogur.png",
  },
  {
    id: 5,
    name: "Iveta Šindelářová",
    text: "Navštívila jsem tento salón a jsem z práce tohoto skvělého kadeřníka nadšená. Určitě se vrátím znovu a znovu. 🙏🏻",
    img: "/iveta.png",
  },
];

export default function Reviews() {
  const [paused, setPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Loop automático
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        // Loop infinito: cuando llegamos al final, regresamos al inicio
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, [paused]);

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
      <h2 className="text-h4 md:text-h3 font-raleway text-gold font-bold text-center mb-4 p-4">
        NUESTRAS CLIENTAS DICEN...
      </h2>

      {/* Contenedor scrollable hasta los bordes de las franjas */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden no-scrollbar touch-scroll cursor-grab p-4 2xl:p-[5%]"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* Duplicamos las reseñas para loop infinito */}
        {reviews.concat(reviews).map((review, index) => (
          <div
            key={review.id + "-" + index}
            className="bg-white p-6 rounded-xl min-w-[300px] max-w-[350px] md:max-w-[400px] flex flex-col mr-6 flex-shrink-0"
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
              <p className="font-lato text-gold text-p2 md:text-p3">
                {review.name}
              </p>
            </div>
            <p className="font-lato text-gold text-[14px] md:text-p2">
              {review.text}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
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
