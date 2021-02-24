import React, { useState } from "react";

const LoginButton = () => {
  return <button>Iniciar sesión</button>;
}

const LogoutButton = () => {
  return <div className="mt-3">
    <p>Bienvenido, usuario</p>
    <button>Cerrar sesión</button>
  </div>;
}

const Conditional = () => {
  const [isLoggedIn] = useState(false);

  return (<div className="mt-3">
    <h1>Condicional Rendering</h1>
    {isLoggedIn ? <LogoutButton/> : <LoginButton/> }
  </div>);
}

export default Conditional;
