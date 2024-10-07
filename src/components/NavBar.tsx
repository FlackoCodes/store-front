//
import { useState } from "react";
import logo from "../images/logo.png";
import { BiBell, BiSearch } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import Login from "./Login";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setActive } from "../store/logsSlice/logSlice";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

export default function NavBar() {
  const dispatch = useDispatch();
  const isActive = useSelector((state: RootState) => state.log.isActive);
  const total = useSelector((state: RootState) => state.cart.total);

  const [login, setLogin] = useState(false);

  const showLogs = () => {
    dispatch(setActive());
  };
  return (
    <div>
      <div className="bg-[#3084A9] relative">
        <nav className="flex flex-col lg:flex-row gap-2 lg:justify-between items-center w-[90%] my-0 mx-auto py-4">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <Link to={"/"}>
              <img className="w-[200px] h-[66px]" src={logo} alt="logo" />
            </Link>
            <div className="flex items-center border lg:ml-[300px] border-gray-300 rounded-lg px-3 py-2 max-w-md bg-white w-full sm:">
              <BiSearch className="text-xl text-[#3084A9] mr-2" />
              <input
                type="text"
                placeholder="search"
                className="w-full p-1 outline-none"
              />
              <GiHamburgerMenu className="text-xl text-[#3084A9] ml-auto" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <BiBell className="text-white" />
            <div className="flex gap-1 items-center">
              <div className="relative">
                <CgShoppingCart className="text-white" />
                <span className="text-orange-500 text-xs font-bold absolute -top-2 right-1">{total}</span>
              </div>
              <span className="capitalize text-white">cart</span>
            </div>
            <button
              onClick={showLogs}
              className="border-none rounded-sm bg-white text-[#3084A9] py-1 px-3 capitalize"
            >
              login/signup
            </button>
          </div>
        </nav>
        {isActive && <SignUp setLogin={setLogin} />}
        {login && <Login setLogin={setLogin} />}
      </div>
    </div>
  );
}
