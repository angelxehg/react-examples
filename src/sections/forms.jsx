import React from 'react';

const Formularios = () => {
  
  const handleClick = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const twitter = document.getElementById('twitter').value;
    console.log({name, twitter});
  }

  return <>
    <h1>Formularios</h1>
    <form>
      <p>
        <label htmlFor="name">Nombre:</label>
        <input id="name" type="text" placeholder="Introduce tu nombre"/>
      </p>
      <p>
        <label htmlFor="twitter">Twitter:</label>
        <input id="twitter" type="text" placeholder="Introduce tu twitter"/>
      </p>
      <button onClick={handleClick}>Enviar</button>
    </form>
  </>;
}

export default Formularios
