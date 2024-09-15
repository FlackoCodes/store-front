import { FaAngleRight } from "react-icons/fa6";
import cake11 from "../../images/cake11.jfif";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <>
      <div
        className="bg-cover bg-center h-[357px] mb-10 max-w-screen-lg relative"
        style={{ backgroundImage: `url(${cake11})` }}
      >
        <div className="relative top-4 left-4 flex items-center gap-1">
          <div className="flex items-center space-x-0.5">
            <Link to={"/"} className="text-[#8B96A5] font-normalf">
              Home
            </Link>
            <FaAngleRight className="text-[#8B96A5]" />
          </div>
          <div className="flex items-center space-x-0.5">
            <span className="capitalize text-[#8B96A5] font-normal">
              about us
            </span>
            <FaAngleRight className="text-[#8B96A5]" />
          </div>
        </div>
        <div className="absolute -right-9 top-[40%]">
          <h3 className="text-start w-[230px] text-[#1F252C] font-medium tracking-tight text-[24px]">
            Our conviction lies in the emotional impact of food
          </h3>
        </div>
      </div>
    </>
  );
}
