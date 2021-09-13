import React, { useState, useEffect } from 'react';

import './style.css';

export default function App() {
  const [task, setTask] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log('added to the list');
  };

  return (
    <>
      <div>
        <h1>Todo App</h1>
      </div>
      <form className="submitForm" onClick="handleSubmit">
        <label htmlFor="todo">Task: </label>
        <input type="text" placeholder="Add tast to todo list" />
        <button type="Submit">Submit</button>
      </form>
      <div className="TaskContainer">
        <ul>
          <li />
        </ul>
      </div>
    </>
  );
}
