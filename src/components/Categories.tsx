import { GiCupcake } from "react-icons/gi";
import cake5 from "../images/cake-5.jfif"; //
import SubSellers from "./SubSellers";

export default function Categories() {
  // Define the component as a variable
  const CupcakeIcon = GiCupcake;

  // Create an array of icons
  const cakes = new Array(10).fill(CupcakeIcon);

  const catCakes = new Array(3).fill(cake5);

  return (
    <div className="w-[95%] my-0 mx-auto">
      <div className="my-2">
        <h3 className="text-[#1F252C] font-medium">
          Shop <span className="text-[#3084A9]">by Categories</span>
        </h3>
      </div>
      <div>
        {catCakes.map((catCake, index) => (
          <div key={index} className="grid grid-cols-3">
            <img src={catCake} alt="cake" />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        {cakes.map((CakeComponent, index) => (
          <div
            key={index}
            className="bg-[#D4EEE2] rounded-lg text-center py-2 px-2 flex flex-col items-center"
          >
            <CakeComponent />
            <small className="text-xs font-normal">Carrot Cake</small>
          </div>
        ))}
      </div>
      <SubSellers />
    </div>
  );
}
