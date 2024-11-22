import logo from "../images/logo.png";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleBack } from "../store/logsSlice/logSlice";
import { useState } from "react";

export default function SignUp({ setLogin }) {

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const dispatch = useDispatch();

  const showLogin = () => {
    setLogin(true);
    dispatch(toggleBack());
  };

  const toggleLogs = () => {
    dispatch(toggleBack());
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative bg-white p-6 sm:p-8 rounded-md shadow-lg max-w-md w-full mx-4 max-h-[90vh] overflow-auto">
        <button
          onClick={toggleLogs}
          className="absolute top-3 right-3 text-gray-500"
          aria-label="Close"
        >
          <FaRegTimesCircle size={20} />
        </button>

        <header className="flex flex-col items-center mb-4 text-center">
          <img src={logo} alt="logo" className="h-10 mb-2" />
          <h1 className="text-lg font-semibold">Create an account</h1>
        </header>

        <form>
          <input
            value={fullName}
            onChange={(e) => { setFullName(e.target.value) }}
            type="text"
            className="rounded-md outline-none border-gray-300 border-[1.5px] w-full py-2 px-3 mb-4"
            placeholder="Full name"
          />
          <input
            onChange={(e) => { setEmail(e.target.value) }}
            type="email"
            className="rounded-md outline-none border-gray-300 border-[1.5px] w-full py-2 px-3 mb-4"
            placeholder="Email address / phone"
          />
          <input
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            type="password"
            className="rounded-md outline-none border-gray-300 border-[1.5px] w-full py-2 px-3 mb-4"
            placeholder="Password"
          />
          {/* <input
            type="password"
            className="rounded-md outline-none border-gray-300 border-[1.5px] w-full py-2 px-3 mb-4"
            placeholder="Re-enter password"
          /> */}
          {/* <div className="flex gap-2 items-center mb-6 mt-2">
            <input type="radio" name="privacy" id="privacy" />
            <p className="text-black font-medium text-sm">
              I agree to the Terms of Service and Privacy Policy
            </p>
          </div> */}
          <button className="w-full py-2 px-4 bg-[#3084A9] text-white rounded-md capitalize">
            Create Account
          </button>
          <p className="text-[#757C86] mt-4 text-center">
            Already have an account?
            <span
              onClick={showLogin}
              className="text-[#3084A9] ml-1 cursor-pointer"
            >
              Sign in here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
