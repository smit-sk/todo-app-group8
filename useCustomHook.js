
import { useState } from 'react';

const useCustomHook = (initialValue) => {
  const [todoCompletionValue, setTodoCompletionValue] = useState(initialValue);

  const toggle = (todoId) => {
 
    //todos[todoId].isComplete = !todos[todoId].isComplete;
    setTodoCompletionValue((prevValue) => !prevValue);
  };

  return [todoCompletionValue, toggle];
};

export default useCustomHook;
