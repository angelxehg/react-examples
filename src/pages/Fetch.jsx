import React, { Component } from 'react';

import Layout, { BackToHome } from '../components/layout';

class FetchPage extends Component {

  state = { bpi: {} }

  componentDidMount() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(data => {
        const { bpi } = data;
        this.setState({ bpi });
      });
  }

  render() {
    const { bpi } = this.state;
    return (
      <Layout>
        <BackToHome/>
        <h2>Precios del Bitcoin</h2>
        <p>Ejemplo de Fetch</p>
        {Object.keys(bpi).map(key => <p key={key} >1 BTC = {bpi[key].rate} {key}</p>)}
      </Layout>
    )
  }
}

export default FetchPage
