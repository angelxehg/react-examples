import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

class Hello extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    return <p>{this.props.title}</p>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Hola mundo"/>
      </header>
    </div>
  );
}

export default App;
