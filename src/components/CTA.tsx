import cakeBg from "../images/cake-background.jfif";

export default function CTA() {
  return (
    <div
      className="bg-cover bg-center h-[561px]"
      style={{ backgroundImage: `url(${cakeBg})` }}
    >
      <div className="grid place-content-center min-h-[100vh]">
          <h1 className="text-white text-3xl font-extrabold font-[roboto] w-[300px] text-center tracking-tighter">Ghana's Most Iconic Cake For You Birthday</h1>
          <button className="bg-[#3084A9] w-fit text-white capitalize rounded-sm">explore</button>
      </div>
    </div>
  );
}
