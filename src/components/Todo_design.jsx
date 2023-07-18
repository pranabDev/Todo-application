import React, { useState } from "react";
import image from "../image/agenda.png";

import Todos from "./Todos";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const Todo_design = () => {
  const [todo, setTodo] = useState(Todos);

  const addTodo=(e)=>{
      const result=[...todo,{...e,id:todo.length+1}];
      setTodo(result);
  }

  const handleDelete=e=>{
    const deleteTodo= todo.filter(t=>t.id !== e.id);
    setTodo(deleteTodo);
  }

  return (
    <div className="max-w-xl mx-auto h-screen overflow-scroll px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-800">
      {/* title */}
      <div className="flex justify-center align-middle items-center">
        <img className="w-7 h-7 mt-1" src={image} alt="" />
        <h3 className="ml-2 text-3xl font-bold text-green-600">Todo List</h3>
      </div>

      {/* input feild or search bar */}

      <AddTodo addTodo={addTodo}></AddTodo>

      {/* complete all task and delete all task */}
      <div className="flex justify-evenly items-center mt-5">
        <button className="btn btn-primary">Complete all tasks</button>
        <button className="btn btn-error">Delete comp tasks</button>
      </div>

      {/* todo list */}
      {todo.map((t) => (
        <Todo handleDelete={handleDelete} key={t.id} todos={t}></Todo>
      ))}

      {/* last  */}
      <div className="flex items-center  justify-between mt-5">
        <button className="btn btn-info">Filter</button>
        <h3>Completed:1</h3>
        <h3 className="text-gray-500">Total Task:2</h3>
      </div>
    </div>
  );
};

export default Todo_design;
