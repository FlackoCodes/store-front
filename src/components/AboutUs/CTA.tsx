import { FaAngleRight } from "react-icons/fa6";
import cake11 from "../../images/cake11.jfif";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <div
      className="bg-cover bg-center h-[357px] mb-10 max-w-[320px] md:max-w-screen-lg md:relative overflow-hidden"
      style={{
        backgroundImage: `url(${cake11})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative top-4 left-4 flex items-center gap-1">
        <div className="flex items-center space-x-0.5">
          <Link to={"/"} className="text-[#8B96A5] font-normal">
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
        <h3 className="hidden md:block text-start w-[230px] text-[#1F252C] font-medium tracking-tight text-lg md:text-[24px]">
          Our conviction lies in the emotional impact of food
        </h3>
      </div>
    </div>
  );
}
