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
    <div className="container-sm pt-2 pb-2">
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
