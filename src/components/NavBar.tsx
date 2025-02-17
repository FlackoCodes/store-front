import { useState } from "react";
import logo from "../images/logo.png";
import { CgShoppingCart } from "react-icons/cg";
import Login from "./Login";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setActive } from "../store/logsSlice/logSlice";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";


export default function NavBar({ user }) {
  const dispatch = useDispatch();
  const isActive = useSelector((state: RootState) => state.log.isActive);
  const total = useSelector((state: RootState) => state.cart.total);

  const [login, setLogin] = useState(false);

  const showLogs = () => {
    dispatch(setActive());
  };

  async function logout() {
    await signOut(auth)
  }

  return (
    <div>
      <div className="bg-[#3084A9] relative">
        <nav className="flex justify-between items-center w-[90%] my-0 mx-auto py-4">
          <div className="">
            <Link to={"/"}>
              <img className="w-[200px] h-[66px]" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <h1 className="font-serif md:text-2xl lg:text-4xl font-bold text-white banner">cakes and more</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1 items-center">
              <div className="relative">
                <CgShoppingCart className="text-white" />
                <span className="text-orange-500 text-xs font-bold absolute -top-2 right-1">{total}</span>
              </div>
              <Link to={"/cart"} className="capitalize text-white">cart</Link>
            </div>
            {
              user ? <div className="flex items-center gap-x-3">
                <p className="text-white font-serif text-sm md:text-lg font-bold ml-2">Hello, {user.displayName || "User"}
                </p>
                <button
                  onClick={logout}
                  className="border-none rounded-sm bg-white text-[#3084A9] py-0.5 px-1.5 md:py-1 md:px-4 capitalize"
                >logout</button>
              </div> : <button
                onClick={showLogs}
                className="border-none rounded-sm bg-white text-[#3084A9] py-1 px-3 capitalize"
              >
                login/signup
              </button>
            }
          </div>
        </nav>
        {isActive && <SignUp setLogin={setLogin} />}
        {login && <Login setLogin={setLogin} />}
      </div>
    </div>
  );
}

{/* <div className="flex items-center border lg:ml-[300px] border-gray-300 rounded-lg px-3 py-2 max-w-md bg-white w-full sm:">
              <BiSearch className="text-xl text-[#3084A9] mr-2" />
              <input
                type="text"
                placeholder="search"
                className="w-full p-1 outline-none"
              />
              <GiHamburgerMenu className="text-xl text-[#3084A9] ml-auto" />
            </div> */}