import React, { Component } from 'react'
import PropTypes from 'prop-types'

const BTCTable = ({ children }) => (
  <table className="table table-sm">
    <thead>
      <tr>
        <th scope="col">Moneda</th>
        <th scope="col">Precio</th>
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
)

BTCTable.propTypes = {
  children: PropTypes.node
}

const CurrencyRow = ({ currency, prefix, value }) => (
  <tr>
    <th scope="row">{currency}</th>
    <td dangerouslySetInnerHTML={{ __html: prefix + ' ' + value }}></td>
  </tr>
)

CurrencyRow.propTypes = {
  currency: PropTypes.string,
  prefix: PropTypes.string,
  value: PropTypes.number
}

class BitcoinPage extends Component {

  state = { bpis: [] }

  componentDidMount() {
    this.fetchPrice();
  }

  fetchPrice = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    const bpis = Object.keys(data.bpi).map(key => {
      return {
        currency: key,
        prefix: data.bpi[key].symbol,
        value: data.bpi[key].rate_float
      }
    })
    this.setState({ bpis });
  }

  render() {
    const { bpis } = this.state;
    return (
      <div className="mt-5">
        <h2>BTC (Container-Content)</h2>
        <p>1 BTC equivale a...</p>
        <BTCTable>
          {bpis.map(({ prefix, currency, value }) => <CurrencyRow
            key={currency}
            currency={currency}
            prefix={prefix}
            value={value}
          />)}
        </BTCTable>
      </div>
    )
  }
}

export default BitcoinPage
