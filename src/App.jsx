import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Lists from './pages/lists';
import ListaAutos from './pages/cars';
import Eventos from './pages/events';
import Contador from './pages/contador';
import Formularios from './pages/forms';
import Components from './pages/components';
import LifeCycles from './pages/lifecycles';
import FetchExample from './pages/fetch';
import LifecyclesUpdate from './pages/lifecyclesupdate';
import BitcoinPage from './pages/Bitcoin';
import Conditional from './pages/conditional'
import HomePage from './pages/Home';

import './App.css';

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
    <Router>
      <Switch>
        {sections.map(({ component, path }) => <Route key={path} path={path} >
          {component}
        </Route>)}
        <Route path="/">
          <HomePage links={sections} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
