import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
import HomePage from './pages/Home';

function App() {

  const sections = [
    { title: 'Bitcoin', path: "/bitcoin", component: <BitcoinPage /> },
    { title: 'Lifecycles (update)', path: "/lifecyclesupdate", component: <LifecyclesUpdate /> },
    { title: 'Fetch', path: "/fetch", component: <FetchExample /> },
    { title: 'Lifecycles', path: "/lifecycles", component: <LifeCycles /> },
    { title: 'Componentes', path: "/components", component: <Components /> },
    { title: 'Formularios', path: "/formularios", component: <Formularios /> },
    { title: 'Eventos', path: "/eventos", component: <Eventos /> },
    { title: 'Autos', path: "/autos", component: <ListaAutos /> },
    { title: 'Listas', path: "/listas", component: <Lists /> },
    { title: 'Condicionales', path: "/condicional", component: <Conditional /> },
    { title: 'Contador', path: "/contador", component: <Contador /> },
  ]

  return (
    <div className="container-sm pt-5 pb-5">
      <h1>Ejemplos con React <span className="badge bg-secondary">v0.2.0</span></h1>
      <p>Ejercicios de React del curso <b>Aprender React JS</b> de <a href="https://twitter.com/midudev">@midudev</a> </p>
      <Router>
        <Switch>
          {sections.map(({ component, path }) => <Route key={path} path={path} >
            {component}
          </Route>)}
          <Route path="/">
            <HomePage links={sections}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
