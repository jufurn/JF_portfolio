import { Competance } from "@/components/Competance";
import { Contact } from "@/components/Contact";
import { Etudes } from "@/components/Etudes";
import Hero from "@/components/Hero";
import { Projets } from "@/components/Projets";

export default function Home() {
  return (
    <>
      <Hero />
      <Competance />
      <Etudes />
      <Projets />
      <Contact />
    </>
  );
}
