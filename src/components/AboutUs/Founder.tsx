import img from "../../images/chief.png";

export default function Founder() {
  return (
    <div className="w-[85%] my-0 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[30%,70%] gap-8 md:items-center">
        <div>
          <img src={img} alt="Flacko" />
        </div>
        <div>
          <div className="flex flex-col gap-2 text-[#1F252C] font-normal">
            <p>
              At Goldbelly, we believe in the emotional power of food. For many
              of us, food is a language of love. It's more than just
              nourishment. It's memories, it's connection, it's comfort.
            </p>
            <p>
              We understand how truly important our mission is. We are here to
              bring a smile to people's faces, an edible hug, a connection to a
              loved one even though you may not be with them, a moment of
              nostalgic comfort, a craving from a beloved food memory.
            </p>
            <p>
              We believe that food brings people together, so we've created a
              place that connects people with their greatest food memories,
              experiences and desires. We've built a platform that empowers
              small shops, chefs & restaurants and inspires their passion. Our
              mission is to bring you comfort through food.Whatever you dream
              of. Wherever you are.
            </p>
          </div>
          <div className="text-[#000000] font-bold mt-6">
            <h5>JustTerry</h5>
            <h5>Founder & CEO</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
