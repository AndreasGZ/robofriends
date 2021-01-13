import React from 'react';

// Componente, damit der untere Bereich Scrollable ist
// Neben Props und State, gibt es noch children
// Jede Componente in react wird ein Props und beinhaltet children
// mit props.children werden die Selbsterzeugten Components angesprochen
// {javascrip{objekt mit css styles}}-> {{}}
const Scroll = (props) => {
  console.log(props);
  return(
    <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
}

export default Scroll;
