import React, { Component, } from 'react';
import PropTypes from "prop-types"
import './App.css';

class Title extends Component {
  render() {
    const {text} = this.props;
    return <h1>{text}</h1>;
  }
}

Title.propTypes = {
  text: PropTypes.string
}

Title.defaultProps = {
  text: 'Título por defecto'
}

class Contador extends Component {
  constructor() {
    super();
    this.state = {cuenta: 1}
  }

  render() {
    return <span>Cuenta: {this.state.cuenta}</span>;
  }
}

function App() {
  return (
    <div className="App">
      <Title text="Hola mundo"/>
      <Contador/>
    </div>
  );
}

export default App;
