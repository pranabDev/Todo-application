import React, { useEffect, useState } from "react";
import image from "../image/agenda.png";

import Todos from "./Todos";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

const Todo_design = () => {
  const [todo, setTodo] = useState(Todos);
  const [value, setValue] = useState([]);
  const [ediTable, setEdiTable] = useState(null);
  const [selected, setSeleted] = useState([]);
  const [selectedobj, setSeletedobj] = useState({});

  const addTodo = (e) => {
    const result = [...todo, { ...e, id: todo.length + 1 }];
    setTodo(result);
  };

  const handleDelete = (e) => {
    const deleteTodo = todo.filter((t) => t.id !== e.id);
    if (deleteTodo) {
      setTodo(deleteTodo);
      toast.success("Task Deleted Successfully", {
        position: "top-center",
      });
    } else {
      toast.error("Task Not Deleted Successfully");
    }
  };

  const edit = (value) => {
    const Index = todo.findIndex((e) => e.id === ediTable.id);
    let copyTodo = [...todo];
    copyTodo.splice(Index, 1, value);
    if (copyTodo) {
      setTodo(copyTodo);
      toast.success("Task Updeted Successfully", {
        position: "top-center",
      });
    }
  };

  const editTodos = (e) => {
    const result = todo.find((t) => t.id === e.id);
    setEdiTable(result);
  };

  const CompleteTask = (values) => {
    const complete = value.find((t) => t.box1 === values.box1);
    if (complete?.box1) {
      setSeleted([...selected, complete]);
    }
  };


  useEffect(()=>{
    {value.map(v=>{
      setSeletedobj(v)
    })}
  },[value]);


  const deleteSelected=obj=>{
        const index=value.findIndex(p=>p.todo === obj.todo);
        
        const index2=todo.findIndex(d=>d.todo === obj.todo);
        
        let copySelected=[...selected];
        let copyTodos=[...todo];
        copyTodos.splice(index2,(selected.length));
        setTodo(copyTodos);

        copySelected.splice(index,(selected.length))
        setValue(copySelected);
      // console.log(selected)
      
  }

  console.log(todo)
  console.log(selected)

  // console.log(selected)

// console.log(value)
  
      // setTodo(allTodo.filter(function (item) {
      //   return (item.box1 != (!checked.box1));
      // const complete=items?.filter(t=>t.box1 !== values.box1);
      // setValue(complete)
    // });

  return (
    <div className="max-w-xl mx-auto h-screen overflow-scroll px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-800">
      {/* title */}
      <div className="flex justify-center align-middle items-center">
        <img className="w-7 h-7 mt-1" src={image} alt="" />
        <h3 className="ml-2 text-3xl font-bold text-green-600">Todo List</h3>
      </div>

      {/* input feild or search bar */}

      <AddTodo edit={edit} ediTable={ediTable} addTodo={addTodo}></AddTodo>

      {/* complete all task and delete all task */}
      <div className="flex justify-evenly items-center mt-5">
        <button className="btn btn-primary">Complete all tasks</button>
        <button
        onClick={()=>deleteSelected(selectedobj)}
          className="btn btn-error"
        >
          Delete comp tasks
        </button>
      </div>

      {/* todo list */}
      {todo?.map((t) => (
        <Todo
          setTodo={setValue}
          CompleteTask={CompleteTask}
          allTodo={value}
          editTodos={editTodos}
          handleDelete={handleDelete}
          key={t.id}
          todos={t}
        ></Todo>
      ))}

      {/* last  */}
      <div className="flex items-center  justify-between mt-5">
        <button className="btn btn-info">Filter</button>
        <h3>Completed:{value.length}</h3>
        <h3 className="text-gray-500">Total Task: {todo.length}</h3>
      </div>
    </div>
  );
};

export default Todo_design;
