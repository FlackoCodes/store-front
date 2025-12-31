import bestCake from "../../images/bestCakes.jpg";

export default function CTA() {
  return (
    <>
      <div
        className="bg-cover bg-center h-[400px] md:h-[501px] flex items-center justify-center relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bestCake})`,
        }}
      >
        <div className="grid place-content-center items-center h-screen">
          <h1 className="text-white font-medium md:text-[64px] text-center">
            BEST-SELLING CAKES
          </h1>
        </div>
      </div>
    </>
  );
}
