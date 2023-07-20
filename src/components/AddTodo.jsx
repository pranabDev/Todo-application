import React, { useEffect, useState } from "react";
import image2 from "../image/checklist.png";

const AddTodo = ({ edit, ediTable, addTodo }) => {
  const [createTodo, setCreateTodo] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ediTable) {
      edit(createTodo);
    } else {
      addTodo(createTodo);
    }
    setCreateTodo({
      todo: "",
    });
  };

  const handleData = (e) => {
    setCreateTodo({ ...createTodo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (ediTable) {
      setCreateTodo(ediTable);
    }
  }, [ediTable]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-box mx-auto mt-5 sm:w-full md:w-full lg:w-full xl:w-full">
        <div className="flex">
          <span className="flex items-center bg-gray-100 rounded rounded-r-none border-0 px-3 font-bold text-grey-100">
            <img className="w-7 h-7" src={image2} alt="" />
          </span>
          <input
            className="h-16 bg-gray-100 text-grey-darker py-2 font-normal text-grey-darkest border border-gray-100 font-bold w-full py-1 px-2 outline-none text-lg text-gray-600"
            type="text"
            value={createTodo.todo || ""}
            name="todo"
            onChange={handleData}
            placeholder="Add your todo"
          />
          <span className="flex items-center bg-gray-100 rounded rounded-l-none px-3 font-bold text-grey-100">
            <input
              type="submit"
              className="px-6 py-2 btn font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-600 focus:ring-opacity-80"
              value={ediTable ? "Edit" : "Add"}
            />
          </span>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
