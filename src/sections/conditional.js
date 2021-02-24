import React, { useState } from "react";

const ComponenteA = () => <p>Componente A</p>
const ComponenteB = () => <p>Componente B</p>

const Conditional = () => {
  const [mostrarA] = useState(false);

  const selectCom = (mostrarA) => {
    if (mostrarA) {
      return <ComponenteA/>;
    }
    return <ComponenteB/>;
  }

  return (<>
    <h1>Condicional Rendering</h1>
    {selectCom(mostrarA)}
  </>);
}

export default Conditional;
