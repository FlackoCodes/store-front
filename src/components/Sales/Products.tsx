import sales1 from "../../images/sales1.png";
import sales2 from "../../images/sales2.png";
import sales3 from "../../images/sales3.png";
import sales4 from "../../images/sales4.png";
import Button from "../Button";
import Star from "../Star";
Button;
export default function Products() {
  return (
    <div className="grid grid-cols-4">
      <div className="flex flex-col gap-3">
        <img
          src={sales1}
          className="rounded-md w-[230px] h-[250px]"
          alt="cake"
        />
        <div className="flex flex-col gap-1">
          <h4 className="text-[#3084A9] font-medium text-[16px] ">
            Lady M Confection
          </h4>
          <p className="text-[#1F252C] fonr-normal text-16px">
            Strawberry Swirl Mile Crepe Cake
          </p>
          <span className="text-[#1F252C] fonr-normal text-16px">¢600.00</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-0 5 items-center">
            <span>4.6</span>
            <Star />
          </div>
          <Button className={"m-0.5"} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img
          src={sales2}
          className="rounded-md w-[230px] h-[250px]"
          alt="cake"
        />
        <div className="flex flex-col gap-1">
          <h4 className="text-[#3084A9] font-medium text-[16px] ">
            Lady M Confection
          </h4>
          <p className="text-[#1F252C] fonr-normal text-16px">
            Strawberry Swirl Mile Crepe Cake
          </p>
          <span className="text-[#1F252C] fonr-normal text-16px">¢600.00</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-0 5 items-center">
            <span>4.6</span>
            <Star />
          </div>
          <Button className={"m-0.5"} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img
          src={sales3}
          className="rounded-md w-[230px] h-[250px]"
          alt="cake"
        />
        <div className="flex flex-col gap-1">
          <h4 className="text-[#3084A9] font-medium">
            Lady M Confection
          </h4>
          <p className="text-[#1F252C] fonr-normal">
            Strawberry Swirl Mile Crepe Cake
          </p>
          <span className="text-[#1F252C] fonr-normal text-16px">¢600.00</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-0 5 items-center">
            <span>4.6</span>
            <Star />
          </div>
          <Button className={"m-0.5"} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img
          src={sales4}
          className="rounded-md w-[230px] h-[250px]"
          alt="cake"
        />
        <div className="flex flex-col gap-1">
          <h4 className="text-[#3084A9] font-medium text-[16px] ">
            Lady M Confection
          </h4>
          <p className="text-[#1F252C] fonr-normal text-16px">
            Strawberry Swirl Mile Crepe Cake
          </p>
          <span className="text-[#1F252C] fonr-normal text-16px">¢600.00</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-0 5 items-center">
            <span>4.6</span>
            <Star />
          </div>
          <Button className={"m-0.5"} />
        </div>
      </div>
    </div>
  );
}
