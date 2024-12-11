import React from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-4 bg-transparent font-quicksand text-white text-lg">
      {/* Styling for icon */}
      <div className="flex items-center space-x-4">
        {/* Wrap the icon with a Link component to route to the home page */}
        <Link to="/" className="hover:underline">
          <p>Home</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
