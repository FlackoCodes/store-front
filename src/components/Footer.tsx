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
    <footer className="bg-[#1F252C] px-10 py-[80px] h-full mt-4">
      <div className=" flex flex-col text-center md:flex-row lg:flex-row md:text-left lg:text-start justify-between w-[85%] my-0 mx-autoFF">
        <div className="flex flex-col gap-1">
          <h3>Company</h3>
          <ul className="list-none">
            <li>
              <Link to={"/about-us"}>About Us</Link>
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
        <div className="flex flex-col gap-2">
          <h3>Resources</h3>
          <ul className="list-none">
            <li>
              <Link to={"/"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/"}>Terms and conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Customer Care</Link>
            </li>
            <li>
              <Link to={"/"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Products</h3>
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
        <div className="flex flex-col gap-2">
          <h3>Customer Care</h3>
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
        <div className="flex gap-2 justify-center sm:justify-center">
          <FaFacebook className={iconClass} />
          <FaTwitter className={iconClass} />
          <FaInstagram className={iconClass} />
          <FaLinkedin className={iconClass} />
        </div>
      </div>
    </footer>
  );
}
