import Button from "../Button";
import { data } from "../../data";

export default function Products() {

  return (
    <div className="bg-red-500 grid grid-cols-1 md:grid-cols-4 gap-2 my-2">
      {data.map((product) => (
        <div key={product.id} className="flex flex-col gap-1 bg-blue-600">
          <img
            src={product.image}
            className="rounded-md w-[150px] h-[180px] md:w-[230px] md:h-[250px]"
            alt={product.description}
          />
          <div className="flex flex-col gap-0.5">
            <h4 className="text-[#3084A9] font-medium">{product.name}</h4>
            <p className="text-[#1F252C] text-[16px] tracking-tight">
              {product.description}
            </p>
            <span className="text-[#1F252C] text-[16px] font-bold">¢{product.price}</span>
          </div>
          <div className="flex items-center justify-between">
            <Button className={"w-full my-2"} product={product} />
          </div>
        </div>
      ))}
    </div>
  );
}
