import React from 'react';

const Hooks = () => {
  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <span className="fw-bold text-primary">Hooks</span>
        <span className="fw-bold text-warning">Introduction:</span>
        <p>In React, "hooks" are functions that allow you to use state and other React features in functional components, which were traditionally stateless. Hooks were introduced in React version 16.8 to provide a more elegant and reusable way to manage state and lifecycle behaviors in functional components.</p>
        <p>Before hooks, React components were mainly created using class components, which allowed the use of lifecycle methods and state. However, class components can become cumbersome and harder to maintain as the component logic grows. Hooks provide an alternative way to write components in a more concise and readable manner.</p>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h4><span class="badge text-bg-success">Types Of Hooks</span></h4>
        <h5 className='fw-bold text-danger'>State Hooks</h5>
        <p><b>01)useState:</b> Adds state to functional components.</p>
        <p><b>02)useReducer:</b> Manages complex state logic.</p>
        <h5 className='fw-bold text-danger'>Effect Hooks</h5>
        <p><b>03)useEffect:</b> Handles side effects like fetching data, DOM manipulation.</p>
        <p><b>04)useLayoutEffect:</b> Runs after DOM updates, before paint.</p>
        <h5 className='fw-bold text-danger'>Reference and Memoization Hooks</h5>
        <p><b>05)useRef:</b> Stores mutable values and provides access to DOM elements.</p>
        <p><b>06)useMemo:</b> Memoizes computed values for performance optimization.</p>
        <p><b>07)useCallback:</b> Memoizes functions to prevent unnecessary re-creations.</p>
        <h5 className='fw-bold text-danger'>Context and Custom Hook Helpers</h5>
        <p><b>08)useContext:</b> Consumes context values for state sharing across components.</p>
        <p><b>09)useImperativeHandle:</b> Customizes methods exposed via refs.</p>
        <p><b>10)useDebugValue:</b> Displays custom hook state in React DevTools for debugging.</p>
      </div>
    </div>
  );
};

export default Hooks;