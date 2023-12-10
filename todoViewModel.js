import { useState } from 'react';

const useTodoViewModel = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (name) => {
    const newId = todos.length;
    const newTodo = { id: newId, name: name, isComplete: false };
    setTodos([...todos, newTodo]);
    return newId;
  };

  const clearAll = () => {
    setTodos([]);
  };

  const changeStatus = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo));
  };

  return { todos, addTask, clearAll, changeStatus };
};

export default useTodoViewModel;