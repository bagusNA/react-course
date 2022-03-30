import React from 'react';

function TipButton(props) {
  const {groupName, value, currentChecked, onChange} = props;

  return ( 
    <div className="flex">
      <input 
        type="radio" 
        name={groupName} 
        id={groupName + "-" + value.toString()} 
        value={value}
        checked={parseInt(currentChecked) === parseInt(value)}
        onChange={onChange}
        className="peer hidden"
      />
      <label 
        htmlFor={groupName + "-" + value.toString()} 
        className="transition w-full py-2 bg-accent-dark-cyan rounded-md text-3xl text-white text-center hover:bg-secondary-light-cyan-1 hover:text-accent-dark-cyan hover:cursor-pointer
        peer-checked:bg-primary-cyan peer-checked:text-accent-dark-cyan"
      >
        {value.toString()}%
      </label>
    </div>
  );
}

export default TipButton;