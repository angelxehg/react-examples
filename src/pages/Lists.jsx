import React from "react";

import Layout, { BackToHome } from '../components/layout';

const ListsPage = () => {
  const numeros = [1, 1, 3, 4, 5];
  return <Layout>
    <BackToHome/>
    <h1>Listas</h1>
    {numeros.map((n, i) => {
      return <p key={i} >Soy el número {n}</p>;
    })}
  </Layout>
}

export default ListsPage
