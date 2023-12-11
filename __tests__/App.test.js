import React from "react";
import {
  render,
  renderHook,
  fireEvent,
  getByText,
} from "@testing-library/react-native";
import App from "../App";
import useTodoViewModel from "../todoViewModel";
import { addTask, todoList, changeStatus } from "../todoViewModel";

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

describe("Testing the Tasklist logic.", () => {
  it("Delete a Task", async () => {
    const { getByPlaceholderText, getByText, findByText } = render(<App />);
    const deleteAll = jest.fn();
    const { getByTestId } = render(<App deleteAll={deleteAll} />);
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
