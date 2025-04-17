import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200); // adjust 200 to whatever scroll distance you want
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseColor = isHome && !scrolled ? "black" : "white";
  const hoverColor = isHome && !scrolled ? "hover:text-gray-600" : "hover:text-gray-300";

  const linkStyle = `text-${baseColor} underline decoration-${baseColor} ${hoverColor}`;

  return (
    <header className="fixed right-0 z-50 px-8 py-10 font-outfit text-xl">
      <div className="flex flex-col items-end space-y-2">
        <Link to="/" className={linkStyle}>start</Link>
        <Link to="/Brunswick" className={linkStyle}>brunswick</Link>
        <Link to="/Hawaii" className={linkStyle}>hawaii</Link>
        <Link to="/Japan" className={linkStyle}>japan</Link>
      </div>
    </header>
  );
};

export default Header;
