import compBg from "../../images/bg.png";

export default function CTA() {
  return (
    <>
      <div
        className="bg-cover bg-center h-[350px] mb-10 w-auto"
        style={{ backgroundImage: `url(${compBg})` }}
      ></div>
    </>
  );
}
