import React, { useState } from 'react'
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native'

interface GoalInputProps {
  onAddGoal: (goalTitle: string) => void
  visible: boolean
  onCancel: () => void
}

const GoalInput: React.FunctionComponent<GoalInputProps> = ({
  onAddGoal,
  visible,
  onCancel,
}) => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = (enteredText: string): void => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    onAddGoal(enteredGoal)
    setEnteredGoal('')
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          value={enteredGoal}
          style={styles.input}
          placeholder='Course Goal'
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='CANCEL' color='red' onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title='ADD' />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    marginBottom: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '40%',
  },
})

export default GoalInput
