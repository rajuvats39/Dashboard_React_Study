import React, { useState, useRef } from 'react';

function UseRef() {
  const [count, setCount] = useState(0);
  // 1. Create a ref to store the previous count value
  const prevCountRef = useRef();
  // 2. Update the ref with the previous count value after every render
  React.useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <div className='mb-3'>
          <span className="fw-bold text-primary">UseRef Hook</span>
        </div>
        <span className="fw-bold text-warning">Introduction:</span>
        <p>In React, useRef is a Hook that allows you to create a mutable reference to an element or a value that persists across renders. It is commonly used for accessing and interacting with DOM elements, managing focus, and storing values that should not trigger a re-render when they change.</p>
        <span className="fw-bold text-primary">The primary use cases for useRef are:</span>
        <p><b>Accessing DOM elements:</b> You can use useRef to get a reference to a DOM element and interact with it directly, like changing its style, adding event listeners, or triggering imperative functions.</p>
        <p><b>Storing mutable values:</b> Since the ref object persists across renders, you can use it to store values that need to be accessed and updated without triggering re-renders.</p>
        <p><b>Caching expensive calculations:</b> If you have a computation that is costly in terms of performance and doesn't depend on the component's state or props, you can use useRef to store the result of the computation and reuse it across renders.</p>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Example</span></h5>
        <p className='fw-bold'>Current Count:<b className='text-success'> {count}</b> </p>
        <p className='fw-bold'>Previous Count:<b className='text-danger'> {prevCountRef.current}</b> </p>
        <button className='btn btn-danger col-1' onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default UseRef;
