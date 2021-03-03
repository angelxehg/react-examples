import React, { Component } from 'react'

class LifeCycles extends Component {

  constructor(props) {
    super(props);
    console.log('Constructor');
    this.state = { message: 'Mensaje inicial' };
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
