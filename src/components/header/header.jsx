import React from "react";
import frameLogo from "../../assets/Frame.svg"; // Adjust path if needed
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className=" top-6  w-full p-4">
      <div className="flex pr-2 pt-2">
        <Link to="/home">
        <img src={frameLogo} alt="Logo" className="h-12 w-auto" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
