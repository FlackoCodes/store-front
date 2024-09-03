import logo from "../images/logo.png";
import { FaRegTimesCircle } from "react-icons/fa";

export default function Login() {
  return (
    <div className="bg-white w-[625px] h-[503px]">
      <header className="flex">
        <h1>login to</h1>
        <img src={logo} alt="logo" />
      </header>
      <form action="">
        <input
          type="text"
          className="rounded-md outline-none border-gray-300 border-[1.5px] w-full py-1 px-2"
          placeholder="Email address/phone"
        />
        <input
          type="password"
          className="rounded-md outline-none border-gray-300 border-[1.5px] py-1 px-2"
          placeholder="Password"
        />
        <button>login</button>
        <p className="text-[#757C86]">
          Don't have an account?
          <span className="text-[#3084A9]FF">Sign up</span>
        </p>
      </form>
    </div>
  );
}
