import React, { useState } from 'react';

function UseState() {
  // 1. Declare a state variable "count" with initial value 0
  const [count, setCount] = useState(0);

  // 2. Function to handle button click and update the state
  const increment = () => {
    setCount(count + 1);  // Update state by incrementing the count
  };

  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <div className='mb-3'>
          <span className="fw-bold text-primary">UseState Hook</span>
        </div>
        <span className="fw-bold text-warning">Introduction:</span>
        <p>The useState hook is one of the most commonly used hooks in React. It allows you to add state management to functional components. Before the introduction of hooks, managing state was only possible in class components, but with useState, functional components can now maintain and update their state.</p>
      </div>

      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Syntax of useState Hook</span></h5>
        <p><b>state:</b>This is the current state value.</p>
        <p><b>setState:</b>This is the function you use to update the state. It can be called with a new value (or a function that returns the new value).</p>
        <p><b>initialValue:</b>This is the initial state value (the value the state will have when the component is first rendered).</p>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Example</span></h5>
        <p className='fw-bole'>Counter: <b className='text-danger'>{count}</b></p>
        <button className='btn btn-primary col-1' onClick={increment}>Increment</button>
      </div>
    </div>

  );
}

export default UseState;
