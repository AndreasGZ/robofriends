import React from 'react';

// Box zur Suche nach den Robotfriends
// Immer beim triggern des onchange wird die Funktion searchChange ausgeführt
// In myApp ist Searchchange = onSearchChange
const Searchbox = ({searchfield, searchChange}) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default Searchbox;
