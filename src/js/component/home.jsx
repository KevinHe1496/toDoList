import React, { useState } from "react";

const Home = () => {
    const [todo, setTodo] = useState("");
    const [toDoList, setToDoList] = useState([]);
    const [isHidden, setIsHidden] = useState(false);

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && todo.trim() !== "") {
            setToDoList([...toDoList, todo]);
            setTodo("");
        }
    };

    const handleDeleteItem = (index) => {
        setToDoList(toDoList.filter((item, i) => i !== index));
    };

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
  {toDoList.map((item, index) => (
    <li key={index} className="list-group-item d-flex justify-content-between align-items-center delete">
      {item}
      <button
        type="button"
        className="clear-icon" 
        style={{ width: "30px", height: "30px"}}
        onClick={() => handleDeleteItem(index)}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  ))}
</ul>

            
            <div className="mt-5">
                <p>{toDoList.length} items left</p>
            </div>
        </div>
    );
};

export default Home;
