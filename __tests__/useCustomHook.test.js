import useCustomHook from "../useCustomHook";
import { renderHook,act } from "@testing-library/react-native"

describe("Testing the custom hook", () => {
  it("Can set the initial value of the custom hook's state state variable", () => {
    const initialValue = false;
    const { result } = renderHook(() => useCustomHook(initialValue));
    expect(result.current.todoCompletionValue).toBe(initialValue);
  });
  it('calling a toggle button updated a state variable', () => {
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
