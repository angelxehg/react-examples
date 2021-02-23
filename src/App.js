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

function App() {
  return (
    <div className="App">
      <Title text="Hola mundo"/>
    </div>
  );
}

export default App;
