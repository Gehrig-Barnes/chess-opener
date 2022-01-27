import '../css/ChessPage.css'
import React, {useState} from 'react';
import OpeningsContainer from './OpeningsContainer'
import Search from './Search'


function ChessPage({ openings, handleRemoveCard }) {
  const [search, setSearch] = useState('')
  
  
  function handleSearch(e){
    const value = e.target.value;
    setSearch(value)
  }

function filterSearch(){
  const filterSearch = openings.filter((opening) => {
    return opening.name.toLowerCase().includes(search);
  })
  return filterSearch;
}

  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <OpeningsContainer openings={filterSearch()} handleRemoveCard={handleRemoveCard} />
    </div>
  );
}

export default ChessPage;