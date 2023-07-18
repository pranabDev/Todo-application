import React from "react";
import image from "../image/agenda.png";
import image2 from "../image/checklist.png";
import editing from "../image/editing.png";
import deleteimage from "../image/delete.png";


const Todo_design = () => {
  return (
    <div class="max-w-xl mx-auto h-screen overflow-scroll px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-800">
      {/* title */}
      <div className="flex justify-center align-middle items-center">
        <img className="w-7 h-7 mt-1" src={image} alt="" />
        <h3 className="ml-2 text-3xl font-bold text-green-600">Todo List</h3>
      </div>

      {/* input feild or search bar */}
      <div class="search-box mx-auto mt-5 sm:w-full md:w-full lg:w-full xl:w-full">
        <div class="flex">
          <span class="flex items-center bg-gray-100 rounded rounded-r-none border-0 px-3 font-bold text-grey-100">
            <img className="w-7 h-7" src={image2} alt="" />
          </span>
          <input
            class="h-16 bg-gray-100 text-grey-darker py-2 font-normal text-grey-darkest border border-gray-100 font-bold w-full py-1 px-2 outline-none text-lg text-gray-600"
            type="text"
            placeholder="Add your todo"
          />
          <span class="flex items-center bg-gray-100 rounded rounded-l-none px-3 font-bold text-grey-100">
            <button class="px-6 py-2 btn font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-600 focus:ring-opacity-80">
              Add
            </button>
          </span>
        </div>
      </div>
      {/* complete all task and delete all task */}
      <div className="flex justify-evenly items-center mt-5">
        <button className="btn btn-primary">Complete all tasks</button>
        <button className="btn btn-error">Delete comp tasks</button>
      </div>

      {/* todo list */}
      <div className="flex justify-between items-center mt-10">
        <span className="flex items-center">
          <input
            className="checkbox checkbox-info"
            type="checkbox"
            name=""
            id="todo"
          />
          <label className="ml-2" for="todo">
            {" "}
            I have a bike
          </label>
        </span>
        <span className="flex">
          <img className="w-5 h-5 cursor-pointer" src={editing} alt="" />
          <img
            className="w-5 h-5 ml-5 cursor-pointer"
            src={deleteimage}
            alt=""
          />
        </span>
      </div>

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
