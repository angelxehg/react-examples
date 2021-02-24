import React, {Component} from "react";

class Contador extends Component {

  constructor() {
    super();
    this.state = {cuenta: 0};
  }

  tick() {
    this.setState(state => ({
      cuenta: state.cuenta + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <>
      <h1>Contador</h1>
      <span>Cuenta: {this.state.cuenta}</span>
    </>
  }
}

export default Contador
