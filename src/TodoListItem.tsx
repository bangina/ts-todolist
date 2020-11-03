import React from "react";
import "./TodoListItem.css";
//Type정의(인터페이스로)
interface TodoListItemProps {
  // todo: {
  //   text: string;
  //   complete: boolean;
  // };

  //위에서 중복되니까 types에서 가져옴
  todo: Todo;
  toggleTodo: ToggleTodo;
}

//타입 사용
export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};
