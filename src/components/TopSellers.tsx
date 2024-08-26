import { PiCrown } from "react-icons/pi";
import cake4 from "../images/cake4.jfif";
import Star from "./Star";
import Button from "./Button";
import { Link } from "react-router-dom";

const arr = new Array(5).fill(cake4);

export default function TopSellers() {
  return (
    <div className="w-[95%] my-0 mx-auto">
      <div className="text-center">
        <h5 className="text-[#1F252C] font-bold leading">TOP SELLERS</h5>
        <h3 className="">Choose Your Food Experience</h3>
      </div>
      <div className="flex justify-between items-center mt-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div key={index}>
              <PiCrown key={index} size={20} />
            </div>
            <p className="text-[#676D76] font-semibold text-[14px] text-center">
              Iconic Eats
            </p>
          </div>
        ))}
      </div>
      <div className="flex my-4 gap-3">
        {arr.map((item, index) => (
          <div className="flex flex-col">
            <div key={index}>
              <img src={item} alt="cake" className="rounded-md" />
            </div>
            <div>
              <h4 className="text-[#3084A9] font-normal text-base">
                Lady M Confection
              </h4>
              <h5 className="text-[#1F252C] font-normal text-sm">
                Strawberry Swirl Mile Crepe Cake
              </h5>
              <h6 className="text-[#1F252C] font-medium text-sm">¢600.00</h6>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <p className="text-[#1F252C]">4.6</p>
                <Star className={"gap-0"} />
              </div>
              <Button className={"py-1 px-1.5 text-sm"} />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-8">
        <Link to={"/"} className="border text-sm rounded-md py-1 px-2 text-[#3084A9] border-[#3084A9]">
          View More Goodies
        </Link>
      </div>
    </div>
  );
}
