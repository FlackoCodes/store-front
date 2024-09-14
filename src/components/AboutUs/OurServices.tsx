import tickerStar from "../../images/tickerStar.png";

export default function OurServices() {
  return (
    <div className="my-14">
      <div className="w-[85%] my-0 mx-auto">
        <header className="text-center my-2 font-bold text-xl">What We Provide?</header>
        <div className="grid grid-cols-3 gap-8 my-4 text-center">
          <div className="border-2 border-t-[#3084A9] rounded-md shadow p-4">
            <div className="flex justify-center">
              <img className="w-5" src={tickerStar} alt="ticker-star" />
            </div>
            <h5 className="text-[#24637F] font-bold tracking-tight">
              Best Pruces & Offers
            </h5>
            <p className="text-[#24637F] font-normal">
              Lorem ipsum dolor sit amet consectetur. Sit enim lorem ipsum quis
              varius quam tortor blandit malesuada.
            </p>
          </div>
          <div className="border-2 border-t-[#3084A9] rounded-md shadow p-4">
            <div className="flex justify-center">
              <img className="w-5" src={tickerStar} alt="ticker-star" />
            </div>
            <h5 className="text-[#24637F] font-bold tracking-tight">
              Best Pruces & Offers
            </h5>
            <p className="text-[#24637F] font-normal">
              Lorem ipsum dolor sit amet consectetur. Sit enim lorem ipsum quis
              varius quam tortor blandit malesuada.
            </p>
          </div>
          <div className="border-2 border-t-[#3084A9] rounded-md shadow p-4">
            <div className="flex justify-center">
              <img className="w-5" src={tickerStar} alt="ticker-star" />
            </div>
            <h5 className="text-[#24637F] font-bold tracking-tight">
              Best Pruces & Offers
            </h5>
            <p className="text-[#24637F] font-normal">
              Lorem ipsum dolor sit amet consectetur. Sit enim lorem ipsum quis
              varius quam tortor blandit malesuada.
            </p>
          </div>
        </div>
        <div className="my-10 bg-[#FFF4EA] flex items-center justify-between text-center py-8 px-10">
          <div>
            <h1 className="text-[#1F252C] font-medium tracking-tight text-[32px]">
              10
            </h1>
            <p className="text-[#1F252C] font-normal tracking-tight text-[16px]">
              Glorious Years
            </p>
          </div>
          <div>
            <h1 className="text-[#1F252C] font-medium tracking-tight text-[32px]">
              540
            </h1>
            <p className="text-[#1F252C] font-normal tracking-tight text-[16px]">
              Happy Clients
            </p>
          </div>
          <div>
            <h1 className="text-[#1F252C] font-medium tracking-tight text-[32px]">
              1900
            </h1>
            <p className="text-[#1F252C] font-normal tracking-tight text-[16px]">
              Orders Completed
            </p>
          </div>
          <div>
            <h1 className="text-[#1F252C] font-medium tracking-tight text-[32px]">
              10
            </h1>
            <p className="text-[#1F252C] font-normal tracking-tight text-[16px]">
              Glorious Years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
