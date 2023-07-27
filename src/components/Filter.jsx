import React from "react";
import './Filter.css';

const Filter = ({handleComplite,handleUncomplte,handleAllTodo, result, todoLength }) => {
  
  
  return (
    <div className="flex items-center  justify-between">
  
        <div className="cardnew mt-20">
          <button className="btn btn-info">Filter</button>
          <p onClick={handleAllTodo}>All</p>
          <p>Uncompleted</p>
          <p onClick={()=>handleComplite(result)}>Completed</p>

        
      </div>
      <h3>Completed : {result.length}</h3>
      <h3 className="text-gray-500">Total Task : {todoLength.length}</h3>
    </div>
  );
};

export default Filter;
