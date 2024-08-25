import logo from "../images/logo.png";
import { BiBell, BiSearch } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-[#3084A9]">
      <nav className="flex justify-between items-center w-[90%] my-0 mx-auto py-4">
        <div>
          <img className="w-[135px] h-[66px]" src={logo} alt="logo" />
        </div>

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
          <Link
            to={"/login"}
            className="border-none rounded-sm bg-white text-[#3084A9] py-1 px-3 capitalize"
          >
            login/signup
          </Link>
        </div>
      </nav>
    </div>
  );
}
