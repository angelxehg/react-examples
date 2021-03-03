import React, { useState } from 'react';
import Conditional from './sections/conditional';

import './App.css';
import Lists from './sections/lists';
import ListaAutos from './sections/cars';
import Eventos from './sections/events';
import Contador from './sections/contador';
import Formularios from './sections/forms';
import Components from './sections/components';
import LifeCycles from './sections/lifecycles';

function App() {
  const [showLifeCycles, setShowLifeCycles] = useState(true);

  const hideLifeCycles = () => setShowLifeCycles(false);
  return (
    <div className="container-sm pt-5 pb-5">
      <h1>Udemy Curso React <span className="badge bg-secondary">v0.1.3</span></h1>
      {showLifeCycles && <LifeCycles />}
      {showLifeCycles && <button className="btn btn-danger" onClick={() => hideLifeCycles()}>Eliminar</button>}
      <Components />
      <Formularios />
      <Eventos />
      <ListaAutos />
      <Lists />
      <Conditional />
      <Contador />
    </div>
  );
}

export default App;
