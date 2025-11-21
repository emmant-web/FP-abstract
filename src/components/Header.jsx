import { useState } from "react";
import { Search } from "lucide-react";
import abstractLogo from "../assets/images/abstract-logo-white.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="bg-black flex justify-between py-4 px-2 relative">
      {/* logo and help center */}
      <div className="flex gap-2">
        <img src={abstractLogo} className="w-20 h-auto" />
        <a href="#" className="text-white">
          <span>| Help Center</span>
        </a>
      </div>

      {/* right side buttons */}
      <div className="flex gap-4">
        {/* search button for tablet and mobile */}
        <button className="lg:hidden" onClick={() => setShowSearch(true)}>
          <Search color="#fff" />
        </button>


        <button
        className="text-white lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* submit request and sign in buttons */}
        <div className="flex gap-4 hidden lg:flex">
          <a
            href=""
            className="bg-[#191a1b] text-white border border-white rounded px-3 py-2"
          >
            Submit a request
          </a>
          <a href="" className="bg-[#4C5FD5] text-white rounded px-3 py-2">
            Sign in
          </a>
        </div>

        {/* mobile search overlay */}
        {showSearch && (
          <div className="absolute top-0 left-0 w-full h-full bg-white flex justify-center items-center px-5">
            <input type="text" placeholder="Search..." className="bg-white w-full h-full" />
            <button
              className="text-black text-xl bg-white h-full"
              onClick={() => setShowSearch(false)}
            >
              X
            </button>
          </div> 
        )}

        {/* mobile menu dropdown */}
        {menuOpen && (
          <div className="absolute left-0 right-0 top-full bg-black flex flex-col gap-3 p-4 lg:hidden">
            <a
              href=""
              className="bg-[#191a1b] text-white border border-white rounded px-3 py-2"
            >
              Submit a request
            </a>
            <a href="" className="bg-[#4C5FD5] text-white rounded px-3 py-2">
              Sign in
            </a>
          </div>
        )}

      </div>
    </header>
  );
}

export default Header;
