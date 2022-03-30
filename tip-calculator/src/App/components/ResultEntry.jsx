function ResultEntry(props) {
  return ( 
    <div className="flex items-center flex-wrap">
      <p className="flex-1 text-white">
        {props.title} <br />
        <span className="text-slate-500 text-sm">/ person</span>
      </p>
      <p className="text-primary-cyan text-4xl font-bold lg:text-5xl">${props.value.toString()}</p>
    </div>
  );
}

export default ResultEntry;