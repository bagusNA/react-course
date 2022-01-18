import React from 'react';
import logo from '../logo.svg';

class Header extends React.Component {
  render() { 
    return (
      <div className="flex justify-between items-center px-8 py-6 bg-primary font-bold text-2xl">
        <div className="flex items-center text-accent">
          <img src={logo} alt="React-logo" className="w-14"/>
          <h3>ReactFacts</h3>
        </div>
        <p className="text-white text-xl">React Course - Project 1</p>
      </div>
    );
  }
}
 
export default Header;