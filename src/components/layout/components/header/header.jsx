import logo from "../../../../assets/logo.svg";
import { HEADER_LINKS } from "./constants/header-links/header-links";
import { Link } from "react-router-dom";

export const Header = () => (
  <div className="fixed left-0 right-0 top-0  w-full bg-white shadow-lg z-50">
    <div className="container py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img className="" src={logo} alt="logo" />
      </div>
      <div className="flex justify-between items-center gap-[100px]">
        {HEADER_LINKS.map((link, idx) => (
          <Link key={idx} to={link.path}>
            <h2
              key={idx}
              className="font-semibold text-gray-700 font-quicksand text-md hover:text-red-900 cursor-pointer transition-all"
            >
              {link.label}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  </div>
);
