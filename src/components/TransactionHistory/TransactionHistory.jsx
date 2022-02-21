import PropTypes from 'prop-types'
import s from "./TransactionHistory.module.css"
export default function TransactionHistory({ items }) {
   return (<table className={s["transactionHistory"]}>
  <thead className={s["transactionHead"]}>
    <tr>
      <th className={s["transactionTitle"]}>Type</th>
      <th className={s["transactionTitle"]}>Amount</th>
      <th className={s["transactionTitle"]}>Currency</th>
    </tr>
  </thead>

       <tbody>
           {items.map(item => (
             <tr className={s["row"]}  key={item.id}>
                   <td className={s["cell"]}>{item.type}</td>
                   <td className={s["cell"]}>{item.amount}</td>
                   <td className={s["cell"]}>{item.currency}</td>
    </tr>  
           ))}
    
  </tbody>
</table>)  
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
}