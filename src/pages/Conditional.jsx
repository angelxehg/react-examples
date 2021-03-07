import React, { useState } from "react";

import Layout, { BackToHome } from '../components/layout';

const LoginButton = () => {
  return <button>Iniciar sesión</button>;
}

const LogoutButton = () => {
  return <div className="mt-5">
    <p>Bienvenido, usuario</p>
    <button>Cerrar sesión</button>
  </div>;
}

const ConditionalPage = () => {
  const [isLoggedIn] = useState(false);

  return (<Layout>
    <BackToHome/>
    <h1>Condicional Rendering</h1>
    {isLoggedIn ? <LogoutButton/> : <LoginButton/> }
  </Layout>);
}

export default ConditionalPage;
