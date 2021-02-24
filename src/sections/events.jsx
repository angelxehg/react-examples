import React from 'react';

const Eventos = () => {
  return <>
    <h1>Eventos</h1>
    <button className="btn btn-primary" onClick={() => alert('Me diste clic')}>
      Dame clic
    </button>
  </>;
}

export default Eventos;
