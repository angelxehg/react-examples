import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const HomePage = ({ links }) => {
  return <div className="mt-5">
    <h2>Enlaces</h2>
    <nav>
      <ul>
        {links.map(({ title, path }) => <li key={path} >
          <Link to={path}>{title}</Link>
        </li>)}
      </ul>
    </nav>
  </div>
};

HomePage.propTypes = {
  links: PropTypes.array
}

export default HomePage;
