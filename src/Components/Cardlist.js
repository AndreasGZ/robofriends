import React from 'react';
import Card from './Card';


// {Javascript}
// Liste mit allen Karten und einem Array, sodass jede Karte einem Roboter entspricht
const Cardlist = ({robots}) => {
  if(true){
    throw new Error('Something went wrong!');
  }
  return (
    <div>
      {
        robots.map((user,i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })
    }
    </div>
  );
}

export default Cardlist;
