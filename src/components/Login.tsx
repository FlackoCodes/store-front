import logo from "../images/logo.png";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
// import { RootState } from "../store/store";
import { toggleBack } from "../store/logsSlice/logSlice";

export default function Login() {
  const dispatch = useDispatch();

  const toggleLogs = () => {
    dispatch(toggleBack());
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
        <button
          onClick={toggleLogs}
          className="absolute top-3 right-3 text-gray-500"
          aria-label="Close"
        >
          <FaRegTimesCircle size={20} />
        </button>

        <header className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold">Login to</h1>
          <img src={logo} alt="logo" className="h-10" />
        </header>

        <form>
          <input
            type="text"
            className="rounded-md outline-none border-gray-300 border-[1.5px] w-full py-2 px-3 mb-4"
            placeholder="Email address/phone"
          />
          <input
            type="password"
            className="rounded-md outline-none border-gray-300 border-[1.5px] w-full py-2 px-3 mb-4"
            placeholder="Password"
          />
          <button className="w-full py-2 px-4 bg-[#3084A9] text-white rounded-md">
            Login
          </button>
          <p className="text-[#757C86] mt-4 text-center">
            Don't have an account?
            <span className="text-[#3084A9] ml-1 cursor-pointer">Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
}
