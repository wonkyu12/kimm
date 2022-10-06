import "./common.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./components/TodoItem";

function App() {
  const todoInitialState = { title: "", content: "" };
  const [todo, setTodo] = useState(todoInitialState);
  const [todoList, setTodoList] = useState([]);

  const handleClickAddTodo = () => {
    if (todo.title === "" || todo.content === "") {
      return alert("빈값을 등록 할 수 없습니다 :(");
    }

    setTodoList([...todoList, { ...todo, isDone: false, id: uuidv4() }]);
    setTodo(todoInitialState);
  };

  const handleChangeInput = (event) => {
    setTodo({
      ...todo,
      [event.target.name]: event.target.value,
    });
  };

  const completeList = todoList.filter((todo) => todo.isDone);
  const notCompleteList = todoList.filter((todo) => !todo.isDone);

  return (
    <section>
      <h1 className="app-title">TODO APP</h1>

      <hr />

      <div className="todo-container">
        <div className="box-area">
          <h2>ADD TODO ⭐️</h2>
          <div className="input-controls">
            <label htmlFor="todo-title-input">제목</label>
            <input
              id="todo-title-input"
              type="text"
              name="title"
              value={todo.title}
              placeholder="제목을 입력하세요.."
              onChange={handleChangeInput}
            />
          </div>

          <div className="input-controls">
            <label htmlFor="todo-content-input">내용</label>
            <input
              id="todo-content-input"
              type="text"
              name="content"
              value={todo.content}
              placeholder="내용을 입력하세요.."
              onChange={handleChangeInput}
            />
          </div>

          <button
            type="button"
            className="add-btn"
            onClick={handleClickAddTodo}
          >
            등록
          </button>
        </div>

        <div className="box-area">
          <h2>Working 🔍</h2>

          <ul className="todo-list">
            {notCompleteList.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  todoList={todoList}
                  setTodoList={setTodoList}
                />
              );
            })}
          </ul>
        </div>

        <div className="box-area">
          <h2>Done 👍🏻</h2>
          <ul>
            {completeList.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  todoList={todoList}
                  setTodoList={setTodoList}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default App;
