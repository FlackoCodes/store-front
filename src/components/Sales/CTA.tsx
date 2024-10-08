import bestCake from "../../images/bestCakes.jpg";

export default function CTA() {
  return (
    <>
      <div
        className="bg-cover bg-center h-auto md:h-[501px] relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(145, 183, 226, 0.8), rgba(223, 177, 227, 0.8)), url(${bestCake})`,
        }}
      >
        <div className="grid place-content-center items-center h-screen">
          <h1 className="text-[#FFFFFF] font-medium md:text-[64px] text-center">BEST-SELLING CAKES</h1>
        </div>
      </div>
    </>
  );
}
F