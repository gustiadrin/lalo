"use client";
import Link from "next/link";
import Image from "next/image";

interface WhatsAppButtonProps {
  menuOpen: boolean;
}

export default function WhatsAppButton({ menuOpen }: WhatsAppButtonProps) {
  return (
    <Link
      href="https://wa.me/34666909625"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-4 right-4 2xl:right-[17%] w-12 h-12 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
        menuOpen ? "z-10" : "z-50"
      }`}
    >
      {/* <Image src="/whatsapp.svg" alt="WhatsApp" width={28} height={28} /> */}
      <div className="relative w-6 h-6 md:w-10 md:h-10">
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp"
          fill
          className="object-contain"
        />
      </div>
    </Link>
  );
}
