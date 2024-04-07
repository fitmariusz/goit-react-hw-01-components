import PropTypes from 'prop-types';
import css from './Transaction.module.css'

export const TransactionHistory = ({ items }) => {
    return ( <>
    <table className={css.transactionHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
            <tbody>
                {items.map(item => (
                    <tr>
                        <td>{ item.type}</td>
                        <td>{item.amount}</td>
                        <td>{ item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>)


};

TransactionHistory.prototype = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
};