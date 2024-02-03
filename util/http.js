import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post('https://react-expense-manager-3970d-default-rtdb.firebaseio.com/expenses.json', expenseData)
}