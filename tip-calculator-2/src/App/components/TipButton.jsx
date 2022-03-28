import React from 'react';

function TipButton(props) {
  return ( 
    <div className="flex">
      <input type="radio" name={props.groupName} id={props.groupName + "-" + props.value.toString()} className="peer hidden" />
      <label 
        htmlFor={props.groupName + "-" + props.value.toString()} 
        className="w-full py-2 bg-accent-dark-cyan rounded-md text-3xl text-white text-center hover:bg-primary-cyan hover:text-accent-dark-cyan hover:cursor-pointer
        peer-checked:bg-primary-cyan peer-checked:text-accent-dark-cyan"
      >
        {props.value}%
      </label>
    </div>
  );
}

export default TipButton;