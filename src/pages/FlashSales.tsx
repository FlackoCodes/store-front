import Contact from "../components/Contact";
import CTA from "../components/Sales/CTA";
import Header from "../components/Sales/Header";
import SideBar from "../components/Sales/SideBar";

export default function FlashSales() {
  return (
    <>
      <CTA />
      <Header />
      <div className="w-[95%] my-0 mx-auto grid grid-cols-[25%,75%]">
        <SideBar />
        <div className="mt-2 text-[24px]">goods!</div>
      </div>
      <div className="my-4">
        <Contact />
      </div>
    </>
  );
}
