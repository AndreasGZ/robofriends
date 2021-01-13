import React, {Component} from 'react';
import './Hello.css';


class Hello extends Component{
  render(){
    return (
      <div className='f1 tc'>
        <h1>Hello World</h1>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

// Eigentlich ist wird hier mit Funktionen gearbeitet, unteres Beispiel funktioniert ebenfalls
// const Hello = (props) => {
// return (
//   <div className='f1 tc'>
//     <h1>Hello World</h1>
//     <p>{props.greeting}</p>
//   </div>
// );
// }


export default Hello;
