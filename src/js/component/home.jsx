import React, { useState, useEffect } from "react";

const Home = () => {
  const todosURL = "https://playground.4geeks.com/todo/";

  const [todos, setTodos] = useState([]);

  function getData(){
    fetch(todosURL + "users/asd1496", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.todos);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }

  useEffect(() => {
  getData();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && todo.trim() !== "") {
      addTodo(todo);
      setTodo("");
    }
  };

  const handleDeleteItem = (index) => {
    const todoId = todos[index].id;
    fetch(`${todosURL}todos/${todoId}`, {
      method: "DELETE",
    })
      .then((response) => {
      response.json()
      getData();
    })
      .then(() => {
        
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
      });
  };

  const addTodo = (newTodoLabel) => {
    fetch(todosURL + "todos/asd1496", {
      method: "POST",
      body: JSON.stringify({ label: newTodoLabel }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos((prevTodos) => [...prevTodos, data]);
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  };

  const [todo, setTodo] = useState("");

  return (
    <div className="mt-5 container">
      <div className="fs-1 text-secondary text-center">ToDo's</div>
      <div className="bg-success">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa tu nombre"
          aria-label="UserName"
          aria-describedby="basic-addon1"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>

      <ul className="list-group mt-3">
        {todos.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center delete">
            {item.label}
            <button
              type="button"
              className="clear-icon"
              style={{ width: "30px", height: "30px" }}
              onClick={() => handleDeleteItem(index)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <p>{todos.length} items left</p>
      </div>
    </div>
  );
};

export default Home;
