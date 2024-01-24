import { View, StyleSheet } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

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

function ExpensesOutput({ expenses, expensesPeriod }) {
  return <View style={styles.container}>
    <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
    <ExpensesList expenses={DUMMY_EXPENSES} />
  </View>

}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }
});