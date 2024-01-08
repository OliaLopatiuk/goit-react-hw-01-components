import PropTypes from "prop-types"
import {Table, TableHead} from './TransactionHistory.styles'

export const TransactionHistory = ({items}) => (
    <Table>
  <TableHead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TableHead>

  <tbody>
    {items.map(item => <tr key= {item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>)}
  </tbody>
</Table>
)

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
        id: PropTypes.string,
    }))
}