import HeroSection from "@/components/design/hero-section";
import Projet from "@/components/design/projet-component";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projet
        titre="Goblin conception digital sculpture with human-like skin. Learned a lot of quick tips and look development."
        content="Sculpted in ZBrush, Retopologized and UVs done in Maya,Textured in Mari, Rendered using Arnold."
        nombre="01"
        link="More shots from this projet"
        logo={true}
      />
      <Projet
        titre="Subsurface weight specular roughness, diffuse maps generated with the procedure and manual techniques."
        nombre="02"
        link="See case study"
        logo={true}
      />
      <Projet
        titre="Experimental creature modeling for school project."
        nombre="03"
        link="Project WIP"
      />
    </>
  );
}
