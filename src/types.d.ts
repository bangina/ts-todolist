//Todo 타입 정의
//export 하지 않아도되도록 파일명 .d.ts로 설정한다(types declaration)
type Todo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;
