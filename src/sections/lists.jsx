import React from "react";

const Lists = () => {
  const numeros = [1, 1, 3, 4, 5];
  return <div className="mt-3">
    <h1>Listas</h1>
    {numeros.map((n, i) => {
      return <p key={i} >Soy el número {n}</p>;
    })}
  </div>
}

export default Lists
