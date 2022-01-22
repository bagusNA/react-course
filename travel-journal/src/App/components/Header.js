import React from 'react';
import { FaGlobeAsia } from "react-icons/fa";

class Header extends React.Component {
  render() { 
    return (
      <div className="flex justify-center items-center gap-x-2 p-4 text-white font-bold bg-red-500">
        <FaGlobeAsia className="text-5xl"/>
        <p>my travel journal.</p>
      </div>
    );
  }
}
 
export default Header;