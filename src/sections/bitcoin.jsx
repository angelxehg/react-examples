import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Table = ({ children }) => (
  <table className="table table-sm">
    {children}
  </table>
)

Table.propTypes = {
  children: PropTypes.node
}

const TableHeader = ({ headers }) => (
  <thead>
    <tr>
      {headers.map(header => <th key={header} scope="col">{header}</th>)}
    </tr>
  </thead>
)

TableHeader.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string)
}

const TableBody = ({ children }) => <tbody>{children}</tbody>

TableBody.propTypes = {
  children: PropTypes.node
}

const CurrencyRow = ({ currency, prefix, value }) => (
  <tr>
    <th scope="row">{currency}</th>
    <td dangerouslySetInnerHTML={{__html: prefix + ' ' + value}}></td>
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
        <Table>
          <TableHeader headers={['Moneda', 'Precio']} />
          <TableBody>
            {bpis.map(({ prefix, currency, value }) => <CurrencyRow
              key={currency}
              currency={currency}
              prefix={prefix}
              value={value}
            />)}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default BitcoinPage
