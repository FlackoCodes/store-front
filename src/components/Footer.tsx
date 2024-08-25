import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  const iconClass = "text-white";

  return (
    <footer className="bg-[#1F252C] px-10 py-12 h-[300px] mt-4">
      <div className="flex  justify-between  w-[85%] my-0 mx-auto">
        <div className="flex flex-col gap-1">
          <h3>Company</h3>
          <ul className="list-none">
            <li>
              <Link to={"/"}>About Us</Link>
            </li>
            <li>
              <Link to={"/"}>Why choose us</Link>
            </li>
            <li>
              <Link to={"/"}>Pricing</Link>
            </li>
            <li>
              <Link to={"/"}>Testimonial</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h3>Company</h3>
          <ul className="list-none">
            <li>
              <Link to={"/"}>About Us</Link>
            </li>
            <li>
              <Link to={"/"}>Why choose us</Link>
            </li>
            <li>
              <Link to={"/"}>Pricing</Link>
            </li>
            <li>
              <Link to={"/"}>Testimonial</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h3>Company</h3>
          <ul className="list-none">
            <li>
              <Link to={"/"}>About Us</Link>
            </li>
            <li>
              <Link to={"/"}>Why choose us</Link>
            </li>
            <li>
              <Link to={"/"}>Pricing</Link>
            </li>
            <li>
              <Link to={"/"}>Testimonial</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h3>Company</h3>
          <ul className="list-none">
            <li>
              <Link to={"/"}>About Us</Link>
            </li>
            <li>
              <Link to={"/"}>Why choose us</Link>
            </li>
            <li>
              <Link to={"/"}>Pricing</Link>
            </li>
            <li>
              <Link to={"/"}>Testimonial</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <FaFacebook className={iconClass} />
          <FaTwitter className={iconClass} />
          <FaInstagram className={iconClass} />
          <FaLinkedin className={iconClass} />
        </div>
      </div>
    </footer>
  );
}
