import '../css/Search.css'
import React from 'react';

function Search({ handleSearch }) {
    return (
        <div class="outerBorder">
            <div class="border">
                <input
                    class="input"
                    onChange={handleSearch}
                    placeholder="  Search..."/>
                <i />
            </div>
        </div>
    )
}

export default Search; 