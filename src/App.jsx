import React from 'react';
import Conditional from './sections/conditional';

import './App.css';
import Lists from './sections/lists';
import ListaAutos from './sections/cars';
import Eventos from './sections/events';
import Contador from './sections/contador';
import Formularios from './sections/forms';

function App() {
  return (
    <div className="container-sm pt-5 pb-5">
      <h1>Udemy Curso React <span className="badge bg-secondary">v0.1.3</span></h1>
      <Formularios/>
      <Eventos/>
      <ListaAutos/>
      <Lists/>
      <Conditional/>
      <Contador/>
    </div>
  );
}

export default App;
