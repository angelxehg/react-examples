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

const CurrencyRow = ({ currency, value }) => (
  <tr>
    <th scope="row">{currency}</th>
    <td>{value}</td>
  </tr>
)

CurrencyRow.propTypes = {
  currency: PropTypes.string,
  value: PropTypes.number
}

class BitcoinPage extends Component {

  state = { bpi: {} }

  componentDidMount() {
    this.fetchPrice();
  }

  fetchPrice = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    this.setState({ bpi: data.bpi });
  }

  render() {
    const { bpi } = this.state;
    return (
      <div className="mt-5">
        <h2>BTC (Container-Content)</h2>
        <p>1 BTC equivale a...</p>
        <Table>
          <TableHeader headers={['Moneda', 'Precio']} />
          <TableBody>
            {Object.keys(bpi).map(key => <CurrencyRow key={key} currency={key} value={bpi[key].rate_float} />)}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default BitcoinPage
