export default function ResultEntry(props) {
  return (
    <div className="flex w-full py-2">
      <p className="font-bold text-lg">
        {props.title}
        <span className="font-normal text-base text-slate-300">
          <br />
          / person
        </span>
      </p>
      <p className="flex-1 text-right text-4xl lg:text-5xl font-bold text-primary-cyan
                    md:flex md:items-center md:justify-end">
        {props.value}
      </p>
    </div>
  )
}