import founderImg from "../../images/founder.png";

export default function Team() {
  return (
    <div className="bg-[#FDF0FF] my-4">
      <div className="my-4">
        <header className="text-center my-2">
          <h5 className="text-[#1F252C] font-medium">
            Our
            <span className="text-[#3084A9] font-medium ml-2">
              Talented Team
            </span>
          </h5>
        </header>
        <div className="w-[85%] my-0 mx-auto flex flex-row justify-between">
          <div className="flex flex-col gap-0.5 items-center">
            <div>
              <img
                className="w-[100px] h-[100px] rounded-full"
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
          <div className="flex flex-col gap-0.5 items-center">
            <div>
              <img
                className="w-[100px] h-[100px] rounded-full"
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
          <div className="flex flex-col gap-0.5 items-center">
            <div>
              <img
                className="w-[100px] h-[100px] rounded-full"
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
          <div className="flex flex-col gap-0.5 items-center">
            <div>
              <img
                className="w-[100px] h-[100px] rounded-full"
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
