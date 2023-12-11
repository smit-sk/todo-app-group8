import useCustomHook from "../useCustomHook";
import { renderHook } from "@testing-library/react-native"

describe("Use Task Status", () => {
  it("Can set the initial value of the custom hook's state state variable", () => {
    const initialValue = false;
    const { result } = renderHook(() => useCustomHook(initialValue));
    expect(result.current[0]).toBe(initialValue);
  });
  it('should toggle the completion state of a todo item', () => {
    const { result } = renderHook(() => useCustomHook(false));
    expect(result.current.todoCompletionValue).toBe(false);
    act(() => {
      result.current.toggle();
    });
    expect(result.current.todoCompletionValue).toBe(true);
    act(() => {
      result.current.toggle();
    });
    expect(result.current.todoCompletionValue).toBe(false);
  });
  
  
});
