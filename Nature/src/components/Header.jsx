import React from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

const Header = () => {
  return (
    <header className="flex items-center justify-between px-12 py-2 bg-transparent font-quicksand text-black text-lg">
      {/* Styling for icon*/}
      <div className="flex items-center space-x-2">
        {/* Wrap the icon with a Link component to route to the home page */}
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>

    
    </header>
  );
};

export default Header;
