import bestCake from "../../images/bestCakes.jpg";

export default function CTA() {
  return (
    <>
      <div
        className="bg-cover bg-center h-auto md:h-[501px] relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bestCake})`,
        }}
      >
        <div className="grid place-content-center items-center h-screen">
          {/* Add margin-top to the h1 to move it up a bit */}
          <h1 className="text-white font-medium md:text-[64px] text-center mt-[20px]">
            BEST-SELLING CAKES
          </h1>
        </div>
      </div>
    </>
  );
}
