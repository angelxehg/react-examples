import { React } from "react";
import autos from "../data/autos"

const ListaAutos = () => {
  return <>
    <h1>Lista de autos</h1>
    <ul>
      {autos.map(auto => {
        return <li key={auto.id}>
          <p><strong>Nombre:</strong> {auto.name}</p>
          <p><strong>Marca:</strong> {auto.brand}</p>
        </li>
      })}
    </ul>
  </>
};

export default ListaAutos;
