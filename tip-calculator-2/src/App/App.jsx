import { ReactComponent as Logo } from './img/logo.svg';
import TipButton from './components/TipButton';
import ResultEntry from './components/ResultEntry';

export default function App() {
  const tipButtonValues = [5, 10, 15, 25, 50];
  let tipButtons = tipButtonValues.map( value => {
    return (
      <TipButton groupName="tip" value={value}/>
    );
  })

// TODO: Calculator state & logic

  return (
    <div className="min-h-screen flex flex-col bg-secondary-light-cyan-1 font-['Space_Mono'] font-bold">
      <div className="flex justify-center items-center py-12">
        <Logo />
      </div>
      <div className="bg-white flex-1 flex flex-col rounded-t-3xl p-8">
        {/* Inputs */}
        <div className="flex flex-col gap-4 flex-1">

          {/* Bill Input */}
          <div className="flex flex-col">
            <label htmlFor="bill" className="mb-2">Bill</label>
            <input 
              type="text" 
              id="bill" 
              name="bill"
              className="py-2 pl-12 pr-6 bg-secondary-light-cyan-2 rounded-md text-right text-2xl font-bold text-accent-dark-cyan bg-bill-icon bg-no-repeat bg-scroll bg-px-5"
            />
          </div>

          {/* Tip button group */}
          <div>
            <p className="py-2 mb-1">Select Tip %</p>
            <div className="grid grid-cols-2 gap-4">
              {tipButtons}
              
              {/* Custom tip button */}
              <input 
                type="text" 
                name="tip-custom"
                placeholder="Custom %" 
                className="py-2 bg-secondary-light-cyan-2 rounded-md font-bold text-2xl text-accent-dark-cyan text-center placeholder:text-accent-dark-cyan placeholder:opacity-70"
              />
            </div>
          </div>

          {/* nPeople Input */}
          <div className="flex flex-col">
            <label htmlFor="n-people" className="mb-2">Number of People</label>
            <input type="text" id="n-people" name="n-people"
              className="py-2 pl-12 pr-6 bg-secondary-light-cyan-2 rounded-md text-right text-2xl font-bold text-accent-dark-cyan bg-people-icon bg-no-repeat bg-scroll bg-px-5"
            />
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-6 p-5 bg-accent-dark-cyan rounded-2xl">
          <div className="flex flex-col gap-y-6 py-2">
            <ResultEntry title="Tip Amount" value={7.27}/>
            <ResultEntry title="Total" value={32.79}/>
          </div>

          <button className="bg-primary-cyan rounded-lg p-4">
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
