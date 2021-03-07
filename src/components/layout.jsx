import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export const BackToHome = () => (
  <Link to="/">{'<'} Regresar al Inicio</Link>
)

const Layout = ({ children }) => (
  <div className="container-sm pt-5 pb-5">
    <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
