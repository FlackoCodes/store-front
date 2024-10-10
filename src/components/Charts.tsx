import { vendorsData } from "../data";


export default function Charts() {
  return (
    <div className="flex md:flex-row justify-center items-center gap-2 w-[95%] my-0 mx-auto mt-5 mb-5 flex-col">
      {vendorsData.map((data) => <div className="relative text-center" key={data.id}>
        <div className="shadow rounded-md"><img className="rounded-md chart-image w-fit" src={data.image} alt="cake image" /></div>
        <h4 className="absolute bottom-6 left-2 right-2 text-center ">{data.name}</h4>
      </div>)}
    </div>
  );
}
