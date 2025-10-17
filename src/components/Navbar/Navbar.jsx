import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaBars,
  FaYoutube,
  FaClock,
} from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import logo from "../../images/logo/Logofinal.png"
import { FaCalendar, FaLocationDot } from "react-icons/fa6";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdowns = {
    pilot: [

      { name: "Londan", path: "/londan" },
      {
        name: "Events",
        path: "/rtr-radio-telephony-restricted",
      },
      { name: "Packages(Offers)", path: "/cadet-pilot-program" },

    ],
    // cabin: [
    //   { name: "R", path: "/job-oriented-cc-training" },
    // ],

  };

  const renderDropdown = (key) => (
    <div className="absolute top-full left-0 bg-white rounded shadow-md py-2 w-64 z-50">
      {dropdowns[key].map((item) => (
        <NavLink key={item.name} to={item.path}>
          <div className="px-4 py-2 hover:bg-indigo-100 text-sm text-gray-700 transition">
            {item.name}
          </div>
        </NavLink>
      ))}
    </div>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full font-sans">
      {/* Top Bar */}
      {!scrolling && (
        <div className="text-white text-sm w-full md:flex hidden justify-center py-2  bg-primary">
          <div className="w-full max-w-[1320px] flex justify-between items-center px-6 flex-wrap gap-2">
            <span className="flex items-center gap-x-4" > <FaCalendar/>   Thursday, Mar 26, 2021 <FaLocationDot/>  Hollywood, America  <FaClock/>   Mon-Fri: 10 AM – 5 PM
            </span>
            <div className="flex items-center gap-4">
              {/* <span>Phone: Devrana, Delhi-Haridwar Highway, Mansurpur, Muzaffarnagar</span> */}
              <div className="flex gap-3 text-white text-base">
                <Link
                  to="https://www.facebook.com/"
                  className="w-8 h-8 bg-white rounded-full flex items-center p-0 justify-center text-primary"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to="https://x.com/"
                  className="w-8 h-8 bg-white rounded-full flex items-center p-0 justify-center text-primary"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/"
                  className="w-8 h-8 bg-white rounded-full flex items-center p-0 justify-center text-primary"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  to="https://www.instagram.com/"
                  className="w-8 h-8 bg-white rounded-full flex items-center p-0 justify-center text-primary"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="https://in.pinterest.com/"
                  className="w-8 h-8 bg-white rounded-full flex items-center p-0 justify-center text-primary"
                >
                  <FaPinterestP />
                </Link>
                <Link
                  to=""
                  className="w-8 h-8 bg-white rounded-full flex items-center p-0 justify-center text-primary"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <div
        className={`hidden md:flex ${scrolling ? "w-full" : "w-full"
          }  justify-center bg-white  text-[#00163d] shadow transition-all duration-300 uppercase`}
      >
        <nav className="flex items-center justify-between w-full max-w-[1320px] px-4 py-2 relative">
          <Link to="/">
            <img
              loading="lazy"
              src={logo}
              alt="Star Alliance Aviation Academy"
              className="w-32"
            />
          </Link>
          <ul className="flex gap-6 text-sm font-medium relative">
            <NavLink to="/">
              <li className="hover:text-Secondary">Home</li>
            </NavLink>
            <NavLink to="/about-us">
              <li className="hover:text-Secondary">About Us</li>
            </NavLink>

            {/* <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("pilot")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink to="/pilot-training">
                <div className="flex items-center gap-1 cursor-pointer hover:text-Secondary">
                  {" "}
                  Destination <ChevronDown size={16} />
                </div>{" "}
              </NavLink>
              {activeDropdown === "pilot" && renderDropdown("pilot")}
            </li> */}

            <NavLink to="/">
              <li className="hover:text-Secondary">Destination</li>
            </NavLink>
            <NavLink to="/">
              <li className="hover:text-Secondary">Tours</li>
            </NavLink>
            <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("cabin")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink to="/rooms-cottage">
                <div className="flex items-center gap-1 cursor-pointer hover:text-Secondary">
              Services
                </div>
              </NavLink>
              {/* {activeDropdown === "cabin" && renderDropdown("cabin")} */}
            </li>
            <NavLink to="/">
              <li className="hover:text-Secondary">Blog</li>
            </NavLink>
            <NavLink to="/">
              <li className="hover:text-Secondary">Contact</li>
            </NavLink>
          </ul>
          <button className="bg-primary  text-white text-sm uppercase font-semibold px-6 py-4 rounded hover:bg-Secondary transition">
            <Link to="/"> Book Now </Link>
          </button>

        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="w-full md:hidden bg-primary text-white  shadow px-4 py-2">
        {/* Logo & Menu Button */}
       
      </div>
    </div>
  );
};

export default Navbar;
