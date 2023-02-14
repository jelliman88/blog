const Filter = ({ types, setFilter }: any) => {
    return (
        <div className="font-['Calistoga']">
            <div className="hidden sm:block">
            {types.map((type: string, index: number) => (
                <button key={index} className='text-2xl m-2 p-3 rounded' onClick={() => setFilter(type)}>{type}</button>
            ))}
            </div>
          
            <select className="sm:hidden rounded text-2xl" onChange={(e) => {setFilter(e.target.value)}}>
            {types.map((type: string, index: number) => (
                <option key={index} className='m-2 p-3 rounded' value={type}>{type}</option>
            ))}
            </select>
            
        </div>
    );
    };

export default Filter;