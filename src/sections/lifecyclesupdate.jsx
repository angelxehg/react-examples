import React, { Component } from 'react'
import PropTypes from 'prop-types'

const animalImages = {
  cat: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  dolphin: 'https://images.unsplash.com/photo-1547382442-d17c21625a44?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9scGhpbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  panda: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
}

class AnimalImage extends Component {

  state = { src: animalImages[this.props.animal]}

  render() {
    console.log('Render AnimalImage')
    return (
      <div>
        <p>Selected: <b>{this.props.animal}</b></p>
        <img src={this.state.src} alt={this.props.animal} width="150px"/>
      </div>
    )
  }
}

AnimalImage.propTypes = {
  animal: PropTypes.oneOf(['cat', 'dolphin', 'panda'])
}

AnimalImage.defaultProps = {
  animal: 'cat'
}

class LifecyclesUpdate extends Component {
  render() {
    return (
      <div className="mt-5">
        <h2>Ciclos de vida (Actualización)</h2>
        <AnimalImage/>
      </div>
    )
  }
}

export default LifecyclesUpdate
