import React from "react";
import image from "../image/agenda.png";
import image2 from "../image/checklist.png";

const Todo_design = () => {
  return (
    <div class="max-w-2xl mx-auto h-screen px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex justify-center align-middle items-center">
        <img className="w-7 h-7 mt-1" src={image} alt="" />
        <h3 className="ml-2 text-3xl font-bold text-green-600">Todo List</h3>
      </div>

      
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
            <span
                    class="flex items-center bg-gray-100 rounded rounded-l-none border-0 px-3 font-bold text-grey-100">
                  <button class="px-6 py-2 btn font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-600 focus:ring-opacity-80">
              Add
            </button>
                </span>
          </div>
        </div>
      </div>
    
  );
};

export default Todo_design;
