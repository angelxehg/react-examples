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
  return <div className="mt-5">
    <h2>Lista de autos</h2>
    <ul>
      {autos.map(a => <Auto
        key={a.id}
        car={a}
      />)}
    </ul>
  </div>
};

export default ListaAutos;
