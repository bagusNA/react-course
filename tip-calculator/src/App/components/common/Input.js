export default function Input(props) {
  return (
    <div>
      <label>
        {props.title} <br />
        <div className="flex items-center  pl-6 bg-slate-200 rounded">
          <p className="font-bold text-slate-400">{props.icon}</p>
          <input type="text"
                 placeholder={props.placeholder} 
                 className="w-full h-12 px-6 py-0.5 bg-slate-200 text-xl font-bold text-right focus:outline-none" />
        </div>
      </label>
    </div>
  )
}