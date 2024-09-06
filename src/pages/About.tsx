import { FaAngleRight, FaAngleDown, FaAngleUp } from "react-icons/fa6";
import aboutCake from "../images/about-cake - Copy.jfif";
import Star from "../components/Star";
import { CiHeart } from "react-icons/ci";
import Button from "../components/Button";
import SubSellers from "../components/SubSellers";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="w-[95%] my-0 mx-auto">
      <div className="flex my-2">
        <div className="flex gap-1 text-[#8B96A5]">
          <span>Home</span>
          <FaAngleRight />
        </div>
        <div className="flex gap-1 text-[#8B96A5]">
          <span>Category</span>
          <FaAngleRight />
        </div>
        <div className="flex gap-1 text-[#8B96A5]">
          <span>Flash Sales</span>
          <FaAngleRight />
        </div>
        <div className="flex gap-1 text-[#8B96A5]">
          <span>Lady M Cakes</span>
        </div>
      </div>
      <div className="w-[85%] my-0 mx-auto grid grid-cols-2 gap-4">
        <div>
          <img src={aboutCake} alt="cake" className="rounded-md" />
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[#3084A9] font-semibold">Lady M Confection</h4>
            <h3 className="text-[#1F252C] tracking-tighter font-bold">
              Strawberry Swirl Mile Crepe Cake
            </h3>
            <Star />
            <h3 className="text-[#1F252C] tracking-tighter font-bold">
              ¢600.00
            </h3>
          </div>
          <div>
            <p className="text-[#000000] font-bold tracking-tight">
              This cake is seriously GIANT! The skyscraping 20 Layer Chocolate
              Peanut Butter Cake features alternating layers of devils food cake
              and peanut butter mascarpone to satisfy anyone's sweet tooth. It's
              made with high-end Valrhona chocolate and filled with peanut
              butter cream, and it's the perfect ending to a luxurious and
              romantic meal. Pair it with peanut brittle for the full
              experience!
            </p>
            <p className="text-[#000000] font-bold tracking-tight">
              LAVO is a globally recognized destination for Italian cuisine,
              helmed by Chef Partner Ralph Scamardella, with iconic locations in
              New York, Las Vegas, San Diego, and Singapore.
            </p>
          </div>
          <div>
            <div className="flex border border-gray-400 rounded-md items-center">
              <div className="py-1 px-2">
                <span>Quantity</span>
                <span>1</span>
                <div className="flex flex-col">
                  <FaAngleUp className="text-gray-300" />
                  <FaAngleDown className="text-gray-300" />
                </div>
              </div>
              <div className="bg-[#3084A9] rounded-md text-center">
                <CiHeart className="text-white" />
              </div>
            </div>
            <div className="flex">
              <button className="border-none rounded-md bg-[#3084A9] text-white capitalize py-1 px-2">
                buy now
              </button>
              <Button className={"bg-[#C3E3F1] text-[#3084A9]"} />
            </div>
            {/* review section */}
            <div className="flex gap-2">
              <h3 className="font-bold text-[#1F252C] tracking-tight p-2 border-b-2 border-b-[#3084A9]">
                Description
              </h3>
              <h3 className="font-bold text-[#1F252C] tracking-tight">
                Review
              </h3>
            </div>
            {/* list reviews */}
            <div className="flex justify-between items center">
              <div>
                <span className="text-[#757C86] text-sm font-bold tracking-tight my-2">
                  More Details
                </span>
                <div>
                  <h4 className="text-sm text-[#1F252C] tracking-tight my-2.5">
                    This package serves 20 People and includes:
                  </h4>
                  <ul className="text-[#000000] tracking-tight font-normal">
                    <li>1 GIANT 20 Layer Vanilla Peanut Butter Cake</li>
                    <li>8 oz. Peanut Butter Mascarpone</li>
                    <li>8 oz. Peanut Brittle</li>
                    <li>
                      Each cake measures 10" in diameter and 6.5" high and
                      weighs 12 lbs!
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <span className="text-[#757C86] text-sm font-bold tracking-tight my-2">
                  More Details
                </span>
                <div>
                  <ul className="text-[#000000] tracking-tight font-normal">
                    <li>
                      Cake ships frozen with ice packs, may thaw in transit
                    </li>
                    <li>
                      Upon arrival remove packaging and place immediately in the
                      fridge, freezer, or allow to defrost at room temperature
                    </li>
                    <li>
                      May be stored in the refrigerator for up to 1 week, or
                      frozen for up to 1 month
                    </li>
                    <li>
                      To serve from frozen allow the cake to thaw in the fridge
                      for 1 day
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4">
          <h4 className="font-medium tracking-tight">Recommended for you</h4>
        </div>
        <div>
          <SubSellers />
          <SubSellers />
          <SubSellers />
          <SubSellers />
        </div>
        <Link
          to={"/"}
          className="border-2 border-[#3084A9] text-center block py-1 px-2 rounded-md my-2"
        >
          back to catalogue
        </Link>
      </div>
    </div>
  );
}
