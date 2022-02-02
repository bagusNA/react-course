import Input from './common/Input';
import Result from './Result';
import Button from './common/Button';

import {ReactComponent as IconDollar} from './common/icons/icon-dollar.svg';
import {ReactComponent as IconPeople} from './common/icons/icon-person.svg';


export default function Body() {

  return (
    <div className="flex-1 container p-8 bg-white rounded-t-3xl">
      <div className="mb-8">
        <Input title="Bill" icon={<IconDollar />} placeholder="0.00"/>
        <div className="py-10">
          <p className="pb-4 text-xl">Select Tip %</p>
          <div className="grid grid-cols-2 gap-4">
            <Button name="tip" value="5"/>
            <Button name="tip" value="10"/>
            <Button name="tip" value="15"/>
            <Button name="tip" value="25"/>
            <Button name="tip" value="50"/>
            {/* <Button name="tip" value="custom"/> */}
          </div>
        </div>
        <Input title="Number of People" icon={<IconPeople/>} placeholder="0"/>
      </div>
      <Result />
    </div>
  );
}