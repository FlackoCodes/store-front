import { FaAngleRight } from "react-icons/fa6";
import aboutCake from "../images/about-cake - Copy.jfif";
import Star from "../components/Star";

export default function About() {
  return (
    <div className="w-[95%] my-0 mx-auto">
      <div className="flex my-2">
        <div className="flex gap-1 text-[#8B96A5]">
          <span>Home</span>
          <FaAngleRight />
        </div>
        <div className="flex gap-1 text-[#8B96A5]">
          <span>Category</span>
          <FaAngleRight />
        </div>
        <div className="flex gap-1 text-[#8B96A5]">
          <span>Flash Sales</span>
          <FaAngleRight />
        </div>
        <div className="flex gap-1 text-[#8B96A5]">
          <span>Lady M Cakes</span>
        </div>
      </div>
      <div className="w-[85%] my-0 mx-auto grid grid-cols-2 gap-4">
        <div>
          <img src={aboutCake} alt="cake" className="rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-[#3084A9] font-semibold">Lady M Confection</h4>
          <h3 className="text-[#1F252C] tracking-tighter font-bold">
            Strawberry Swirl Mile Crepe Cake
          </h3>
          <Star />
          <h3 className="text-[#1F252C] tracking-tighter font-bold">¢600.00</h3>
        </div>
        <div>
          <p>
            This cake is seriously GIANT! The skyscraping 20 Layer Chocolate
            Peanut Butter Cake features alternating layers of devils food cake
            and peanut butter mascarpone to satisfy anyone's sweet tooth. It's
            made with high-end Valrhona chocolate and filled with peanut butter
            cream, and it's the perfect ending to a luxurious and romantic meal.
            Pair it with peanut brittle for the full experience!
          </p>
          <p>
            LAVO is a globally recognized destination for Italian cuisine,
            helmed by Chef Partner Ralph Scamardella, with iconic locations in
            New York, Las Vegas, San Diego, and Singapore.
          </p>
        </div>
      </div>
    </div>
  );
}
