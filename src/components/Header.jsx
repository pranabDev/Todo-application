import React from 'react';
import image from '../image/agenda.png';

const Header = () => {
    return (
        <div className="flex justify-center align-middle items-center">
        <img className="w-7 h-7 mt-1" src={image} alt="" />
        <h3 className="ml-2 text-3xl font-bold text-green-600">Todo List</h3>
      </div>
    );
};

export default Header;