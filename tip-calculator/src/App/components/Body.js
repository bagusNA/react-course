import Input from './common/Input';
import Result from './Result';

export default function Body() {
  return (
    <div className="flex-1 container p-8 bg-white rounded-t-3xl">
      <div>
        <Input title="Bill" icon="$" placeholder="0.00"/>
        <div>
          <p>Select Tip %</p>

        </div>
        <Input title="Number of People" icon="@" placeholder="0"/>
      </div>
      <Result />
    </div>
  );
}