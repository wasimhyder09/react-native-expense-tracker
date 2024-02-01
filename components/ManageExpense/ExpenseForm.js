import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangeHandler() { }
  return <View style={styles.formStyle}>
    <Text style={styles.titleStyle}>Your Expense</Text>
    <View style={styles.inputsRow}>
      <Input
        style={styles.rowInput}
        label="Amount"
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangeHandler
        }}
      />
      <Input
        style={styles.rowInput}
        label="Date"
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => { }
        }}
      />
    </View>
    <Input label="Description" textInputConfig={{
      multiline: true
    }} />
  </View>
}

export default ExpenseForm;

const styles = StyleSheet.create({
  formStyle: {
    marginTop: 40
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center'
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: {
    flex: 1
  }
});