import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'INCOME',
    transactions: [],
    balance: 0,
    expenses: 0,
    income: 0,
  }

  getTransactionDetails = e => {
    e.preventDefault()
    const {
      title,
      amount,
      type,
      transactions,
      expenses,
      income,
      balance,
    } = this.state
    const obj = {id: v4(), title, amount, type}
    if (type === 'EXPENSES') {
      this.setState({
        expenses: parseInt(expenses) + parseInt(amount),
        balance: parseInt(balance) - parseInt(amount),
        transactions: [...transactions, obj],
        title: '',
        amount: '',
        type: '',
      })
    } else if (type === 'INCOME') {
      this.setState({
        income: parseInt(income) + parseInt(amount),
        balance: parseInt(balance) + parseInt(amount),
        transactions: [...transactions, obj],
        title: '',
        amount: '',
        type: '',
      })
    }
  }

  getTitle = e => {
    this.setState({title: e.target.value})
  }

  getAmount = e => {
    this.setState({amount: e.target.value})
  }

  getType = e => {
    this.setState({type: e.target.value})
  }

  getIdExternal = id => {
    const {transactions} = this.state
    const filteredTransactions = transactions.filter(item => id !== item.id)
    this.setState({transactions: filteredTransactions})
  }

  render() {
    const {title, amount, balance, expenses, income, transactions} = this.state
    return (
      <div>
        <div className="bg">
          <h1>Hi Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>
        <div>
          <MoneyDetails balance={balance} expenses={expenses} income={income} />
        </div>
        <div>
          <form onSubmit={this.getTransactionDetails}>
            <h1>Add Transaction</h1>
            <label>
              <input
                value={title}
                onChange={this.getTitle}
                placeholder="TITLE"
                type="text"
              />
              TITLE
            </label>
            <label>
              <input
                value={amount}
                onChange={this.getAmount}
                placeholder="AMOUNT"
                type="text"
              />
              AMOUNT
            </label>

            <label>
              <select value="INCOME" onChange={this.getType}>
                {transactionTypeOptions.map(item => (
                  <option key={item.optionId} value={item.optionId}>
                    {item.displayText}
                  </option>
                ))}
              </select>
              TYPE
            </label>
            <button type="submit">Add</button>
          </form>
        </div>
        <div>
          <h1>History</h1>
          <ul>
            <li>
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
            </li>
            {transactions.map(item => (
              <TransactionItem
                key={item.id}
                getIdExternal={this.getIdExternal}
                data={item}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MoneyManager
