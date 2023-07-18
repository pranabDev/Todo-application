import React from 'react';
import editing from "../image/editing.png";
import deleteimage from "../image/delete.png";

const Todo = ({handleDelete,todos}) => {
    const {id,todo}=todos;
    return (
        <div>
        <div className="flex justify-between items-center mt-10">
        <span className="flex items-center">
          <input
            className="checkbox checkbox-info"
            type="checkbox"
            name=""
            id="todo"
          />
          <label className="ml-2" htmlFor="todo">
            {todo}
          </label>
        </span>
        <span className="flex">
          <span><img className="w-5 h-5 cursor-pointer" src={editing} alt="" /></span>
          <span onClick={()=>handleDelete(todos)}>
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