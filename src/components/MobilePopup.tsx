import { BiBell, BiSearch } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

export default function MobilePopup() {
  return (
    <>
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 max-w-md bg-white">
        <BiSearch className="text-xl text-[#3084A9] mr-2" />
        <input
          type="text"
          placeholder="search cakes, flowers and more"
          className="w-[300px] px-1 py-1 outline-none"
        />
        <GiHamburgerMenu className="text-xl text-[#3084A9] ml-auto" />
      </div>
      <div className="flex items-center gap-4">
        <BiBell className="text-white" />
        <div className="flex gap-1 items-center">
          <CgShoppingCart className="text-white" />
          <span className="capitalize text-white">cart</span>
        </div>
        <button
          onClick={showLogs}
          className="border-none rounded-sm bg-white text-[#3084A9] py-1 px-3 capitalize"
        >
          login/signup
        </button>
      </div>
    </>
  );
}
