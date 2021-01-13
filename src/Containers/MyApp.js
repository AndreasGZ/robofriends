import React, {Component}  from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './MyApp.css';

// Dies ist ein SmartComponent, anders als die Kinder

// Mounting, by refresh wird diese Componente ind das div id=root eingefügt >> Start der MyApp
// Constuctor, ComponentWillMount, Render, ComponentDidMount vorhanden?
// Updating -> ComponentWillReceiveProps, shouldComponentUpdate, ComponentWillUpdate, Render, ComponentDidUpdate
// Unmounting -> Componente von der Seite entfernen
// Diese Funktionen nennt man Life-Cycle-Hooks

// Elternelement, damit alle Componenten vereint sind und dann nur eine Componente übergeben wird
// State beschreibt unser Objekt und kann verändert werden
// Props sind einfache Sachen, die aus State kommen
// State >> Props
class MyApp extends Component{
  constructor(){
    // Super wird immer gebraucht
    super()
    // Hier wird der State beschrieben
    this.state = {
      robots: [],
      searchfield: ''
    }
    // console.log('Construct');
  }

  componentDidMount() {
    //Window Methode-> Request to Server
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
    // console.log('check');
    // State wird upgedated -> Es wird anschließend nochmal gerendert

    // console.log('DidMount');
  }

// Funktion zur Kommunikation mit der Searchbox
  onSearchChange = (event) => {
    // State updaten
    this.setState({searchfield: event.target.value});
    // Ausgabe des Event Values (gedrückte Taste)
      // console.log(event.target.value);

  }

  render(){
    // destructoring
    const {robots, searchfield} = this.state;
    // Filter durch das Robotsarray.
    // Checken, ob das ArrayElement die Eingabe aus dem Searchfield enthält
    // Gib nur die Robots aus, die die Suche beinhalten
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    // Wenn robots === 0, dann (h1) ansonsten (div ...)
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <Searchbox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <Cardlist robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    // console.log('Render');
  }
}

export default MyApp;
