import { MoveRight } from "lucide-react";


function SearchBar() {
  return <div className="hidden lg:flex lg:flex-col bg-[#dadbf1] justify-center items-center lg:py-16">
    <h1 className="font-medium text-5xl mb-6">How can we help?</h1>
        <div className="bg-white rounded flex w-lg">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 py-2 px-3 outline-none"
        />

        <button className="px-3 cursor-pointer">
          <MoveRight />
        </button>
      </div>
  
  </div>;
}

export default SearchBar;
