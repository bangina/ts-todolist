import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Have lunch", complete: false },
];

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState(initialTodos);
  //토글 함수
  //newTodos에 선택된(e=selectedTodo) todo의 completed를 반대로 바꿔서 담음
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

  //투두 추가 함수(props로 AddTodoForm에 내려주면 자식업데이트시 부모에서도 업데이트됨)
  const addTodo: AddTodo = (newTodo) => {
    newTodo.trimEnd() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
