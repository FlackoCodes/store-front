import { FaArrowLeftLong, FaArrowRight, FaCediSign } from "react-icons/fa6";
// import cakeProm from "../images/cake3.jfif";
import Star from "./Star";
import Button from "./Button";
import { promotionData } from "../data";

const { id } = promotionData[0]
console.log('id', id);

export default function Promotions() {
  return (
    <div className="w-[95%] my-0 mx-auto mb-5">
      <div className="flex justify-between my-4">
        <div>
          <h1 className="text-[#1F252C] font-bold text-lg">
            Hot<span className="text-[#3084A9] ml-1">Promotions</span>
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <FaArrowLeftLong className="bg-white text-slate-500 rounded-full shadow-md p-1 w-5 h-5 cursor-pointer" />
          <FaArrowRight className="bg-[#3084A9] text-white rounded-full p-1 shadow-md w-5 h-5 cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {promotionData.map((product) => (
          <div className="relative" key={product.id}>
            <img
              src={product.image}
              alt="cake image"
              className="rounded-sm w-[350px] h-[400px] md:w-[679px] md:h-[640px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="grid grid-cols-4 gap-2 md:gap-4 w-full max-w-[280px] md:max-w-xs">
                <div className="bg-white p-2 rounded-md flex flex-col items-center text-center">
                  <h4 className="text-sm md:text-lg font-semibold text-[#3084A9]">
                    Days
                  </h4>
                  <p className="text-xl text-black">01</p>
                </div>
                <div className="bg-white p-2 rounded-md flex flex-col items-center text-center">
                  <h4 className="text-sm md:text-lg font-semibold text-[#3084A9]">
                    Hours
                  </h4>
                  <p className="text-xl text-black">12</p>
                </div>
                <div className="bg-white p-2 rounded-md flex flex-col items-center text-center">
                  <h4 className="text-sm md:text-lg font-semibold text-[#3084A9]">
                    Minutes
                  </h4>
                  <p className="text-xl text-black">30</p>
                </div>
                <div className="bg-white p-2 rounded-md flex flex-col items-center text-center">
                  <h4 className="text-sm md:text-lg font-semibold text-[#3084A9]">
                    Seconds
                  </h4>
                  <p className="text-xl text-black">45</p>
                </div>
              </div>
              {/* Rating Section */}
              <div className="w-full max-w-[280px] md:max-w-xs mt-4 bg-white rounded-md shadow-md text-left py-3 px-2">
                <h5 className="text-lg font-semibold">{product.name}</h5>
                <div className="flex gap-1 items-center">
                  <Star className={""} />
                  <span>4.6</span>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div>
                    <div className="flex gap-1">
                      <div className="flex items-center">
                        <h5 className="flex items-center">
                          <FaCediSign />
                          {product.price}
                        </h5>
                      </div>
                      <div className="flex items-center">
                        <h6 className="flex items-center text-slate-300 text-sm">
                          <FaCediSign />
                          500
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button className={" "} product={product} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
