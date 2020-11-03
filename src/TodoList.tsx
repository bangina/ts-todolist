import React from "react";
import { TodoListItem } from "./TodoListItem";

//interface로 타입 정의
interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FunctionComponent<TodoListProps> = ({
  todos,
  toggleTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        );
      })}
    </ul>
  );
};
