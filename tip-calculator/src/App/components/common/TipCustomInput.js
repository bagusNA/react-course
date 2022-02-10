// import { useState } from "react";
// import validateNumber from "../../functions/validateNumber";

export default function TipCustomInput(props) {

  // const [inputValue, setInputValue] = useState('');

  // const handleInput = e => {
    // let input = validateNumber(e.target.value, 3, props.noDecimal)
    // if ( input !== false && input <= 100 ) {
    //   setInputValue(input);
  //   }
  // }

  return (
    <div className="flex justify-center items-center">
      <input type="text"
              id={props.id}
              placeholder={props.placeholder}
              // value={inputValue}
              // onInput={e => handleInput(e)}
              className="h-full w-full bg-secondary-light-cyan-2 text-3xl rounded-lg text-accent-dark-cyan font-bold text-center
                        focus:outline-none
                        lg:text-3xl" />
    </div>
  )
}