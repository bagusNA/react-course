export default function ResetButton(props) {

  return (
    <div className="flex justify-center items-center h-16 w-full text-2xl rounded-lg bg-primary-cyan text-accent-dark-cyan
                    hover:bg-secondary-light-cyan-1 hover:cursor-pointer
                    peer-checked:bg-accent-dark-cyan peer-checked:text-white">
      {props.value}
    </div>
  );
  
}