import React, { useRef, useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  const todoVal = useRef();
  const [editedTodo, setEditedTodo] = useState(null);

  //* Add Todo Functions
  const addTodo = (event) => {
    event.preventDefault();
    if (todoVal.current.value === "") {
      alert("Add something in Todo");
      return;
    }
    todo.push(todoVal.current.value);
    setTodo([...todo]);
    console.log(todo);
    todoVal.current.value = "";
  };

  //* Edit Todo Functions
  const editTodo = (index) => {
    const newTodo = prompt("Enter new Todo");
    if (newTodo === null || newTodo === "") {
      alert("Please enter something");
      return;
    }
    todo[index] = newTodo;
    setTodo([...todo]);
    setEditedTodo(index);
  };

  //* Delete Todo Function
  const deleteTodo = (index) => {
    todo.splice(index, 1);
    setTodo([...todo]);
  };

  return (
    <>
      <div className="main max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12 rounded shadow-md">
        <h1 className="text-4xl font-bold text-center mb-5">Todo App</h1>
        <form onSubmit={addTodo} className="flex flex-col mb-4">
          <input
            type="text"
            placeholder="Enter Your Todo"
            ref={todoVal}
            className="p-2 pl-10 text-sm text-gray-700"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold m-4 py-2 px-4 rounded"
          >
            Add Todo
          </button>
        </form>
        <ul className="divide-y divide-gray-200">
          {todo.map((item, index) => {
            return (
              <li key={index} className="py-4">
                <div className="flex justify-between">
                  <span
                    className={`text-lg ${
                      editedTodo === index ? "text-white" : ""
                    }`}
                  >
                    {item}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => editTodo(index)}
                      className="bg-green-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTodo(index)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default App;
