
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TodoItem from './todoItem';
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: '1', name: 'Task 1', isComplete: false },
    { id: '2', name: 'Task 2', isComplete: true },
  ]);

  const [taskName, setTaskName] = useState('');

  const onPressAdd = () => {
    if (taskName) {
      const addTask = {
        id: (tasks.length + 1).toString(),
        name: taskName,
        isComplete: false,
      };

      setTasks((oldTasks) => [...oldTasks, addTask]);
     
    }
    setTaskName('')
  };

  const onDelete = () => {
    setTasks([]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>
          Todo List
        </Text>
        <MaterialCommunityIcons.Button onPress={onDelete} backgroundColor="white" name="delete" size={24} color="red" />
      </View>
      <View style={styles.itemsView}>
        {tasks.length > 0 ? (
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TodoItem item={item} />}
          />
        ) : (
          <Text style={{textAlign:'center'}}>No tasks added</Text>
        )}
      </View>
      <View style={styles.addtaskView}>
        <TextInput placeholder='Enter a todo task' onChangeText={(text) => setTaskName(text)} style={styles.textInput}></TextInput>
        <TouchableOpacity onPress={onPressAdd} style={styles.addTaskBtn}>
          <Text style={styles.addTaskText}> Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 70,
    flexDirection: 'column'
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12
  },
  appBarText: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  itemsView: {
    flex: 1,
    justifyContent: 'center',
  },
  addtaskView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 40,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8
  },
  addTaskText: {
    margin: 8,
    color: 'white',
    textAlign: 'center',
    fontWeight: "bold"
  },
  addTaskBtn: {
    marginLeft: 10,
    backgroundColor: '#008080'
  }
});
