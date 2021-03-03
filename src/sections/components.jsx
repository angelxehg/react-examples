import React from "react";
import PropTypes from "prop-types"

const Box = ({ children }) => {
  return (
    <div style={{ border: '1px solid #09f', margin: 5, padding: 5 }}>
      {children}
    </div>
  )
}

Box.propTypes = {
  children: PropTypes.node
}

const Components = () => {
  return <div className="mt-3">
    <h2>Componentes</h2>
    <Box>Este es un componente</Box>
    <Box>Este es otro componente</Box>
  </div>
};

export default Components;
