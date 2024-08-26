/* eslint-disable @typescript-eslint/no-unused-vars */
export default function Button({ className }) {
  return (
    <button
      className={`bg-[#C3E3F1] capitalize border-none rounded-md text-[#3084A9] py-1 px-3 ${className}`}
    >
      add to cart
    </button>
  );
}
