import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 5.99,
    date: new Date('2023-12-09')
  },
  {
    id: 'e2',
    description: 'A pair of trouses',
    amount: 89.29,
    date: new Date('2024-01-07')
  },
  {
    id: 'e3',
    description: 'Electricity bill',
    amount: 129.00,
    date: new Date('2023-12-28')
  },
  {
    id: 'e4',
    description: 'Car fuel',
    amount: 30,
    date: new Date('2024-01-19')
  },
  {
    id: 'e5',
    description: 'Book',
    amount: 2.66,
    date: new Date('2024-12-24')
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amonunt, date }) => { },
  deleteExpense: (id) => { },
  updateExpense: (id, { description, amonunt, date }) => { }
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state]
    case 'UPDATE':
      const updateableExpenseId = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateableExpense = state[updateableExpenseId];
      const updatedItem = { ...updateableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updateableExpense[updateableExpenseId] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(iid, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  };

  return <ExpensesContext.Provider value={value}>
    {children}
  </ExpensesContext.Provider>
}

export default ExpensesContextProvider;