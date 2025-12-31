import { FaAngleRight, FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Star from "../components/Star";
import { CiHeart } from "react-icons/ci";
import Button from "../components/Button";
import SubSellers from "../components/SubSellers";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
// import { vendorOne } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../store/cartSlice/cartSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ourVendors } from "../data";

export default function About() {
  const { vendorId } = useParams();
  const vendorData = ourVendors[vendorId as keyof typeof ourVendors];
  const vendorname = vendorData ? vendorData[0].name : "Vendor";

  const quantity = useSelector((state: RootState) => state.cart.quantity);
  const dispatch = useDispatch();

  const addUpQuantity = () => {
    dispatch(increaseQuantity(1));
  };
  const reduceQuantity = () => {
    dispatch(decreaseQuantity(1));
  };

  const disableBtn = () => quantity === 0;

  useEffect(() => {
    // console.log('Quantity has changed:', quantity);
  }, [quantity]);

  return (
    <div className="w-[96%] mx-auto">
      <div className="flex my-8 space-x-1 md:space-x-2 text-[#8B96A5] items-center">
        <div className="flex items-center md:space-x-0.5">
          <Link to={"/"} className="text-sm md:text-base">
            Home
          </Link>
          <FaAngleRight />
        </div>
        <div className="flex items-center md:space-x-0.5">
          <span className="text-sm md:text-base">Category</span>
          <FaAngleRight />
        </div>
        <div className="flex items-center md:space-x-0.5">
          <Link to={"/flash-sales"} className="text-sm md:text-base">
            Flash Sales
          </Link>
          <FaAngleRight />
        </div>
        <div className="flex items-center">
          <span className="text-sm md:text-base">{vendorname}</span>
        </div>
      </div>

      <div className="w-[93%] mx-auto  flex flex-col md:flex-row gap-4">
        {vendorData?.map((data, index) => (
          <div className="flex flex-col lg:flex-row gap-4" key={index}>
            <div className="mr-8">
              <img
                src={data.image}
                alt="cake"
                className="w-[350px] h-[350px] md:w-[520px] md:h-[500px] rounded-md"
              />
            </div>
            <div className="flex-1 flex flex-col gap-4 mr-8">
              <div className="flex flex-col gap-2">
                <h4 className="text-[#3084A9] font-semibold uppercase">
                  {data.name}
                </h4>
                <h3 className="text-[#1F252C] font-bold text-xl">
                  {data.description}
                </h3>
                <div className="flex items-center gap-0.5">
                  <Star className={""} />
                  <span>4.6</span>
                </div>
                <h3 className="text-[#1F252C] font-bold text-xl">
                  ¢{data.price}
                </h3>
              </div>
              <div>
                <p className="text-[#000000] font-normal tracking-tight mb-2">
                  {data.about}
                </p>
                <p className="text-[#000000] font-normal tracking-tight">
                  {data.sub}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center py-1 px-2 justify-between w-fit border border-gray-300 rounded-md">
                    <span className="mr-1 text-[#3084A9] font-normal">
                      Quantity
                    </span>
                    <div className="flex items-center">
                      <span className="text-[#676D76] font-normal">
                        {quantity}
                      </span>
                      <div className="flex flex-col ml-2">
                        <FaAngleUp
                          className="text-[#676D76] w-[11px] h-[11px] cursor-pointer"
                          onClick={addUpQuantity}
                        />
                        <FaAngleDown
                          className="text-[#676D76] w-[11px] h-[11px] cursor-pointer"
                          onClick={reduceQuantity}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#3084A9] rounded-md p-2.5">
                    <CiHeart className="text-white" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    className="border-none rounded-md bg-[#3084A9] text-white py-1 px-2 md:py-2 md:px-4 capitalize"
                    disabled={disableBtn()}
                  >
                    Buy Now
                  </button>
                  <Button
                    className="bg-[#C3E3F1] text-[#3084A9] px-8"
                    product={{ ...data, quantity: quantity }}
                    disabled={disableBtn}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[93%] mx-auto mt-8">
        <div className="flex  mb-4">
          <h3 className="font-bold text-[#1F252C] tracking-tight p-2 border-b-2 border-[#3084A9]">
            Description
          </h3>
          <h3 className="font-bold text-[#1F252C] tracking-tight p-2">
            Review
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
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

      <div className="mb-4 w-[93%] mt-4 my-0 mx-auto">
        <h4 className="font-medium tracking-tight text-[#1F252C]">
          Recommended for you
        </h4>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-4 w-[93%] my-0 mx-auto">
        <SubSellers />
        <SubSellers />
        <SubSellers />
        <SubSellers />
      </div>

      <div className="my-6">
        <Link
          to={"/"}
          className="block text-center py-2 px-4 border-2 border-[#3084A9] text-[#3084A9] rounded-md my-0 mx-auto  w-fit"
        >
          Back to Catalogue
        </Link>
      </div>

      <div className="my-6">
        <Contact />
      </div>
    </div>
  );
}
