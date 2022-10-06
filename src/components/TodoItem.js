import "./TodoItem.css";

const TodoItem = ({ todo, todoList, setTodoList }) => {
  const handleClickRemoveTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleClickDoneChange = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }

        return todo;
      })
    );
  };

  return (
    <li className="todo-item">
      <strong className="todo-title">{todo.title}</strong>
      <p className="todo-content">{todo.content}</p>
      <div className="btn-group">
        <button
          type="button"
          className="remove-btn"
          onClick={() => handleClickRemoveTodo(todo.id)}
        >
          삭제
        </button>
        <button
          type="button"
          className={todo.isDone ? "cancel-btn" : "done-btn"}
          onClick={() => handleClickDoneChange(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
