import {Component} from 'react'
import './index.css'
// Write your code here
class TransactionItem extends Component {
  render() {
    const {data, getIdExternal} = this.props
    const {id, title, amount, type} = data
    const getId = () => {
      getIdExternal(id)
    }
    return (
      <li key={id}>
        <p>{title}</p>
        <p>{amount}</p>
        <p>{type}</p>
        <button testid="delete" onClick={getId} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
            alt="delete"
          />
        </button>
      </li>
    )
  }
}
export default TransactionItem
