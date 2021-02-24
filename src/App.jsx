import React from 'react';
import Conditional from './sections/conditional';

import './App.css';
import Lists from './sections/lists';
import ListaAutos from './sections/cars';
import Eventos from './sections/events';

// class Title extends Component {
//   render() {
//     const { text } = this.props;
//     return <h1>{text}</h1>;
//   }
// }

// Title.propTypes = {
//   text: PropTypes.string
// }

// Title.defaultProps = {
//   text: 'Título por defecto'
// }

// class Contador extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {cuenta: this.props.inicial};
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({cuenta: this.state.cuenta + 1});
//     }, 1000);
//   }

//   render() {
//     return <span>Cuenta: {this.state.cuenta}</span>
//   }
// }

// Contador.propTypes = {
//   inicial: PropTypes.number
// }

function App() {
  return (
    <div className="container-sm pt-5 pb-5">
      <Eventos/>
      <ListaAutos/>
      <Lists/>
      <Conditional/>
    </div>
  );
}

export default App;
