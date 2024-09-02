import { Link } from "react-router-dom";
import cakeBg from "../images/cake-background.jfif";

export default function CTA() {
  return (
    <div
      className="bg-cover bg-center h-[561px]"
      style={{ backgroundImage: `url(${cakeBg})` }}
    >
      <div className="grid place-content-center min-h-[100vh]">
        <h1 className="text-white text-3xl font-extrabold font-[roboto] w-[300px] text-center tracking-tighter mb-2 z-10">
          Ghana's Most Iconic Cake For You Birthday
        </h1>
        <Link
          to={"/"}
          className="bg-[#3084A9] hover:bg-[#256d8a] text-white capitalize rounded-md py-2 px-4 w-fit my-0 mx-auto block"
        >
          explore
        </Link>
      </div>
    </div>
  );
}
