import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Conditional from './sections/conditional';

import './App.css';
import Lists from './sections/lists';
import ListaAutos from './sections/cars';
import Eventos from './sections/events';
import Contador from './sections/contador';
import Formularios from './sections/forms';
import Components from './sections/components';
import LifeCycles from './sections/lifecycles';
import FetchExample from './sections/fetch';
import LifecyclesUpdate from './sections/lifecyclesupdate';
import BitcoinPage from './sections/bitcoin';

function App() {
  const [showLifeCycles, setShowLifeCycles] = useState(true);

  const hideLifeCycles = () => setShowLifeCycles(false);
  return (
    <div className="container-sm pt-5 pb-5">
      <h1>Ejemplos con React <span className="badge bg-secondary">v0.2.0</span></h1>
      <p>Ejercicios de React del curso <b>Aprender React JS</b> de <a href="https://twitter.com/midudev">@midudev</a> </p>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route path="/users">
              <h1>Users</h1>
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </div>
      </Router>
      <BitcoinPage />
      <LifecyclesUpdate />
      <FetchExample />
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
