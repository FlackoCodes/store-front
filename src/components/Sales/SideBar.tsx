import { useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

export default function SideBar() {
  const [isOpen, setisOpen] = useState(false);

  const showmenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <aside>
      <div className="mb-2 border-b border-b-[#C9D2DF]">
        <h3 className="font-[inter] font-bold text-[32px]">Category</h3>
      </div>
      <div>
        <div onClick={showmenu} className="flex gap-0.5 items-center">
          <h5 className="tracking-tight font-[inter] font-normal">Coke</h5>
          {isOpen ? <BsArrowDown /> : <BsArrowUp />}
        </div>
        {isOpen && <ul className="list-none">li</ul>}
      </div>
    </aside>
  );
}
