import React, { Component, useState } from 'react';
import PropTypes from "prop-types"
import './App.css';

class Title extends Component {
  render() {
    const { text } = this.props;
    return <h1>{text}</h1>;
  }
}

Title.propTypes = {
  text: PropTypes.string
}

Title.defaultProps = {
  text: 'Título por defecto'
}

function Contador() {

  const [cuenta, setCuenta] = useState(1);

  return (
    <button onClick={() => setCuenta(cuenta + 1)}>
      Clicks: {cuenta}
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <Title text="Hola mundo" />
      <Contador />
    </div>
  );
}

export default App;
