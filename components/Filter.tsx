const Filter = ({ filter, types, setFilter }: any) => {
    const unselected: string = 'text-2xl m-2 p-4 hover:text-white hover:shadow-[inset_10rem_0_0_0] hover:shadow-black dark:hover:shadow-white dark:hover:text-black duration-[200ms,200ms] transition-[color,box-shadow] duration-1000'
    const selected: string = 'text-2xl m-2 p-4 text-white bg-black dark:bg-white dark:text-black'
    return (
        <div className="font-['Calistoga']">
            <div className="hidden sm:block">
            {types.map((type: string, index: number) => (
                <button key={index} 
                className={filter === type ? selected : unselected}
                onClick={() => setFilter(type)}>{type}</button>
            ))}
            </div>
          
            <select className="sm:hidden rounded text-2xl dark:bg-gray-800" onChange={(e) => {setFilter(e.target.value)}}>
            {types.map((type: string, index: number) => (
                <option key={index} className='m-2 p-3 rounded' value={type}>{type}</option>
            ))}
            </select>
            
        </div>
    );
    };

export default Filter;