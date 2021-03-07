import React, { useState } from 'react';

import Layout, { BackToHome } from '../components/layout';

const EventsPage = () => {
  const [mouseX, updateMouseX] = useState(0);
  const [mouseY, updateMouseY] = useState(0);

  const handleMouseMove = ({clientX, clientY}) => {
    updateMouseX(clientX);
    updateMouseY(clientY)
  }

  const handleClick = (e) => {
    console.log(e); // Evento sintetico
    console.log(e.nativeEvent); // Evento nativo
    alert('Me diste clic')
  }

  return <Layout>
    <BackToHome/>
    <h2>Eventos</h2>
    <button className="btn btn-primary" onClick={handleClick}>
      Dame clic
    </button>
    <div onMouseMove={handleMouseMove} style={{border: '1px solid #000', marginTop: 10, padding: 10}}>
      <p>Posición: {mouseX}, {mouseY}</p>
    </div>
  </Layout>;
}

export default EventsPage;
