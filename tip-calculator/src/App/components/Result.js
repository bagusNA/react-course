import ResultEntry from './common/ResultEntry';
import ResetButton from './common/ResetButton';

export default function Result() {
  return (
    <div className="py-6 px-6 bg-accent-dark-cyan text-white rounded-xl">
      <ResultEntry title="Tip Amount" value="$100.00"/>
      <ResultEntry title="Total" value="$10.00"/>
      <ResetButton value="RESET" />
    </div>
  );
}