import React from 'react';
import PropTypes from 'prop-types'

const Layout = ({ children }) => (
  <div className="container-sm pt-5 pb-5">
    <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
