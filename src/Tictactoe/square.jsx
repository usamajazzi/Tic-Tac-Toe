function Square(props) {
    

    const isDisabled = props.value !== null; // if already filled
    return ( 
        <div onClick={!isDisabled? props.onClick:null } className={`border-2 border-white-500 flex justify-center items-center w-32 h-32 ${isDisabled? 'bg-slate-400 cursor-not-allowed': 'hover:bg-cyan-400    '}`}>  
            <h3 className="font-semibold text-2xl">{props.value}</h3>
        </div>
     );
}

export default Square;
