import { useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

export default function SideBar() {
  const [isOpen, setisOpen] = useState(false);

  const showmenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <aside>
      <div className="flex flex-col gap-2">
        <div className="mb-2 border-b border-b-[#C9D2DF]">
          <h3 className="font-[inter] font-bold text-[32px]">Category</h3>
        </div>
        <div className="flex flex-col gap-2">
          <div onClick={showmenu} className="flex gap-0.5 items-center">
            <h5 className="tracking-tight font-[inter] font-normal">Coke</h5>
            {isOpen ? <BsArrowDown /> : <BsArrowUp />}
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
            {isOpen ? <BsArrowDown /> : <BsArrowUp />}
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
            {isOpen ? <BsArrowDown /> : <BsArrowUp />}
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
            {isOpen ? <BsArrowDown /> : <BsArrowUp />}
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
      <div className="mb-2 border-b border-b-[#757C86] ">
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
