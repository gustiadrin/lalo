"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full bg-white my-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Recuadro */}
        <div
          className="rounded-md md:rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:gap-10 items-center md:mx-4"
          style={{
            boxShadow: `inset -32px 36px 24px rgba(252, 204, 208, 0.04), inset 0px 2px 16px rgba(252, 204, 208, 0.5)`,
          }}
        >
          {/* Imagen */}
          <div className="relative w-full h-64 md:w-1/3 md:h-[500px] flex-shrink-0">
            <Image
              src="/lalo.png"
              alt="Sobre nosotros"
              fill
              className="object-contain md:object-cover"
              priority
            />
          </div>

          {/* Texto */}
          <div className="mt-6 md:mt-0 md:w-2/3">
            <p className="text-center md:text-left text-h2 font-bold font-lato text-gold mb-4">
              Lalo
            </p>
            <p className="text-p2 md:text-p1 text-gold font-lato leading-relaxed">
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

// import Image from "next/image";

// export default function About() {
//   return (
//     <section id="about" className="w-full bg-white my-12 scroll-mt-20">
//       <div className="max-w-4xl mx-auto px-4 ">
//         {/* Recuadro */}
//         <div
//           className=" rounded-md p-8 md:flex md:gap-8 md:items-center"
//           // style={{
//           //   boxShadow:
//           //     "inset -4px -4px 10px #FCCCD0, inset 4px 4px 10px #FCCCD0",
//           // }}
//           style={{
//             boxShadow: `inset -32px 36px 24px rgba(252, 204, 208, 0.04), inset 0px 2px 16px rgba(252, 204, 208, 0.5)`,
//           }}
//         >
//           {/* Imagen */}
//           <div className="relative w-[300px] h-[420px] md:w-[400px] md:h-[550px]">
//             <Image
//               src="/lalo.png" // cambia por tu imagen
//               alt="Sobre nosotros"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>

//           {/* Texto */}
//           <div className="">
//             <p className="p-6 text-h2 text-center md:text-start font-bold font-lato text-gold ">
//               Lalo
//             </p>
//             <p className="text-p2 md:text-p1 text-gold font-lato md:p-7  leading-relaxed">
//               En LALO Hair and Beauty Salon creemos en resaltar la belleza
//               natural de cada persona. Nuestro equipo de profesionales está
//               dedicado a brindarte una experiencia única, combinando estilo,
//               creatividad y cuidado en cada detalle.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
