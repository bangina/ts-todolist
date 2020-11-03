import React, { useState } from "react";
import { TodoList } from "./TodoList";

const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Have lunch", complete: false },
];

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState(initialTodos);
  //토글 함수
  //newTodos에 선택된 todo의 completed를 반대로 바꿔서 담음
  //newTodos로 setTodos
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </React.Fragment>
  );
};

export default App;
