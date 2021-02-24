import React from "react";

const ComponenteA = () => <p>Componente A</p>
const ComponenteB = () => <p>Componente B</p>

const Conditional = () => {
  return (<>
    <h1>Condicional Rendering</h1>
    <ComponenteA/>
    <ComponenteB/>
  </>);
}

export default Conditional;
