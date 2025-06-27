import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo_bg.png";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setDropdown(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="w-full h-20 bg-blue-200 flex justify-between items-center px-2 md:px-12 rounded-b-2xl sticky top-0 z-50">
      <div className="logo font-bold flex md:h-8 h-5 items-center">
        <img src={Logo} alt="" className="md:w-30 w-22" />
        <h2 className="-ml-4">OMRONIX</h2>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 text-md font-semibold items-center">
        <a href="/" className="hover:underline">Home</a>
        <a href="/aboutus" className="hover:underline">About Us</a>
        <div className="relative dropdown-container">
          <button
            className="hover:underline flex gap-2 justify-center items-center"
            onClick={() => setDropdown(!dropdown)}
          >
            Services <FaCaretDown />
          </button>
          {dropdown && (
            <div className="absolute top-10 w-48 bg-mid-blue shadow-lg rounded text-black">
              <a href="/product/communicationsolution" className="block px-4 py-2 hover:bg-blue-300">Communication Solutions</a>
              <a href="/product/blockchainsolution" className="block px-4 py-2 hover:bg-blue-300">Blockchain Solutions</a>
              {/* <a href="/product/agenticaisolution" className="block px-4 py-2 hover:bg-blue-300">Agentic AI Solutions</a> */}
            </div>
          )}
        </div>
        <a href="/contact" className="hover:underline">Contacts</a>
        <a href="/contact">
          <button className="border rounded-xl px-5 py-2 hover:bg-blue-600 bg-blue-950 text-white font-bold">GET IN TOUCH</button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center pr-4">
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenu && (
        <div className="absolute top-20 left-0 w-full bg-mid-blue flex flex-col items-center text-md font-semibold shadow-lg p-4 md:hidden">
          <a href="/" className="py-2 hover:underline" onClick={() => setMobileMenu(false)}>Home</a>
          <a href="/aboutus" className="py-2 hover:underline" onClick={() => setMobileMenu(false)}>About Us</a>
          <div className="relative w-full text-center dropdown-container">
            <button
              className="w-full py-2 hover:underline"
              onClick={() => setDropdown(!dropdown)}
            >
              Product &#8595;
            </button>
            {dropdown && (
              <div className="w-full bg-mid-blue shadow-lg text-black">
                <a href="/product/communicationsolution" className="block px-4 py-2 hover:bg-blue-300">Communication Solution</a>
                <a href="/product/blockchainsolution" className="block px-4 py-2 hover:bg-blue-300">Blockchain Technology</a>
                <a href="/product/agenticaisolution" className="block px-4 py-2 hover:bg-blue-300">AI Agentic Solution</a>
              </div>
            )}
          </div>
          <a href="/contact" className="py-2 hover:underline" onClick={() => setMobileMenu(false)}>Contacts</a>
          <a href="/contact" className="py-2" onClick={() => setMobileMenu(false)}>
            <button className="border rounded-xl px-5 py-2 font-bold">GET IN TOUCH</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
