import React, { useState } from 'react';

const Formularios = () => {

  const [inputName, setInputName] = useState();
  const [inputTwitter, setInputTwitter] = useState();
  
  const handleClick = (e) => {
    e.preventDefault();
    const name = inputName.value;
    const twitter = inputTwitter.value;
    console.log({name, twitter});
  }

  return <>
    <h1>Formularios</h1>
    <form>
      <p>
        <label htmlFor="name">Nombre:</label>
        <input id="name" type="text" placeholder="Introduce tu nombre" ref={setInputName}/>
      </p>
      <p>
        <label htmlFor="twitter">Twitter:</label>
        <input id="twitter" type="text" placeholder="Introduce tu twitter" ref={setInputTwitter}/>
      </p>
      <button onClick={handleClick}>Enviar</button>
    </form>
  </>;
}

export default Formularios
