import cakeTwo from "../images/cake-2.jfif";

export default function Charts() {
  return (
    <div className="grid grid-cols-5 gap-2 w-[92%] my-0 mx-auto mt-5">
      <div className="relative text-center">
      <img className="rounded-sm chart-image" src={cakeTwo} alt="cake image" />
      <h4 className="absolute bottom-4 left-2 right-2 text-center ">barbies dream eats</h4>
      </div>
      <div className="relative text-center">
      <img className="rounded-sm chart-image" src={cakeTwo} alt="cake image" />
      <h4 className="absolute bottom-4 left-2 right-2 text-center">barbies dream eats</h4>
      </div>
      <div className="relative text-center">
      <img className="rounded-sm chart-image" src={cakeTwo} alt="cake image " />
      <h4 className="absolute bottom-4 left-2 right-2 text-center">barbies dream eats</h4>
      </div>
      <div className="relative text-center">
      <img className="rounded-sm chart-image" src={cakeTwo} alt="cake image chart-image" />
      <h4 className="absolute bottom-4 left-2 right-2 text-center">barbies dream eats</h4>
      </div>
      <div className="relative text-center">
        <img className="rounded-sm chart-image" src={cakeTwo} alt="cake image" />
        <h4 className="absolute bottom-4 left-2 right-2 text-center">barbies dream eats</h4>
      </div>
    </div>
  );
}
