import { useState } from "react";
import { ReactComponent as Logo } from './img/logo.svg';
import TipButton from './components/TipButton';
import ResultEntry from './components/ResultEntry';

import validateInt from "./functions/validateInt";
import validateDec from "./functions/validateDec";
import tipPerPerson from './functions/tipPerPerson';
import totalPerPerson from './functions/totalPerPerson';

const initialData = {
  bill: '',
  tip: 0,
  customTip: '',
  people: '',
};

function validateCustomTip(value) {
  if (value > 150) return false;

  return validateInt(value);
}

export default function App() {
  const [data, setData] = useState(initialData);

  let tip = data.tip ? data.tip : data.customTip;
  const tipAmount = tipPerPerson(data.bill, tip, data.people);
  const total = totalPerPerson(data.bill, tip, data.people)

  function handleChange(event) {
    let {name, value} = event.target;
    
    // Here, we check empty string so the input can be emptied
    if ( !(
      (name === 'bill' && (validateDec(value, 12) || value === '') ) ||
      (name === 'people' && (validateInt(value, 4) || value === '') ) ||
      (name === 'customTip' && (validateCustomTip(value) || value === '') ) ||
      (name === 'tip')
      )
    ) return false;

    // Empty custom tip if tip is active
    if ( name === 'tip') {
      setData(prevData => {
        return {
          ...prevData,
          [name]: value,
          customTip: ''
        }
      });
    }

    // Empty tip if custom tip is active
    if (data.customTip !== '') {
      setData(prevData => {
        return {
          ...prevData,
          tip: 0,
        }
      });
    }

    setData(prevData => {
      return {
        ...prevData,
        [name]: value,
      }
    });
  }

  function handleResetButton() {
    setData(initialData)
  }

  const tipButtonValues = [5, 10, 15, 25, 50];
  let tipButtons = tipButtonValues.map(value => {
    return (
      <TipButton
        groupName="tip" 
        value={value} 
        currentChecked={data.tip} 
        onChange={handleChange}
      />
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-secondary-light-cyan-1 font-['Space_Mono'] font-bold shadow-2xl shadow-slate-900 sm:justify-center sm:items-center">
      <div className="flex justify-center items-center py-12">
        <Logo />
      </div>
      <div 
        className="bg-white flex-1 flex flex-col gap-4 rounded-t-3xl p-8 text-slate-600 
                  sm:container sm:flex-none sm:rounded-3xl sm:flex-row md:gap-x-8
                  lg:max-w-5xl"
      >
        {/* Inputs */}
        <div className="flex flex-col gap-4 pb-8 flex-1 justify-evenly sm:justify-between">

          {/* Bill Input */}
          <div className="flex flex-col">
            <label htmlFor="bill" className="mb-2">Bill</label>
            <input 
              type="text" 
              id="bill" 
              name="bill"
              value={data.bill}
              onChange={handleChange}
              className="py-2 pl-12 pr-6 bg-secondary-light-cyan-2 rounded-md text-right text-2xl font-bold text-accent-dark-cyan bg-bill-icon bg-no-repeat bg-scroll bg-px-5"
            />
          </div>

          {/* Tip button group */}
          <div>
            <p className="py-2 mb-1">Select Tip %</p>
            <div 
              className="grid grid-cols-2 gap-4
                        md:grid-cols-3"
            >
              {tipButtons}
              
              {/* Custom tip button */}
              <input 
                type="text" 
                name="customTip"
                placeholder="Custom %" 
                value={data.customTip}
                onChange={handleChange}
                className="py-2 bg-secondary-light-cyan-2 rounded-md font-bold text-2xl text-accent-dark-cyan text-center placeholder:text-accent-dark-cyan placeholder:opacity-70
                          sm:placeholder:text-xl"
              />
            </div>
          </div>

          {/* people Input */}
          <div className="flex flex-col">
            <label htmlFor="people" className="mb-2">Number of People</label>
            <input 
              type="text" 
              id="people" 
              name="people"
              value={data.people}
              onChange={handleChange}
              className="py-2 pl-12 pr-6 bg-secondary-light-cyan-2 rounded-md text-right text-2xl font-bold text-accent-dark-cyan bg-people-icon bg-no-repeat bg-scroll bg-px-5"
            />
          </div>
        </div>

        {/* Results */}
        <div 
          className="flex flex-col gap-6 p-5 bg-accent-dark-cyan rounded-2xl
                    sm:justify-between md:w-1/2 sm:p-8"
        >
          <div className="flex flex-col gap-y-6 py-2 sm:py-4 sm:gap-y-12">
            <ResultEntry
              title="Tip Amount"
              value={!isNaN(tipAmount) ? tipAmount : '0'}
            />
            <ResultEntry 
              title="Total" 
              value={!isNaN(total) ? total : '0'}
            />
          </div>

          <button
            onClick={handleResetButton}
            className="transition bg-primary-cyan rounded-lg py-3 font-bold text-2xl text-accent-dark-cyan hover:bg-secondary-light-cyan-1"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
