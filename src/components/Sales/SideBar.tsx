import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

export default function SideBar() {
  const [isOpen, setisOpen] = useState(false);

  const showmenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <aside className="w-[95%] my-0 mx-auto">
      <div className="flex flex-col gap-2">
        <div className="border-b border-b-[#C9D2DF] w-fit">
          <h3 className="font-[inter] font-bold text-[32px]">Category</h3>
        </div>
        <div className="flex flex-col gap-2">
          <div onClick={showmenu} className="flex gap-0.5 items-center">
            <h5 className="tracking-tight font-[inter] font-normal">Coke</h5>
            {isOpen ? <FaAngleDown /> : <FaAngleUp />}
          </div>
          {isOpen && (
            <ul className="list-none">
              <li>Angel Food Cake</li>
              <li>Angel Food Cake</li>
              <li>Angel Food Cake</li>
              <li>Angel Food Cake</li>
            </ul>
          )}
        </div>
        <div>
          <div onClick={showmenu} className="flex gap-0.5 items-center">
            <h5 className="tracking-tight font-[inter] font-normal">Drink</h5>
            {isOpen ? <FaAngleDown /> : <FaAngleUp />}
          </div>
          {isOpen && (
            <ul className="list-none">
              <li>Angel Food Cake</li>
              <li>Angel Food Cake</li>
              <li>Angel Food Cake</li>
              <li>Angel Food Cake</li>
            </ul>
          )}
        </div>
        <div>
          <div onClick={showmenu} className="flex gap-0.5 items-center">
            <h5 className="tracking-tight font-[inter] font-normal">
              Pastries
            </h5>
            {isOpen ? <FaAngleDown /> : <FaAngleUp />}
          </div>
          {isOpen && (
            <ul className="list-none">
              <li>Angel Food Cake</li>
              <li>Angel Food Cake</li>
              <li>Angel Food Cake</li>
              <li>Angel Food Cake</li>
            </ul>
          )}
        </div>
        <div>
          <div onClick={showmenu} className="flex gap-0.5 items-center">
            <h5 className="tracking-tight font-[inter] font-normal">Flowers</h5>
            {isOpen ? <FaAngleDown /> : <FaAngleUp />}
          </div>
          {isOpen && (
            <ul className="list-none">
              <li>Angel Food Cake</li>
              <li>Angel Food Cake</li>
              <li>Angel Food Cake</li>
              <li>Angel Food Cake</li>
            </ul>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <h5>Hot 100</h5>
          <h5 className="text-[#3084A9] font-normal tracking-tight">
            See More
          </h5>
        </div>
      </div>
      <div className="mb-2 border-b border-b-[#757C86] w-fit">
        <h3 className="text-[#757C86] font-bold">Promotions</h3>
        <div className="flex flex-col gap-4 mt-2">
          <h3 className="text-[#1F252C] font-bold">Promotions</h3>
          <h3 className="text-[#1F252C] font-bold">Promotions</h3>
          <h3 className="text-[#1F252CF] font-bold">Promotions</h3>
        </div>
      </div>
    </aside>
  );
}
