import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import CTA from "../components/Sales/CTA";
import Header from "../components/Sales/Header";
import Products from "../components/Sales/Products";
import SideBar from "../components/Sales/SideBar";

export default function FlashSales() {
  return (
    <>
      <CTA />
      <Header />
      <div className="w-[95%] my-0 mx-auto grid grid-cols-2 md:grid-cols-[18%,82%]">
        <SideBar />
        <div className="mb-2">
          <Products />
          <Products />
          <Products />
          <Products />
        </div>
      </div>
      <div className="text-center my-8">
        <Link
          to={"/"}
          className="border text-sm rounded-md py-1 px-2 text-[#3084A9] border-[#3084A9]"
        >
          View More Goodies
        </Link>
      </div>
      <div className="my-4">
        <Contact />
      </div>
    </>
  );
}
