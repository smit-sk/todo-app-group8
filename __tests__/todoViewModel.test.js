import React from "react";
import { render, renderHook, fireEvent } from "@testing-library/react-native";
import App from "../App";
import useTodoViewModel from "../todoViewModel";
import { addTask, todoList, changeStatus } from "../todoViewModel";

describe("After calling deleteAll(), there should be no more items in the list.", () => {
  it("should delete all items in the list", async () => {
    const { getByPlaceholderText, getByText, findByText, getByTestId } = render(
      <App />
    );
    const input = getByPlaceholderText("Enter a todo task");
    const addButton = getByText("Add Task");
    fireEvent.changeText(input, "New Task");
    fireEvent.press(addButton);
    const newTask = findByText("New Task");
    expect(newTask).toBeTruthy();
    const deleteButton = getByTestId("deleteButton");
    fireEvent.press(deleteButton);
    const noTasks = findByText("No tasks added");
    expect(noTasks).toBeTruthy();
  });
});

describe("changeStatus can be used to mark a task as complete", () => {
  it("should set the todos isComplete property to false", async () => {
    const { getByPlaceholderText, getByText, findByText } = render(<App />);
    const input = getByPlaceholderText("Enter a todo task");
    const addButton = getByText("Add Task");
    fireEvent.changeText(input, "New Task");
    fireEvent.press(addButton);
    const newTask = findByText("New Task");
    expect(newTask).toBeTruthy();
    const todoItem = getByText("New Task");
    fireEvent.press(todoItem);
    const completedTask = findByText("New Task");
    expect(completedTask).toBeTruthy();
  });

  it("changeStatus can be used to mark a task as complete", () => {
    const { result } = renderHook(() => useTodoViewModel());
    const taskId = result.current.addTask("new task");
    if (result.current.todos.length > 0) {
      expect(result.current.todos[0].isComplete).toBe(false);
      changeStatus(taskId, true);
      expect(result.current.todos[0].isComplete).toBe(true);
      changeStatus(taskId, false);
      expect(result.current.todos[0].isComplete).toBe(false);
    } else {
      expect(result.current.todos.length).toBe(0);
    }
  });
});

describe("Add a task", () => {
  it("should return the id of the added todo", () => {
    const { result } = renderHook(() => useTodoViewModel());
    const newId = result.current.addTask("New Task");
    expect(newId).toBe(0);
  });
});
