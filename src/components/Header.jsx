import abstractLogo from "../assets/images/abstract-logo-white.svg"


function Header() {
  return (
    <div className="bg-black">
        <div className="flex gap-2">
            <img src={abstractLogo} className="w-20 h-auto"/>
            <a href="#" className="text-white"><span>| Help Center</span></a>
        </div>
        <div>

            <input type="text" placeholder="Search.." className="bg-white rounded"></input>
            <a href="" className="bg-[#191a1b] text-white border border-white rounded">Submit a request</a>
            <a href="" className="bg-[#4C5FD5] text-white rounded">Sign in</a>
        </div>
  
  </div>
  )
 
}

export default Header;
