import React, {Component} from "react";

import Layout, { BackToHome } from '../components/layout';

class ContadorPage extends Component {

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
    return <Layout>
      <BackToHome/>
      <h1>Contador</h1>
      <span>Cuenta: {this.state.cuenta}</span>
    </Layout>
  }
}

export default ContadorPage
