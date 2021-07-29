import {Component} from 'react'
import './index.css'
// Write your code here
class MoneyDetails extends Component {
  render() {
    const {balance, income, expenses} = this.props
    return (
      <div>
        <div>
          <p>Your Balance</p>
          <img
            alt="balance"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          />
          <p testid="balanceAmount">Rs {balance.toString()}</p>
        </div>
        <div>
          <p>Your Income</p>
          <img
            alt="income"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          />
          <p testid="incomeAmount">Rs {income.toString()}</p>
        </div>
        <div>
          <p>Your Expenses</p>
          <img
            alt="expenses"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          />
          <p testid="expensesAmount">Rs {expenses.toString()}</p>
        </div>
      </div>
    )
  }
}
export default MoneyDetails
