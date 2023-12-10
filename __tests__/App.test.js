import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import App from "../App";
import useTodoViewModel from "../todoViewModel";

describe("App component", () => {
  it("On initial load, message shows that there are no tasks", () => {
    const { getByText } = render(<App />);
    const msg = getByText("No tasks added");
    expect(msg).toBeTruthy();
  });
  it("After adding a task, FlatList is updated", async () => {
    const { getByPlaceholderText, getByText, findByText } = render(<App />);
    const input = getByPlaceholderText("Enter a todo task");
    const addButton = getByText("Add Task");
    fireEvent.changeText(input, "New Task");
    fireEvent.press(addButton);
    const newTask = findByText("New Task");
    expect(newTask).toBeTruthy();
  });
});

describe("After calling deleteAll(), there should be no more items in the list.", () => {
  it("should delete all items in the list", async () => {
    const { getByPlaceholderText, getByText, findByText } = render(<App />);
    const input = getByPlaceholderText("Enter a todo task");
    const addButton = getByText("Add Task");
    fireEvent.changeText(input, "New Task");
    fireEvent.press(addButton);
    const newTask = findByText("New Task");
    expect(newTask).toBeTruthy();
    const deleteButton = getByText("Delete All");
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
    const taskId = addTask("new task");
    expect(todoList[0].isComplete).toBe(false);
    changeStatus(taskId, true);
    expect(todoList[0].isComplete).toBe(true);
    changeStatus(taskId, false);
    expect(todoList[0].isComplete).toBe(false);
  });
});

describe("Add a task", () => {
  it("should return the id of the added todo", () => {
    const { result } = renderHook(() => useTodoViewModel());
    const newId = result.current.addTask("New Task");
    expect(newId).toBe(0);
  });
});
