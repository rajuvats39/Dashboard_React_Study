import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const Child = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus(); // Expose focusInput method to parent
    }
  }));
  return <input className='form-control' ref={inputRef} />;
});

function UseImperativeHandle() {
  const childRef = useRef();
  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <div className='mb-3'>
          <span className="fw-bold text-primary">UseImplementiveHandle Hook</span>
        </div>
        <span className="fw-bold text-warning">Introduction:</span>
        <p>The useImplementiveHandle hook does not exist in React's standard library. However, you may be referring to a custom or non-standard hook. Based on the name, it could be a custom hook designed to handle a particular implementation or functionality in your project. Let's break it down and create a possible custom useImplementiveHandle hook based on a typical use case in React.</p>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Example</span></h5>
        <Child ref={childRef} />
        <button className='btn btn-danger mt-3 col-1' onClick={() => childRef.current.focusInput()}>Focus</button>
      </div>
    </div>
  );
}

export default UseImperativeHandle;
