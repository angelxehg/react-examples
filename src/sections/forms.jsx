import React, { useState } from 'react';

const Formularios = () => {

  const [inputName, changeName] = useState('');
  const [inputTwitter, changeTwitter] = useState('@');
  const [inputTerms, changeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({inputName, inputTwitter, inputTerms});
  }

  return <>
    <h1>Formularios</h1>
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          type="text"
          placeholder="Introduce tu nombre"
          value={inputName}
          onChange={e => changeName(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="twitter">Twitter:</label>
        <input
          id="twitter"
          type="text"
          placeholder="Introduce tu twitter"
          value={inputTwitter}
          onChange={e => changeTwitter(e.target.value)}
        />
      </p>
      <p>
        <label>
          <input
            type="checkbox"
            onChange={e => changeTerms(e.target.checked)}
            value={inputTerms}
          />Aceptar terminos
        </label>
      </p>
      <button>Enviar</button>
    </form>
  </>;
}

export default Formularios
