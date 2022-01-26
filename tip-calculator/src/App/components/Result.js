import ResultEntry from './common/ResultEntry';

export default function Result() {
  return (
    <div className="py-6 px-6 bg-slate-500 text-white rounded-xl">
      <ResultEntry title="Tip Amount" value="$100.00"/>
      <ResultEntry title="Total" value="$10.00"/>
    </div>
  );
}