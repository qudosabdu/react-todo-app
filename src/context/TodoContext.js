import { createContext } from "react";

import { useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      text: "Eat breakfast",
      isCompleted: false,
    },
  ],
  addTodo: (todos) => {},
  updateTodo: (todos, todoId) => {},
  deleteTodo: (todoId) => {},
  toggleComplete: (todoId) => {},
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}
