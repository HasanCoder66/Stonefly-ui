import React from "react";
import { FaPowerOff } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 px-6 py-4">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Profile Section */}
        <div className="flex items-center gap-2">
          <div className="bg-gray-300 rounded-full w-[60px] h-[60px] flex items-center justify-center">
            {/* Placeholder for Profile Image */}
          </div>
          <div>
            <p className="font-bold text-gray-700">Welcome</p>
            <p className="text-sm text-gray-500">SC-172-125-82-211</p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-600">Status</p>
              <span className="bg-gray-500 text-white px-2 py-1 text-xs rounded-full">
                Good
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="bg-gray-500 text-white px-4 py-2 rounded-full hover:shadow-md">
          Support
        </button>
        <button className="bg-gray-500 text-white p-3 rounded-full hover:shadow-md flex items-center justify-center">
          <FaPowerOff />
        </button>
      </div>
    </div>
  );
};

export default Header;

