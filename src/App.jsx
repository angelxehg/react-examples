import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
import Conditional from './sections/conditional'

import './App.css';

function App() {

  const sections = [
    { title: 'Bitcoin', path: "/bitcoin" },
    { title: 'Lifecycles (update)', path: "/lifecyclesupdate" },
    { title: 'Fetch', path: "/fetch" },
    { title: 'Lifecycles', path: "/lifecycles" },
    { title: 'Componentes', path: "/components" },
    { title: 'Formularios', path: "/formularios" },
    { title: 'Eventos', path: "/eventos" },
    { title: 'Autos', path: "/autos" },
    { title: 'Listas', path: "/listas" },
    { title: 'Condicionales', path: "/condicional" },
    { title: 'Contador', path: "/contador" },
  ]

  return (
    <div className="container-sm pt-5 pb-5">
      <h1>Ejemplos con React <span className="badge bg-secondary">v0.2.0</span></h1>
      <p>Ejercicios de React del curso <b>Aprender React JS</b> de <a href="https://twitter.com/midudev">@midudev</a> </p>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              {sections.map(({ title, path }) => <li key={path} >
                <Link to={path}>{title}</Link>
              </li>)}
            </ul>
          </nav>
          <Switch>
            <Route path="/bitcoin">
              <BitcoinPage />
            </Route>
            <Route path="/lifecyclesupdate">
              <LifecyclesUpdate />
            </Route>
            <Route path="/fetch">
              <FetchExample />
            </Route>
            <Route path="/lifecycles">
              <LifeCycles />
            </Route>
            <Route path="/components">
              <Components />
            </Route>
            <Route path="/formularios">
              <Formularios />
            </Route>
            <Route path="/eventos">
              <Eventos />
            </Route>
            <Route path="/autos">
              <ListaAutos />
            </Route>
            <Route path="/listas">
              <Lists />
            </Route>
            <Route path="/condicional">
              <Conditional />
            </Route>
            <Route path="/contador">
              <Contador />
            </Route>
            <Route path="/">
              <h2>Hola mundo</h2>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
