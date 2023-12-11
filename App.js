import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TodoItem from "./todoItem";
import useTodoViewModel from "./todoViewModel"; // Make sure to create this file

const App = () => {
  const { todos, addTask, deleteAll, changeStatus } = useTodoViewModel();
  const [taskName, setTaskName] = useState("");

  const onPressAdd = () => {
    if (taskName) {
      addTask(taskName);
      setTaskName("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>Todo List</Text>
        <MaterialCommunityIcons.Button
          onPress={deleteAll}
          backgroundColor="white"
          name="delete"
          size={24}
          color="red"
          testID="deleteButton"
        />
      </View>
      <View style={styles.itemsView}>
        {todos.length > 0 ? (
          <FlatList
            data={todos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TodoItem
                item={item}
                onToggleComplete={() => changeStatus(item.id)}
              />
            )}
          />
        ) : (
          <Text style={{ textAlign: "center" }}>No tasks added</Text>
        )}
      </View>
      <View style={styles.addtaskView}>
        <TextInput
          placeholder="Enter a todo task"
          value={taskName}
          onChangeText={setTaskName}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={onPressAdd} style={styles.addTaskBtn}>
          <Text style={styles.addTaskText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 70,
    flexDirection: "column",
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  appBarText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  itemsView: {
    flex: 1,
    justifyContent: "center",
  },
  addtaskView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingBottom: 40,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
  },
  addTaskBtn: {
    marginLeft: 10,
    backgroundColor: "#008080",
    padding: 8,
  },
  addTaskText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default App;
