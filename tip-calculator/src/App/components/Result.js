import ResultEntry from './common/ResultEntry';
import ResetButton from './common/ResetButton';

export default function Result() {
  return (
    <div className="p-6 bg-accent-dark-cyan text-white rounded-xl flex flex-col gap-y-4
                   md:w-1/2 md:flex md:flex-col md:p-12">
      <div className="flex flex-col gap-y-4 md:gap-y-10">
        <ResultEntry title="Tip Amount" value="$100.00"/>
        <ResultEntry title="Total" value="$10.00"/>
      </div>
      <div className="flex-1 flex flex-col justify-end">
        <ResetButton value="RESET" />
      </div>
    </div>
  );
}