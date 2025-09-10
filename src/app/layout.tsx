import type { Metadata } from "next";
import { Geist, Geist_Mono, Allura, Raleway, Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400", // Allura solo tiene un peso
  variable: "--font-allura", // la conectamos a una variable CSS
});

const raleway = Raleway({
  subsets: ["latin"],
  // weight: "700", // Allura solo tiene un peso
  variable: "--font-raleway", // la conectamos a una variable CSS
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Allura solo tiene un peso
  variable: "--font-lato", // la conectamos a una variable CSS
});

export const metadata: Metadata = {
  title: "Lalo",
  description: "Hair and Beauty Salon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${allura.variable} ${raleway.variable} ${lato.variable} 2xl:flex antialiased`}
      >
        {/* Franja izquierda */}
        <div className="hidden 2xl:block 2xl:w-1/6 2xl:min-h-screen 2xl:bg-white"></div>

        {/* Contenido principal */}
        <div className="flex-1 2xl:w-3/5">
          <Header />
          {children}
        </div>

        {/* Franja derecha */}
        <div className="hidden 2xl:block 2xl:w-1/6 2xl:min-h-screen 2xl:bg-white"></div>
      </body>
    </html>
  );
}
