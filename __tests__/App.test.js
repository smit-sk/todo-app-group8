import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import App from "../App";

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



