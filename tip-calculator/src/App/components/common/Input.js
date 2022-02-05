export default function Input(props) {

  return (
    <div className="flex items-center px-3 bg-secondary-light-cyan-2 rounded
                    hover:ring-2 hover:ring-green-500
                  ">
      { props.icon !== undefined &&
        <div className="px-2">
          {props.icon}
        </div>
      }
      <input type="text"
              id={props.id}
              placeholder={props.placeholder} 
              className="w-full h-12 px-3 py-0.5 bg-inherit text-[24px] text-accent-dark-cyan font-bold text-right 
                        focus:outline-none" />
    </div>
  )
}