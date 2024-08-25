import Categories from "../components/Categories";
import Charts from "../components/Charts";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import Promotions from "../components/Promotions";
import TopSellers from "../components/TopSellers";

export default function Home() {
  return <>
  <CTA />
  <Charts />
  <TopSellers />
  <Categories />
  <Promotions />
  <Contact />
  </>;
}
