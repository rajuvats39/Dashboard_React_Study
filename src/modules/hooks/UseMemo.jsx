import React, { useState } from 'react'

export default function UseMemo() {
    const [count, setCount] = useState(0);

    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <span className="fw-bold text-primary">Memo</span>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>In React, memo is a higher-order component (HOC) used to optimize functional components by preventing unnecessary re-renders. It's a performance optimization technique aimed at improving the efficiency of React applications.</p>
                <p>When a functional component is wrapped with React.memo, React will automatically memoize the component. Memoization means that React will store the rendered output of the component and only re-render it when the component's props have changed. If the props remain the same, React will reuse the previously rendered output, avoiding the need to recalculate or re-render the component.</p>
                <span className="fw-bold text-primary">Use Memo Hook</span>
                <p>In React, The useMemo hook in React is used to memoize the result of a computation and optimize the performance of functional components. It's one of the built-in hooks that React provides to help us manage expensive calculations or data processing efficiently.</p>
                <p>The basic purpose of useMemo is to cache the return value of a function and only recompute it when the dependencies specified in the second argument of the useMemo call change. This behavior prevents unnecessary recalculations and can significantly improve the performance of our components.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Example</span></h5>
                <h1>Count: {count}</h1>
                <button className='btn btn-primary mt-2 col-1' onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </div>
    )
}