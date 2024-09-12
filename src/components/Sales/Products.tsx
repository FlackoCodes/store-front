import sales1 from "../../images/sales1.png";
import sales2 from "../../images/sales2.png";
import sales3 from "../../images/sales3.png";
import sales4 from "../../images/sales4.png";
import Button from "../Button";
// import Star from "../Star";
export default function Products() {
  return (
    <div className="grid grid-cols-4 gap-2 my-2">
      <div className="flex flex-col gap-1">
        <img
          src={sales1}
          className="rounded-md w-[230px] h-[250px]"
          alt="cake"
        />
        <div className="flex flex-col gap-0.5">
          <h4 className="text-[#3084A9] font-medium">Lady M Confection</h4>
          <p className="text-[#1F252C] text-[16px] tracking-tight">
            Strawberry Swirl Mile Crepe Cake
          </p>
          <span className="text-[#1F252C] text-[16px] font-bold">¢600.00</span>
        </div>
        <div className="flex items-center justify-between">
          {/* <div className="flex gap-0.5 items-center">
            <span>4.6</span>
            <Star />
          </div> */}
          <Button className={"w-full my-1"} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <img
          src={sales2}
          className="rounded-md w-[230px] h-[250px]"
          alt="cake"
        />
        <div className="flex flex-col gap-0.5">
          <h4 className="text-[#3084A9] font-medium">Lady M Confection</h4>
          <p className="text-[#1F252C] text-[16px] tracking-tight">
            Strawberry Swirl Mile Crepe Cake
          </p>
          <span className="text-[#1F252C] text-[16px] font-bold">¢600.00</span>
        </div>
        <div className="flex items-center justify-between">
          {/* <div className="flex gap-0.5 items-center">
            <span>4.6</span>
            <Star /> 
          </div> */}
          <Button className={"w-full my-1"} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <img
          src={sales3}
          className="rounded-md w-[230px] h-[250px]"
          alt="cake"
        />
        <div className="flex flex-col gap-0.5">
          <h4 className="text-[#3084A9] font-medium">Lady M Confection</h4>
          <p className="text-[#1F252C] text-[16px] tracking-tight">
            Strawberry Swirl Mile Crepe Cake
          </p>
          <span className="text-[#1F252C] text-[16px] font-bold">¢600.00</span>
        </div>
        <div className="flex items-center justify-between">
          {/* <div className="flex gap-0.5 items-center">
            <span>4.6</span>
            <Star />
          </div> */}
          <Button className={"w-full my-1"} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <img
          src={sales4}
          className="rounded-md w-[230px] h-[250px]"
          alt="cake"
        />
        <div className="flex flex-col gap-0.5">
          <h4 className="text-[#3084A9] font-medium">Lady M Confection</h4>
          <p className="text-[#1F252C] text-[16px] tracking-tight">
            Strawberry Swirl Mile Crepe Cake
          </p>
          <span className="text-[#1F252C] text-[16px] font-bold">¢600.00</span>
        </div>
        <div className="flex items-center justify-between">
          {/* <div className="flex gap-0.5 items-center">
            <span>4.6</span>
            <Star className={"m-0"} />
          </div> */}
          <Button className={"w-full my-1"} />
        </div>
      </div>
    </div>
  );
}
