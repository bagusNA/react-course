export default function Button(props) {

  return (
    <div className="">
      <input type="radio" name={props.name} id={props.name + props.value}
             className="peer invisible"
      />
      <label htmlFor={props.name + props.value}
             className="flex justify-center items-center h-16 text-3xl rounded-lg bg-accent-dark-cyan text-white
                      hover:bg-primary-cyan hover:text-black hover:cursor-pointer
                      peer-checked:bg-primary-cyan peer-checked:text-black">
        {props.value}
      </label>
    </div>
  );
  
}