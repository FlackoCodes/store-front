import { Link } from "react-router-dom";
import { vendorsData } from "../data";

export default function Charts() {
  return (
    <div className="">
      <div className="text-center py-4 text-black font-bold text-lg md:text-3xl">
        Trending from Our top Vendors
      </div>
      <div className="flex md:flex-row justify-center items-center gap-2 w-[95%] my-0 mx-auto mt-5 mb-5 flex-col">
        {vendorsData.map((data) => (
          <div className="relative text-center" key={data.id}>
            <div className="shadow rounded-md">
              <img
                className="rounded-md  chart-image w-screen z-30"
                src={data.image}
                alt="cake image"
              />
            </div>
            <Link to={data.link}>
              <h4
                className="absolute bottom-6 left-2 right-2 cursor-pointer text-center text-gray-600 lg:font-semibold bg-white bg-opacity-70 py-1 px-2 rounded-md z-10"
                onClick={() => {
                  console.log("The link is:", data.link);
                }}
              >
                {data.name}
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
