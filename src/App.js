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
    const mapped = this.props.arrayOfNumbers.map(n => n * 2);
    return <>
      <p>{mapped.join(', ')}</p>
      {/* eslint-disable-next-line react/prop-types*/}
      <p>{this.props.objectWithKey.key}</p>
    </>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Hola mundo" />
        <Text
          arrayOfNumbers={[1,2,3,4,5]}
          objectWithKey={{key: 'value'}}
          isActivated={false}
          number={1}
          text="Texto"
        />
      </header>
    </div>
  );
}

export default App;
