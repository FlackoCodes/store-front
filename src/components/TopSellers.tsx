import { PiCrown } from "react-icons/pi";
// import Star from "./Star";
// import Button from "./Button";
import { Link } from "react-router-dom";
import SubSellers from "./SubSellers";
// import { data } from "../data";

export default function TopSellers() {
  return (
    <div className="w-[95%] my-0 mx-auto">
      <div className="text-center">
        <h5 className="text-[#1F252C] font-bold leading">TOP SELLERS</h5>
        <h3 className="">Choose Your Food Experience</h3>
      </div>
      <div className="hidden md:flex justify-between items-center mt-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div>
              <PiCrown key={index} size={20} />
            </div>
            <p className="text-[#676D76] font-semibold text-[14px] text-center">
              Iconic Eats
            </p>
          </div>
        ))}
      </div>
      <SubSellers />
      <div className="text-center my-8">
        <Link
          to={"/"}
          className="border text-sm rounded-md py-1 px-2 text-[#3084A9] border-[#3084A9]"
        >
          View More Goodies
        </Link>
      </div>
    </div>
  );
}
