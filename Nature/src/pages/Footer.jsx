import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);  // Change state when scrolled
    } else {
      setScrolled(false);  // Reset state when at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer
        className={`fixed bottom-0 left-0 w-full py-2 ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        <nav>
          <ul className="font-quicksand text-lg flex justify-center space-x-6 mb-4">
            <li>
              <Link to="/Brunswick" className="hover:text-gray-400">
                Brunswick Mt
              </Link>
            </li>
            <li>
              <Link to="/AtHome" className="hover:text-gray-400">
                At Home
              </Link>
            </li>
            <li>
              <Link to="/Japan" className="hover:text-gray-400">
                Japan
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;
