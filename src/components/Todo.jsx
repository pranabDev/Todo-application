import React, { useCallback, useEffect, useState } from "react";
import editing from "../image/editing.png";
import deleteimage from "../image/delete.png";

const Todo = ({CompleteTask, allTodo,setTodo, handleDelete, editTodos, todos }) => {
  const { todo } = todos;
  const [check, setCheck] = useState(false);
  const [checked, setChecked]=useState({
    box1: false
  });

// console.log(checked)

useEffect(()=>{
    
      CompleteTask(checked)
    
},[checked])



const handleChange = (event) => {
  setCheck(event.target.checked)
  setChecked((prevState) => ({
    ...prevState,
    [event.target.name]: event.target.checked
  }));
};

const handleCheck=e=>{
    if(checked.box1 === false ){
      setTodo([...allTodo,{...e,id:allTodo.length+1, box1:!checked.box1}])
    }else{
      setTodo(allTodo.filter(function (item) {
        return (item.box1 != (!checked.box1));
    }))
    }
}



  return (
    <div>
      <div className="flex justify-between items-center mt-10">
          <span onClick={()=>handleCheck(todos)} className="flex items-center">
            <span>
            <input
            name="box1"
              className="checkbox checkbox-info mt-1"
              type="checkbox"
              checked={checked.box1}
              id="todo"
              onChange={handleChange}
            />
            </span>
            <label className="ml-2" htmlFor="">
              {check ? <del className="text-red-500">{todo}</del> : todo}
            </label>
          </span>
        
        <span className="flex">
          <span onClick={() => editTodos(todos)}>
            <img className="w-5 h-5 cursor-pointer" src={editing} alt="" />
          </span>
          <span onClick={() => handleDelete(todos)}>
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
