import { ReactComponent as Logo} from '../images/logo.svg';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-secondary-light-cyan-1 font-['Space_Mono']">
      <div className="flex justify-center items-center py-12">
        <Logo />
      </div>
      <div className="bg-white flex-1 flex flex-col rounded-t-3xl p-8">
        {/* Inputs */}
        <div className="flex-1">
          <div className="flex flex-col">
            <label htmlFor="bill">Bill</label>
            <div className="flex py-3 bg-secondary-light-cyan-2 rounded-md">
              Icon
              <input type="text" id="bill" name="bill"
                className="flex-1 bg-secondary-light-cyan-2"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-6 p-5 bg-accent-dark-cyan rounded-2xl">
          <div className="py-2">
            <h1>Results</h1>
            <h1>Results</h1>
          </div>

          <button className="bg-primary-cyan rounded-lg p-4">
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
