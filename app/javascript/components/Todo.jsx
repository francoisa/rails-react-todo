import React from 'react';

const Todo = ({ name }) => {
  return (
    <div>
      <h2>Hello, {name}! This component is running on React.</h2>
      <button className="btn btn-primary" onClick={() => alert(`Hello from the button in ${name}'s component!`)}>
        Click Me
      </button>
    </div>
  );
};

export default Todo;