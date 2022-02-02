export default function Button(props) {

  return (
    <div className="">
      <input type="radio" name={props.name} id={props.name + props.value}
             className="peer invisible"
      />
      <label htmlFor={props.name + props.value}
             className="flex justify-center items-center h-16 text-3xl rounded-xl
                      peer-checked:bg-slate-500">
        {props.value}%
      </label>
    </div>
  );
  
}