import React, { useState } from 'react'
import { View, StyleSheet, Button, FlatList } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

interface AppProps {}

export interface GoalStateProps {
  id: string
  value: string
}

const App: React.FunctionComponent<AppProps> = (props) => {
  const [courseGoals, setCourseGoals] = useState<GoalStateProps[]>([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle: string) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ])
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalId: string) => {
    setCourseGoals((currentGoals: GoalStateProps[]) => {
      return currentGoals.filter((goal: GoalStateProps) => goal.id !== goalId)
    })
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalHandler}
      />
      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
})

export default App
