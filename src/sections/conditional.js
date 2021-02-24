import React, { useState } from "react";

const ComponenteA = () => <p>Componente A</p>
const ComponenteB = () => <p>Componente B</p>

const Conditional = () => {
  const [mostrarA] = useState(true);

  return (<>
    <h1>Condicional Rendering</h1>
    {mostrarA ? <ComponenteA/> : <ComponenteB/>}
  </>);
}

export default Conditional;
