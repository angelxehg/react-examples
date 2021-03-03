import React, { Component } from 'react';
class FetchExample extends Component {

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
      <div className="mt-5">
        <h2>Precios del Bitcoin</h2>
        <p>Ejemplo de Fetch</p>
        {Object.keys(bpi).map(key => <p key={key} >1 BTC = {bpi[key].rate} {key}</p>)}
      </div>
    )
  }
}

export default FetchExample
