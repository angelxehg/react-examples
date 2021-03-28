import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ListsPage from './pages/Lists';
import CarsPage from './pages/Cars';
import EventsPage from './pages/Events';
import ContadorPage from './pages/Contador';
import FormsPage from './pages/Forms';
import ComponentsPage from './pages/Components';
import LifeCyclesPage from './pages/Lifecycles';
import FetchPage from './pages/Fetch';
import LifecyclesUpdatePage from './pages/LifecyclesUpdate';
import BitcoinPage from './pages/Bitcoin';
import ConditionalPage from './pages/Conditional'
import HomePage from './pages/Home';

import './App.css';

function App() {

  const sections = [
    { title: 'Bitcoin', path: "/bitcoin", component: <BitcoinPage /> },
    { title: 'Lifecycles (update)', path: "/lifecyclesupdate", component: <LifecyclesUpdatePage /> },
    { title: 'Fetch', path: "/fetch", component: <FetchPage /> },
    { title: 'Lifecycles', path: "/lifecycles", component: <LifeCyclesPage /> },
    { title: 'Componentes', path: "/components", component: <ComponentsPage /> },
    { title: 'Formularios', path: "/formularios", component: <FormsPage /> },
    { title: 'Eventos', path: "/eventos", component: <EventsPage /> },
    { title: 'Autos', path: "/autos", component: <CarsPage /> },
    { title: 'Listas', path: "/listas", component: <ListsPage /> },
    { title: 'Condicionales', path: "/condicional", component: <ConditionalPage /> },
    { title: 'Contador', path: "/contador", component: <ContadorPage /> },
  ]

  return (
    <Router basename={process.env.PUBLIC_URL}>
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
