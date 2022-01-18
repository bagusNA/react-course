import React from 'react';
import logo from '../logo.svg';

class Body extends React.Component {
  render() { 
    return (
      <div className="flex flex-col md:flex-row flex-grow px-16 bg-secondary text-white">
        <div className="flex flex-col justify-center w-fit h-4/6 md:w-4/6 md:h-full">

          <h1 className="text-6xl font-bold">Fun facts about React</h1>

          <ul className="list-disc px-8 pt-8">
            <li className="text-blue-400 text-xl m-2">
              <p className="text-white text-base">Was first released in 2013</p>
            </li>
            <li className="text-blue-400 text-xl m-2">
              <p className="text-white text-base">Was originally created by Jordan Walke</p>
            </li>
            <li className="text-blue-400 text-xl m-2">
              <p className="text-white text-base">Has well over 100K stars on GitHub</p>
            </li>
            <li className="text-blue-400 text-xl m-2">
              <p className="text-white text-base">Is maintained by Facebook</p>
            </li>
            <li className="text-blue-400 text-xl m-2">
              <p className="text-white text-base">Powers thousands of enterprise apps, including mobile apps</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="animate-spin-slow">
            <img src={logo} alt="" className="w-96 md:w-[42rem] animate-pulse"/>
          </div>
        </div>

      </div>
    );
  }
}
 
export default Body;