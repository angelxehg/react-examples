import React from "react";
import PropTypes from "prop-types"

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

const ListaAutos = () => {
  return <div className="mt-3">
    <h1>Lista de autos</h1>
    <ul>
      {autos.map(a => <Auto
        key={a.id}
        car={a}
      />)}
    </ul>
  </div>
};

export default ListaAutos;
