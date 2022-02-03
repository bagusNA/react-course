export default function ResultEntry(props) {
  return (
    <div className="flex w-full py-2">
      <p className="font-bold">
        {props.title}
        <span className="font-normal text-slate-300">
          <br />
          / person
        </span>
      </p>
      <p className="flex-1 text-right text-3xl font-bold text-primary-cyan">
        {props.value}
      </p>
    </div>
  )
}