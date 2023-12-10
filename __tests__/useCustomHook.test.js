import useCustomHook from "../useCustomHook";

describe("The custom hook can set the initial value of the todoCompletionValue state variable", () => {
  it("should set the initial value of the todoCompletionValue state variable", () => {
    const initialValue = false;
    const { result } = renderHook(() => useCustomHook(initialValue));
    expect(result.current[0]).toBe(initialValue);
  });
});

describe("The custom hook can update the todoCompletionValue state variable", () => {
  it("should update the todoCompletionValue state variable", () => {
    const initialValue = false;
    const { result } = renderHook(() => useCustomHook(initialValue));
    expect(result.current[0]).toBe(initialValue);
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(!initialValue);
  });
});
