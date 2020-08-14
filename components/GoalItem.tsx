import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface GoalItemProps {
  id: string
  title: string
  onDelete: (goalId: string) => void
}

const GoalItem: React.FunctionComponent<GoalItemProps> = ({
  title,
  onDelete,
  id,
}) => {
  return (
    <TouchableOpacity onPress={() => onDelete(id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
})

export default GoalItem
