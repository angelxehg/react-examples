import React from 'react';

const Eventos = () => {
  const handleClick = (e) => {
    console.log(e); // Evento sintetico
    console.log(e.nativeEvent); // Evento nativo
    alert('Me diste clic')
  }
  return <>
    <h1>Eventos</h1>
    <button className="btn btn-primary" onClick={handleClick}>
      Dame clic
    </button>
  </>;
}

export default Eventos;
