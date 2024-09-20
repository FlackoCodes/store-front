import cakeTwo from "../images/cake-2.jfif";

export default function Charts() {
  return (
    <div className="flex md:flex-row justify-center items-center gap-2 w-[95%] my-0 mx-auto mt-5 mb-5 flex-col">
      <div className="relative text-center">
      <img className="rounded-md chart-image" src={cakeTwo} alt="cake image" />
      <h4 className="absolute bottom-4 left-2 right-2 text-center ">barbies dream eats</h4>
      </div>
      <div className="relative text-center">
      <img className="rounded-md chart-image" src={cakeTwo} alt="cake image" />
      <h4 className="absolute bottom-4 left-2 right-2 text-center">barbies dream eats</h4>
      </div>
      <div className="relative text-center">
      <img className="rounded-md chart-image" src={cakeTwo} alt="cake image " />
      <h4 className="absolute bottom-4 left-2 right-2 text-center">barbies dream eats</h4>
      </div>
      <div className="relative text-center">
      <img className="rounded-md chart-image" src={cakeTwo} alt="cake image chart-image" />
      <h4 className="absolute bottom-4 left-2 right-2 text-center">barbies dream eats</h4>
      </div>
      <div className="relative text-center">
        <img className="rounded-md chart-image" src={cakeTwo} alt="cake image" />
        <h4 className="absolute bottom-4 left-2 right-2 text-center">barbies dream eats</h4>
      </div>
    </div>
  );
}
