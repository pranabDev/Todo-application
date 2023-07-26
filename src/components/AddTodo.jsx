import React, { useEffect, useState } from "react";
import image2 from "../image/checklist.png";

const AddTodo = ({ addTodo ,editable,EditTodo}) => {
  const [value, setValue] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editable){
      EditTodo(value)
    }else{
      addTodo(value);
    }
    e.target.reset();
  };

  const handleValue = (e) => {
    const result = { ...value, [e.target.name]: e.target.value };
    setValue(result);
  };


  useEffect(()=>{
    setValue(editable)
  },[editable])

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-box mx-auto mt-5 sm:w-full md:w-full lg:w-full xl:w-full">
        <div className="flex">
          <span className="flex items-center bg-gray-100 rounded rounded-r-none border-0 px-3 font-bold text-grey-100">
            <img className="w-5 h-5" src={image2} alt="" />
          </span>
          <input
            className="h-14 bg-gray-100 text-grey-darker py-2 font-normal text-grey-darkest border border-gray-100 font-bold w-full py-1 px-2 outline-none text-lg text-gray-600"
            type="text"
            name="todo"
            placeholder="Add your todo"
            value={value?.todo || ""}
            onChange={handleValue}
           
          />
          <span className="flex items-center bg-gray-100 rounded rounded-l-none px-3 font-bold text-grey-100">
            <input
              type="submit"
              className="px-6 py-1 btn font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-600 focus:ring-opacity-80"
              value={editable? "EDIT" : "ADD"}
            />
          </span>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
