import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed right-0 z-50 px-8 py-10 font-outfit text-white text-xl">
      <div className="flex flex-col items-end space-y-2">
        {/* Wrap the icon with a Link component to route to the home page */}
        <Link to="/" className="hover:underline">
          <p>start</p>
        </Link>
        <Link to="/Brunswick" className="hover:text-gray-400">
          brunswick
        </Link>
        <Link to="/Hawaii" className="hover:text-gray-400">
          hawaii
        </Link>
        <Link to="/Japan" className="hover:text-gray-400">
          japan
        </Link>
      </div>
    </header>
  );
};

export default Header;
