import Input from './common/Input';
import Result from './Result';
import Button from './common/Button';
import TipCustomInput from './common/TipCustomInput';

import {ReactComponent as IconDollar} from './common/icons/icon-dollar.svg';
import {ReactComponent as IconPeople} from './common/icons/icon-person.svg';

export default function Body() {

  return (
    <div className="container px-12 py-8 bg-white rounded-t-3xl
                    md:flex md:gap-16 md:rounded-3xl
                    2xl:w-4/5">
      <div className="mb-8 md:flex-1">
        <label htmlFor="Bill">
          <p className="text-xl py-3 text-slate-600">Bill <br /></p>
        </label>
        <Input id="Bill" icon={<IconDollar />} placeholder="0.00"/>
        <div className="py-10">
          <p className="text-xl text-slate-600 pb-4">Select Tip %</p>
          <div className="grid grid-cols-2 gap-4
                          lg:grid-cols-3">
            <Button name="tip" value="5%"/>
            <Button name="tip" value="10%"/>
            <Button name="tip" value="15%"/>
            <Button name="tip" value="25%"/>
            <Button name="tip" value="50%"/>
            <TipCustomInput id="customTip" placeholder="%" />
          </div>
        </div>
        <label htmlFor="nPeople">
          <p className="text-xl py-3 text-slate-600">Number of People <br /></p>
        </label>
        <Input id="nPeople" icon={<IconPeople/>} placeholder="0" noDecimal={true}/>
      </div>
      <Result />
    </div>
  );
}