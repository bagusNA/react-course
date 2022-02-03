export default function ResetButton(props) {

  return (
    <div className="flex justify-center items-center h-16 text-3xl rounded-lg bg-primary-cyan text-black
                    hover:bg-accent-dark-cyan hover:text-white
                    peer-checked:bg-accent-dark-cyan peer-checked:text-white">
      {props.value}
    </div>
  );
  
}