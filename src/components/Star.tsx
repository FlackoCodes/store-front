import { FaStar } from "react-icons/fa";

export default function Star({ className }) {
  return (
    <div className={`flex gap-1 ${className}`}>
      <FaStar className="text-yellow-500" />
      <FaStar className="text-yellow-500" />
      <FaStar className="text-yellow-500" />
      <FaStar className="text-yellow-500" />
      <FaStar className="text-slate-400" />
    </div>
  );
}
