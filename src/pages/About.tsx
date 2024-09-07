//
import { FaAngleRight, FaAngleDown, FaAngleUp } from "react-icons/fa6";
import aboutCake from "../images/about-cake - Copy.jfif";
import Star from "../components/Star";
import { CiHeart } from "react-icons/ci";
import Button from "../components/Button";
import SubSellers from "../components/SubSellers";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";

export default function About() {
  return (
    <div className="w-[95%] mx-auto">
      <div className="flex my-8 space-x-2 text-[#8B96A5] items-center">
        <div className="flex items-center space-x-0.5">
          <span>Home</span>
          <FaAngleRight />
        </div>
        <div className="flex items-center space-x-0.5">
          <span>Category</span>
          <FaAngleRight />
        </div>
        <div className="flex items-center space-x-0.5">
          <span>Flash Sales</span>
          <FaAngleRight />
        </div>
        <div className="flex items-center">
          <span>Lady M Cakes</span>
        </div>
      </div>

      <div className="w-[85%] mx-auto flex gap-4">
        <div className="flex-1">
          <img
            src={aboutCake}
            alt="cake"
            className="w-[480px] h-[500px] rounded-md"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 mr-5">
          <div className="flex flex-col gap-2">
            <h4 className="text-[#3084A9] font-semibold">Lady M Confection</h4>
            <h3 className="text-[#1F252C] font-bold text-xl">
              Strawberry Swirl Mile Crepe Cake
            </h3>
            <div className="flex items-center gap-0.5">
              <Star />
              <span>4.6</span>
            </div>
            <h3 className="text-[#1F252C] font-bold text-xl">¢600.00</h3>
          </div>
          <div>
            <p className="text-[#000000] font-normal tracking-tight mb-2">
              This cake is seriously GIANT! The skyscraping 20 Layer Chocolate
              Peanut Butter Cake features alternating layers of devil's food
              cake and peanut butter mascarpone to satisfy anyone's sweet tooth.
              It's made with high-end Valrhona chocolate and filled with peanut
              butter cream, and it's the perfect ending to a luxurious and
              romantic meal. Pair it with peanut brittle for the full
              experience!
            </p>
            <p className="text-[#000000] font-normal tracking-tight">
              LAVO is a globally recognized destination for Italian cuisine,
              helmed by Chef Partner Ralph Scamardella, with iconic locations in
              New York, Las Vegas, San Diego, and Singapore.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center py-1 px-2 justify-between w-fit border border-gray-300 rounded-md">
                <span>Quantity</span>
                <div className="flex items-center">
                  <span>1</span>
                  <div className="flex flex-col ml-2">
                    <FaAngleUp className="text-gray-300 cursor-pointer" />
                    <FaAngleDown className="text-gray-300 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="bg-[#3084A9] rounded-md p-2.5">
                <CiHeart className="text-white" />
              </div>
            </div>
            <div className="flex gap-4">
              <button className="border-none rounded-md bg-[#3084A9] text-white py-2 px-4 capitalize">
                Buy Now
              </button>
              <Button className="bg-[#C3E3F1] text-[#3084A9] px-8" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[85%] mx-auto mt-8">
        <div className="flex  mb-4">
          <h3 className="font-bold text-[#1F252C] tracking-tight p-2 border-b-2 border-[#3084A9]">
            Description
          </h3>
          <h3 className="font-bold text-[#1F252C] tracking-tight p-2">
            Review
          </h3>
        </div>
        <div className="flex gap-8">
          <div className="flex-1">
            <span className="text-[#757C86] text-sm font-bold tracking-tight mb-2">
              More Details
            </span>
            <div>
              <h4 className="text-sm text-[#1F252C] tracking-tight mb-2">
                This package serves 20 People and includes:
              </h4>
              <ul className="text-[#000000] tracking-tight font-normal list-disc ml-4">
                <li>1 GIANT 20 Layer Vanilla Peanut Butter Cake</li>
                <li>8 oz. Peanut Butter Mascarpone</li>
                <li>8 oz. Peanut Brittle</li>
                <li>
                  Each cake measures 10" in diameter and 6.5" high and weighs 12
                  lbs!
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <span className="text-[#757C86] text-sm font-bold tracking-tight mb-2">
              Storage Information
            </span>
            <ul className="text-[#000000] tracking-tight font-normal list-disc ml-4">
              <li>Cake ships frozen with ice packs, may thaw in transit</li>
              <li>
                Upon arrival, remove packaging and place immediately in the
                fridge, freezer, or allow to defrost at room temperature
              </li>
              <li>
                May be stored in the refrigerator for up to 1 week, or frozen
                for up to 1 month
              </li>
              <li>
                To serve from frozen, allow the cake to thaw in the fridge for 1
                day
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-4 text-center">
        <h4 className="font-medium tracking-tight text-[#1F252C] text-start">
          Recommended for you
        </h4>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-4 w-[85%] my-0 mx-auto">
        <SubSellers />
        <SubSellers />
        <SubSellers />
        <SubSellers />
      </div>

      <div className="my-6">
        <Contact />
      </div>

      <div className="my-6">
        <Link
          to={"/"}
          className="block text-center py-2 px-4 border-2 border-[#3084A9] text-[#3084A9] rounded-md my-0 mx-auto  w-fit"
        >
          Back to Catalogue
        </Link>
      </div>
    </div>
  );
}
