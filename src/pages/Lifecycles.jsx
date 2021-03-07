import React, { Component } from 'react'

import Layout, { BackToHome } from '../components/layout';
import LoremIpsum from '../components/lorem';

class LifecyclesPage extends Component {

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
    return (
      <Layout>
        <BackToHome />
        <h1>Ciclos de vida</h1>
        <p>{this.state.message}</p>
        <p>Y: {this.state.sY} X: {this.state.sX}</p>
        <button
          className="btn btn-secondary"
          onClick={this.handleClick}>
          Clic
        </button>
        <LoremIpsum/>
      </Layout>
    )
  }
}

export default LifecyclesPage
