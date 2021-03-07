import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout, { BackToHome } from '../components/layout'

const animalImages = {
  cat: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  dolphin: 'https://images.unsplash.com/photo-1547382442-d17c21625a44?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9scGhpbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  panda: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
}
const animals = Object.keys(animalImages)

class AnimalImage extends Component {

  state = { animal: this.props.defaultAnimal }

  changeImage(newAnimal) {
    // Si no ha cambiado el estado, no hacer nada. Asi no se llama a Render
    if (this.state.animal === newAnimal) {
      return;
    }
    const img = document.querySelector('#animalImage');
    img.animate([
      { filter: 'blur(0px)' },
      { filter: 'blur(2px)' },
      { filter: 'blur(0px)' }
    ], { duration: 500, easing: 'ease'})
    this.setState({ animal: newAnimal });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Este método sólo existe como optimización de rendimiento.
    // No confíes en él para “prevenir” un renderizado, ya que esto puede conducir a errores.
    console.log({nextProps}, {nextState})
    // if (this.state.animal === nextState.animal) {
    //   return false;
    // }
    return true;
  }

  render() {
    console.log('Render AnimalImage')
    const { animal } = this.state;
    return (
      <div>
        <div className="btn-group" role="group" aria-label="Basic example">
          {animals.map(key => {
            return (
              <button key={key} type="button" className="btn btn-secondary" onClick={() => this.changeImage(key)}>
                {key.toLocaleUpperCase()}
              </button>
            )
          })}
        </div>
        <p>Selected: <b>{animal}</b></p>
        <img id="animalImage" src={animalImages[animal]} alt={animal} width="150px"/>
      </div>
    )
  }
}

AnimalImage.propTypes = {
  defaultAnimal: PropTypes.oneOf(animals)
}

AnimalImage.defaultProps = {
  defaultAnimal: 'cat'
}

class LifecyclesUpdatePage extends Component {

  render() {
    return (
      <Layout>
        <BackToHome/>
        <h2>Ciclos de vida (Actualización)</h2>
        <AnimalImage defaultAnimal='cat' />
      </Layout>
    )
  }
}

export default LifecyclesUpdatePage
