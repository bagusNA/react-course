export default function Button(props) {

  let className = "flex justify-center items-center h-16 text-3xl rounded-xl ";

  if ( props.value !== "custom" ) {
    className += "text-white bg-accent-dark-cyan hover:bg-primary-cyan ";
  } else {
    className += "text-slate-200 bg-secondary-light-cyan-2";
  }

  // return (
  //   <div className={className}>
  //     <p>
  //       {props.value}
  //       {props.value !== "custom" ? '%' : ''}
  //     </p>
  //   </div>
  // );

  return (
    <label className={className}>
      <input type="radio" name={props.name} className="checked:text-black"/>
      <p>{props.value}</p>
    </label>
  )
}