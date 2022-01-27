import React from 'react';

function Search({handleSearch}){
    return (
        <div>
            <div >
                <div >
                    <input onChange={handleSearch}/>
                    <i />
                </div>
            </div>
               
        </div>
    )
}

export default Search; 