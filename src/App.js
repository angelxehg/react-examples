import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class Hello extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    return <p>{this.props.title}</p>;
  }
}

class Text extends Component {
  
  render() {
    // eslint-disable-next-line react/prop-types
    const mostrarBoolean = this.props.boolean ? 'Cierto':'Falso';
    // eslint-disable-next-line react/prop-types
    return <>
      {/* eslint-disable-next-line react/prop-types*/}
      <p>{this.props.text}</p>
      {/* eslint-disable-next-line react/prop-types*/}
      <p>{this.props.number}</p>
      <p>{mostrarBoolean}</p>
    </>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Hola mundo" />
        <Text text="Texto" number={1} boolean={false} />
      </header>
    </div>
  );
}

export default App;
