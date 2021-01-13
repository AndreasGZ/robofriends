import React, {Component} from 'react';

class ErrorBoundry extends Component{
  // Zugriff auf Kindelemente
  constructor(props){
    super(props);
    this.state = {
      hasError: false
    }
  }

// Was passiert, wenn Fehler gecatched wird?
  componentDidCatch(error, info){
    this.setState({hasError: true});
  }

  render(){
    if(this.state.hasError){
      return (
        <h1>Ooooops. That is not good!</h1>
      );
    }
    // Wenn kein Error, dann Kind ausgeben
    return this.props.children;
  }
}

export default ErrorBoundry;
