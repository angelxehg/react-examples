import React from "react";
import PropTypes from "prop-types"

import Layout, { BackToHome } from '../components/layout';
import autos from "../data/autos";

const Auto = ({ car }) => {
  return <li>
    <p><strong>Nombre:</strong> {car.name}</p>
    <p><strong>Marca:</strong> {car.brand}</p>
  </li>
}

Auto.propTypes = {
  car: PropTypes.object,
}

const CarsPage = () => {
  return <Layout>
    <BackToHome/>
    <h2>Lista de autos</h2>
    <ul>
      {autos.map(a => <Auto
        key={a.id}
        car={a}
      />)}
    </ul>
  </Layout>
};

export default CarsPage;
