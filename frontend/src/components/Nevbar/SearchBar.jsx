import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="hidden lg:block w-[420px]">
      <div className="relative w-full group">
        {/* Left Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <IoIosSearch className="text-xl text-gray-400 group-focus-within:text-blue-600 transition-colors" />
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="What do you want to learn?"
          className="w-full border border-gray-300 rounded-full py-3 pl-12 pr-16 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-sm hover:shadow-md"
        />

        {/* Right Search Button */}
        <div className="absolute inset-y-1 right-1">
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
            <IoIosSearch className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;