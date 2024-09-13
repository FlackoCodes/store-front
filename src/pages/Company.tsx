import CTA from "../components/AboutUs/CTA";
import Founder from "../components/AboutUs/Founder";
import OurServices from "../components/AboutUs/OurServices";
import Primal from "../components/AboutUs/Primal";
import Team from "../components/AboutUs/Team";
import Contact from "../components/Contact";

export default function Company() {
  return (
    <>
      <CTA />
      <Primal />
      <OurServices />
      <Founder />
      <Team />
      <Contact />
    </>
  );
}
