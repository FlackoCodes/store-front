import founderImg from "../../images/founder.png";

export default function Team() {
  return (
    <div className="bg-[#FDF0FF] my-10">
      <div className="my-4 py-8">
        <header className="text-center my-2">
          <h5 className="text-[#1F252C] font-medium mb-4">
            Our
            <span className="text-[#3084A9] font-medium ml-2">
              Talented Team
            </span>
          </h5>
        </header>
        <div className="w-[85%] my-0 mx-auto grid grid-cols-2 md:grid-cols-4 justify-between gap-y-4">
          <div className="flex flex-col gap-0.5 items-center">
            <div>
              <img
                className="w-[65px] h-[65px] rounded-full"
                src={founderImg}
                alt="ceo-image"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[#1F252C] font-medium">Terry</h3>
              <p className="text-[#757C86] font-normal">
                Chief Executive officer
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-0.5 items-center">
            <div>
              <img
                className="w-[65px] h-[65px] rounded-full"
                src={founderImg}
                alt="ceo-image"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[#1F252C] font-medium">Flacko</h3>
              <p className="text-[#757C86] font-normal">
                Chief Technical officer
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-0.5 items-center">
            <div>
              <img
                className="w-[65px] h-[65px] rounded-full"
                src={founderImg}
                alt="ceo-image"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[#1F252C] font-medium">Benson</h3>
              <p className="text-[#757C86] font-normal">
                Chief Operating officer
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-0.5 items-center">
            <div>
              <img
                className="w-[65px] h-[65px] rounded-full"
                src={founderImg}
                alt="ceo-image"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[#1F252C] font-medium">Fetty</h3>
              <p className="text-[#757C86] font-normal">Lead Designer</p>
            </div>
          </div>
          <div className="flex flex-col gap-0.5 items-center">
            <div>
              <img
                className="w-[65px] h-[65px] rounded-full"
                src={founderImg}
                alt="ceo-image"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[#1F252C] font-medium">Tito</h3>
              <p className="text-[#757C86] font-normal">
                Chief Marketing officer
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-0.5 items-center">
            <div>
              <img
                className="w-[65px] h-[65px] rounded-full"
                src={founderImg}
                alt="ceo-image"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[#1F252C] font-medium">Rabiatu</h3>
              <p className="text-[#757C86] font-normal">
                Chief Financial officer
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-0.5 items-center">
            <div>
              <img
                className="w-[65px] h-[65px] rounded-full"
                src={founderImg}
                alt="ceo-image"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[#1F252C] font-medium">Ato</h3>
              <p className="text-[#757C86] font-normal">
                Chief Advertising officer
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-0.5 items-center">
            <div>
              <img
                className="w-[65px] h-[65px] rounded-full"
                src={founderImg}
                alt="ceo-image"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[#1F252C] font-medium">Pablo Mils</h3>
              <p className="text-[#757C86] font-normal">
                Chief Technical officer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
