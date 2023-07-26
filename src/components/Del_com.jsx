import React from 'react';


const Del_com = ({handleAllDelete}) => {

    return (
        <div className="flex justify-evenly items-center mt-5">
        <button className="btn btn-primary">Complete all tasks</button>
        <button onClick={handleAllDelete} className="btn btn-error">Delete comp tasks</button>
      </div>
    );
};

export default Del_com;