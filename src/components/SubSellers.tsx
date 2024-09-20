import { Link } from "react-router-dom";
import cake4 from "../images/cake4.jfif";
import Button from "./Button";
import Star from "./Star";

export default function SubSellers() {
  const arr = new Array(5).fill(cake4);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center my-4 gap-3">
        {arr.map((item, index) => (
          <div className="flex flex-col">
            <div key={index}>
              <Link to={"/details"}>
                <img src={item} alt="cake" className="rounded-md" />
              </Link>
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
              <Button className={"py-1 px-1 text-sm"} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
