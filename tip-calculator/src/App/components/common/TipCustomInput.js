export default function TipCustomInput(props) {

  return (
    <div className="flex justify-center items-center">
      <input type="text"
              id={props.id}
              placeholder={props.placeholder} 
              className="h-full w-full bg-secondary-light-cyan-2 text-3xl rounded-lg text-accent-dark-cyan font-bold text-center
                        focus:outline-none
                        md:text-xl
                        lg:text-3xl" />
    </div>
  )
}