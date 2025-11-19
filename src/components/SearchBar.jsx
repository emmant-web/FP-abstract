import { MoveRight } from "lucide-react";


function SearchBar() {
  return <div className="bg-[#dadbf1] flex flex-col justify-center items-center py-10 md:py-15">
    <h1 className="font-medium text-3xl mb-4">How can we help?</h1>
        <div className="bg-white rounded flex w-xs md:">
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
