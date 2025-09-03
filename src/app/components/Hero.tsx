"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[550px] w-full overflow-hidden scroll-mt-20"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-[#FCCCD0]/15"></div>

      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="mb-0 p-0 leading-none font-raleway text-gold text-[100px] md:text-6xl text-center px-4">
          LALO
        </h1>
        <h2 className="mt-0 p-0 leading-none font-allura text-gold text-[48px] md:text-6xl text-center px-4">
          hair and beauty salon
        </h2>
      </div>
    </section>
  );
}
