import React, { Component } from 'react'

class LifeCycles extends Component {

  constructor(props) {
    super(props);
    console.log('Constructor');
    this.state = { message: 'Mensaje inicial', sY: 0, sX: 0 };
  }

  componentDidMount() {
    console.log('Mount');
    this.setState({ message: 'Mensaje montado' });
    document.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const sY = window.scrollY;
    const sX = window.scrollX;
    this.setState({ sY, sX });
  }

  componentWillUnmount() {
    console.log('Unmont');
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleClick = () => {
    this.setState({ message: 'Mensaje cambiado' });
  }

  render() {
    console.log('Render');
    return (
      <div className="mt-5">
        <h2>Ciclos de vida</h2>
        <p>{this.state.message}</p>
        <p>Y: {this.state.sY} X: {this.state.sX}</p>
        <button
          className="btn btn-secondary"
          onClick={this.handleClick}>
          Clic
        </button>
      </div>
    )
  }
}

export default LifeCycles
