import React, { useState } from "react";
import editing from "../image/editing.png";
import deleteimage from "../image/delete.png";

const Todo = ({ todos, DeleteTodo, EditFindTodo, checkbox }) => {
  const { id, todo } = todos;
  const [check, setCheck] = useState(false);
  const handleCheck = (e) => {
    setCheck(e.target.checked);

    checkbox(e.target.value);
    
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <span className="flex items-center">
          <span>
            <input
              name="box1"
              className="checkbox checkbox-info mt-1"
              type="checkbox"
              value={id}
              checked={check}
              onChange={handleCheck}
            />
          </span>
          <label className="ml-2" htmlFor="">
            {check ? <del className="text-red-500">{todo}</del> : <p>{todo}</p>}
          </label>
        </span>

        <span className="flex">
          <span onClick={() => EditFindTodo(todos)}>
            <img className="w-5 h-5 cursor-pointer" src={editing} alt="" />
          </span>
          <span onClick={() => DeleteTodo(todos)}>
            <img
              className="w-5 h-5 ml-5 cursor-pointer"
              src={deleteimage}
              alt=""
            />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Todo;
