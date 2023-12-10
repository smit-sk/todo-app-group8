import useCustomHook from "../useCustomHook";

describe("The custom hook can set the initial value of the todoCompletionValue state variable", () => {
  it("should set the initial value of the todoCompletionValue state variable", () => {
    const initialValue = false;
    const { result } = renderHook(() => useCustomHook(initialValue));
    expect(result.current[0]).toBe(initialValue);
  });
});

describe("The custom hook can update the state variable", () => {
  it("The toggle() function updates the state variable", () => {
    const taskId = addTask("new task");
    todoList[taskId].isComplete = false;
    toggle(taskId);
    expect(todoList[0].isComplete).toBe(true);
  });
});
