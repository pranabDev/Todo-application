import React from 'react';

const Filter = ({result,todo}) => {
    return (
        <div className="flex items-center  justify-between mt-5">
        <button className="btn btn-info">Filter</button>
        <h3>Completed : {result.length}</h3>
        <h3 className="text-gray-500">Total Task : {todo.length}</h3>
      </div>
    );
};

export default Filter;