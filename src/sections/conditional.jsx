import React, { useState } from "react";

const LoginButton = () => {
  return <button>Iniciar sesión</button>;
}

const LogoutButton = () => {
  return <div className="mt-5">
    <p>Bienvenido, usuario</p>
    <button>Cerrar sesión</button>
  </div>;
}

const Conditional = () => {
  const [isLoggedIn] = useState(false);

  return (<div className="mt-5">
    <h2>Condicional Rendering</h2>
    {isLoggedIn ? <LogoutButton/> : <LoginButton/> }
  </div>);
}

export default Conditional;
