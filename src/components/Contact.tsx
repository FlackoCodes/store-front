import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email && emailRegex.test(email)) {
      setIsSubscribed(true);
      setMessage("Thanks for subscribing to our newsletter!");
    } else {
      setMessage("Please enter a valid email address.");
    }

    setEmail("");
  };

  return (
    <div className="w-[95%] my-0 mx-auto bg-[#C3E3F1] h-[250px] grid place-content-center text-center rounded-sm">
      <h1 className="text-black font-medium font tracking-tight text-2xl">
        Deliciousness to your inbox
      </h1>
      <h5 className="text-black font-normal text-m">
        Enjoy weekly hand-picked recipes and recommendations. Subscribe to our
        Newsletter
      </h5>
      {!isSubscribed ? (
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pr-10 border border-gray-300 rounded-md w-full py-2 px-3 outline-none mt-4"
            placeholder="Email address"
          />
          <button
            type="button"
            onClick={handleSubscribe}
            className="absolute right-2 bottom-1 py-1 px-4 text-white bg-[#3084A9] rounded-md"
          >
            Join
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <h3 className="text-black font-medium text-lg">{message}</h3>
        </div>
      )}
    </div>
  );
}
