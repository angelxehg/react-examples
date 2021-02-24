import React, { useState } from 'react';

const Formularios = () => {

  const [inputName, changeName] = useState('');
  const [inputTwitter, changeTwitter] = useState('@');
  const [inputTerms, changeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ inputName, inputTwitter, inputTerms });
  }

  return <div className="mt-3">
    <h1>Formularios</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="inputName">Nombre</label>
        <input type="text" className="form-control" id="inputName" placeholder="Introduce tu nombre" value={inputName} onChange={e => changeName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="inputTwitter">Twitter</label>
        <input type="text" className="form-control" id="inputTwitter" placeholder="Introduce tu twitter" value={inputTwitter} onChange={e => changeTwitter(e.target.value)} />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="inputTerms" onChange={e => changeTerms(e.target.checked)}
          value={inputTerms} />
        <label className="form-check-label" htmlFor="inputTerms">Aceptar terminos</label>
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  </div>;
}

export default Formularios
