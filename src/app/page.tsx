import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Schedule from "./components/Schedule";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Reviews></Reviews>
      <Services></Services>
      <Schedule></Schedule>
    </>
  );
}
