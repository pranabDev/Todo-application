import React, { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import DelCom from "./Del_com";
import Filter from "./Filter";
import Header from "./Header";
import todos from "../components/Todos";

const Todo_design = () => {
  const [todo, setTodo] = useState(todos);
  const [editable, setEditable] = useState(null);
  const addTodo = (value) => {
    const result = [...todo, { id: todo.length + 1, ...value }];
    setTodo(result);
  };


  const checkbox=value=>{
    const find=todo.find((t) => t.id === +value);
    const index = todo.findIndex((t) => t.id === +value);
    let copyTodos = [...todo];
    copyTodos.splice(index, 1, {...find,check:true});
    setTodo(copyTodos);
  }


  const DeleteTodo = (e) => {
    const result = todo.filter((t) => t.todo !== e.todo);
    setTodo(result);
  };

  const EditTodo = (value) => {
    const index = todo.findIndex((t) => t.id === value.id);
    let copyTodos = [...todo];
    copyTodos.splice(index, 1, value);
    setTodo(copyTodos);
  };

  const EditFindTodo = (e) => {
    const result = todo.find((t) => t.todo === e.todo);
    setEditable(result);
  };
  

    const result = todo.filter(t=>t.check===true);

    const handleAllDelete=()=>{
      const result = todo.filter(t=>t.check!==true);
      setTodo(result)
    }

  return (
    <div className="max-w-xl mx-auto h-screen overflow-scroll px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Header></Header>
      <AddTodo
        addTodo={addTodo}
        editable={editable}
        EditTodo={EditTodo}
      ></AddTodo>
      <DelCom handleAllDelete={handleAllDelete}></DelCom>
      {todo.map((t) => (
        <Todo
          key={t.id}
          todos={t}
          DeleteTodo={DeleteTodo}
          EditFindTodo={EditFindTodo}
          todoss={todo}
          checkbox={checkbox}
        ></Todo>
      ))}
      <Filter result={result} todo={todo}></Filter>
    </div>
  );
};

export default Todo_design;
