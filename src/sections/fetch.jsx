import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PriceDisplay = ({ code, rate, symbol }) => (
  <div className="mt-2">
    <p><b>{code}</b>: {symbol} {rate}</p>
  </div>
)

PriceDisplay.propTypes = {
  code: PropTypes.string,
  rate: PropTypes.string,
  symbol: PropTypes.string
}

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
    const {EUR, GBP, USD} = this.state.bpi;
    return (
      <div className="mt-5">
        <h2>Ejemplo de Fetch</h2>
        <p>Precios del Bitcoin</p>
        {EUR && <PriceDisplay code={EUR.code} rate={EUR.rate} symbol={EUR.symbol}/>}
        {GBP && <PriceDisplay code={GBP.code} rate={GBP.rate} symbol={GBP.symbol}/>}
        {USD && <PriceDisplay code={USD.code} rate={USD.rate} symbol={USD.symbol}/>}
      </div>
    )
  }
}

export default FetchExample
