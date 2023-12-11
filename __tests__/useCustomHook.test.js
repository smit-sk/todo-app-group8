import useCustomHook from "../useCustomHook";
import { renderHook } from "@testing-library/react-native";
import { addTask, todoList } from "../todoViewModel";
import useTodoViewModel from "../todoViewModel";

describe("Use Task Status", () => {
  it("Can set the initial value of the custom hook's state state variable", () => {
    const initialValue = false;
    const { result } = renderHook(() => useCustomHook(initialValue));
    expect(result.current[0]).toBe(initialValue);
  });

  it("Calling toggle updates the state", () => {
    const { result } = renderHook(() => useTodoViewModel());
    const taskId = result.current.addTask("new task");
    result.current.todos[taskId].isComplete = false;
    toggle(taskId);
    expect(result.current.todos[taskId].isComplete).toBe(true);
  });
});
