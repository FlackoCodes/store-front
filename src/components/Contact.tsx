export default function Contact() {
  return (
    <div className="w-[95%] my-0 mx-auto bg-[#C3E3F1] h-[250px] grid place-content-center text-center rounded-sm">
      <h1 className="text-black font-medium font tracking-tight text-2xl">
        Deliciousness to your inbox
      </h1>
      <h5 className="text-black font-normal text-m">
        Enjoy weekly hand picked recipes and recommendations Subscribe to our
        Newsletter
      </h5>
      <div className="relative">
        <input
          type="text"
          className="pr-10 border border-gray-300 rounded-md w-full py-2 px-3 outline-none mt-4"
          placeholder="Email adress"
        />
        <button
          type="button"
          className="absolute right-2 bottom-1 py-1 px-4 text-white bg-[#3084A9] rounded-md"
        >
          Join
        </button>
      </div>
    </div>
  );
}
