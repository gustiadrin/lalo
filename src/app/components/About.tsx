import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full bg-white my-12 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Recuadro */}
        <div
          className=" rounded-md p-8"
          // style={{
          //   boxShadow:
          //     "inset -4px -4px 10px #FCCCD0, inset 4px 4px 10px #FCCCD0",
          // }}
          style={{
            boxShadow: `inset -32px 36px 24px rgba(252, 204, 208, 0.04), inset 0px 2px 16px rgba(252, 204, 208, 0.5)`,
          }}
        >
          {/* Imagen */}
          <div className="relative w-full h-[400px] ">
            <Image
              src="/lalo.png" // cambia por tu imagen
              alt="Sobre nosotros"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Texto */}
          <div className="">
            <p className="p-6 text-h2 text-center font-bold font-lato text-gold ">
              Lalo
            </p>
            <p className="text-p2 text-gold font-lato leading-relaxed">
              En LALO Hair and Beauty Salon creemos en resaltar la belleza
              natural de cada persona. Nuestro equipo de profesionales está
              dedicado a brindarte una experiencia única, combinando estilo,
              creatividad y cuidado en cada detalle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
