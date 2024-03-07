import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Nome da Tarefa",
      category: "Categoria da Tarefa",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 100000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  const [search, setSearch] = useState("");

  console.log(filter, sort);
  return (
    <main>
      <div className="container">
        <h1>Lista de Tarefas</h1>
        <Search
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          search={search}
          setSearch={setSearch}
        />
        <Filter
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
          showFilter={showFilter}
        />
        <div className="todo-list-contender">
          <div className="todo-list">
            {todos
              .sort((a, b) =>
                sort === "Asc"
                  ? a.text.localeCompare(b.text)
                  : b.text.localeCompare(a.text)
              )
              .filter((todo) =>
                filter === "All"
                  ? true
                  : filter === "Complete"
                  ? todo.isCompleted
                  : !todo.isCompleted
              )
              .filter((todo) =>
                todo.text.toLowerCase().includes(search.toLowerCase())
              )
              .map((todo) => (
                <Todo
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                  key={todo.id}
                  todo={todo}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="container input-area">
        <TodoForm addTodo={addTodo} />
      </div>
    </main>
  );
}
export default App;
