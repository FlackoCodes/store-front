import cake5 from "../images/cake-5.jfifF";
import SubSellers from "./SubSellers";

export default function Categories() {
  return (
    <div className="w-[95%] my-0 mx-auto">
      <div>
        <h3 className="text-[#1F252C] font-medium">
          Shop <span className="text-[#3084A9]">by Categories</span>
        </h3>
      </div>
      <SubSellers />
    </div>
  );
}
