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
      <div className="grid grid-cols-3 gap-3">
        {catCakes.map((catCake, index) => (
          <div key={index} className="mt-2">
            <div>
              <img src={catCake} alt="cake" className="rounded-md" />
            </div>
            <div className="text-center my-4">
              <h3 className="text-[#1F252C] text-base font-medium">
                by{" "}
                <span className="text-[#3084A9] text-sm font-normal">
                  HERTY TASTY HOUSE
                </span>
              </h3>
              <h5 className="my-4 text-[#757C86] font-medium">¢400-¢800</h5>
            </div>
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
