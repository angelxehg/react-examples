import React, { useState } from 'react';

const Formularios = () => {

  const [inputName, setInputName] = useState();
  const [inputTwitter, setInputTwitter] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const name = inputName.value;
    const twitter = inputTwitter.value;
    console.log({name, twitter});
  }

  const handleChange = (e) => {
    console.log(e.target.checked);
  }

  return <>
    <h1>Formularios</h1>
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="name">Nombre:</label>
        <input id="name" type="text" placeholder="Introduce tu nombre" ref={setInputName}/>
      </p>
      <p>
        <label htmlFor="twitter">Twitter:</label>
        <input id="twitter" type="text" placeholder="Introduce tu twitter" ref={setInputTwitter}/>
      </p>
      <p>
        <label>
          <input type="checkbox" onChange={handleChange}/>Aceptar terminos
        </label>
      </p>
      <button>Enviar</button>
    </form>
  </>;
}

export default Formularios
