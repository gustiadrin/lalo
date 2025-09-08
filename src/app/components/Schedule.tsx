import React from "react";

export default function Schedule() {
  return (
    <section id="schedule" className="max-w-4xl mx-auto px-6 py-12">
      {/* Horario */}
      <div className="mb-12">
        <h2 className="text-h4 font-raleway font-bold text-center text-gold mb-8">
          HORARIO
        </h2>
        <div className="grid grid-cols-[auto_auto] gap-x-6 md:gap-x-20 gap-y-3 text-lg justify-center">
          <p className="text-[16px] md:text-p1 font-lato text-gold">Lunes</p>
          <p className="text-[16px] md:text-p1  font-lato text-gold">Cerrado</p>

          <p className="text-[16px] md:text-p1  font-lato text-gold">Martes</p>
          <p className="text-[16px] md:text-p1  font-lato text-gold">
            10:30 - 19:30
          </p>

          <p className="text-[16px] md:text-p1  font-lato text-gold">
            Miércoles
          </p>
          <p className="text-[16px] md:text-p1  font-lato text-gold">
            10:00 - 19:30
          </p>

          <p className="text-[16px] md:text-p1  font-lato text-gold">Jueves</p>
          <p className="text-[16px] md:text-p1  font-lato text-gold">
            10:00 - 19:30
          </p>

          <p className="text-[16px] md:text-p1  font-lato text-gold">Viernes</p>
          <p className="text-[16px] md:text-p1  font-lato text-gold">
            10:00 - 19:30
          </p>

          <p className="text-[16px] md:text-p1  font-lato text-gold">Sábado</p>
          <p className="text-[16px] md:text-p1  font-lato text-gold">
            10:00 - 14:30
          </p>

          <p className="text-[16px] md:text-p1  font-lato text-gold">Domingo</p>
          <p className="text-[16px] md:text-p1  font-lato text-gold">Cerrado</p>
        </div>
      </div>

      {/* Dónde estamos */}
      <div>
        <h2 className="text-h4 font-raleway font-bold text-center text-gold mb-8">
          DÓNDE ESTAMOS
        </h2>

        <div className="w-full px-6">
          <iframe
            src="https://www.google.com/maps?q=37.9767741,-0.6838203&z=16&output=embed"
            className="w-full h-[300px] border-0 rounded-md"
            style={{
              boxShadow: `-32px 36px 24px rgba(252, 204, 208, 0.04), 0px 2px 16px rgba(252, 204, 208, 0.5)`,
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
