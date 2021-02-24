import React, { useState } from "react";

const LoginButton = () => {
  return <button>Iniciar sesión</button>;
}

const LogoutButton = () => {
  return <>
    <p>Bienvenido, usuario</p>
    <button>Cerrar sesión</button>
  </>;
}

const Conditional = () => {
  const [isLoggedIn] = useState(false);

  return (<>
    <h1>Condicional Rendering</h1>
    {isLoggedIn ? <LogoutButton/> : <LoginButton/> }
  </>);
}

export default Conditional;
