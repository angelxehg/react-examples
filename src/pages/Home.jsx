import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Layout from '../components/layout';

const HomePage = ({ links }) => (
  <Layout>
    <h1>Ejemplos con React <span className="badge bg-secondary">v0.3.0</span></h1>
    <p>Ejercicios de React del curso <b>Aprender React JS</b> de <a href="https://twitter.com/midudev">@midudev</a> </p>
    <nav>
      <ul>
        {links.map(({ title, path }) => <li key={path} >
          <Link to={path}>{title}</Link>
        </li>)}
      </ul>
    </nav>
  </Layout>
)

HomePage.propTypes = {
  links: PropTypes.array
}

export default HomePage;
