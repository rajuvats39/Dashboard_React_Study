import React, { useCallback, useState } from 'react'
import ChildForCallBack from './ChildForCallBack';

export default function UseCallBack() {
    //Example 1
    const [count1, setCount1] = useState(0);
    console.log('Parent Component!!');

    //Example 2
    const [count2, setCount2] = useState(0);
    const incrementCount = useCallback(() => {
        setCount2((previousCount) => previousCount + 1);
        console.log('useCallBack Hooks!!')
    }, []);

    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <div className='mb-3'>
                    <span className="fw-bold text-primary">Use CallBack Hooks</span>
                </div>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>In React, useCallback hook in React is used to optimize the performance of your components by memoizing functions, ensuring that they are not recreated on every render.</p>
                <span className="fw-bold text-primary">The primary use cases for useCallback are:</span>
                <p><b>Function Memoization:</b> useCallback memoizes (caches) a function, ensuring that the same function instance is returned on subsequent renders as long as its dependencies remain unchanged. This is particularly useful to prevent unnecessary re-renders of child components that receive functions as props.</p>
                <p><b>Dependencies Array:</b> The second argument to useCallback is an array of dependencies. If any of these dependencies change between renders, the memoized function will be recreated; otherwise, it will return the previously memoized function. Make sure to list all variables that the function using useCallback relies on.</p>
                <p><b>Use Case - Event Handlers:</b> When passing event handlers to child components, using useCallback prevents those handlers from being recreated on each render. This helps avoid unnecessary re-renders of child components, as they won't treat the function as a new prop each time the parent re-renders.</p>
                <p><b>Performance Optimization:</b> Without useCallback, each render of a component that uses a function without memoization would create a new function instance. This can lead to increased memory usage and potential performance bottlenecks.</p>
                <p><b>Usage with useEffect:</b> When using useEffect, it's important to include any functions from the component scope that are used inside the effect in the dependencies array. Using useCallback in conjunction with useEffect can ensure that effects are only re-run when necessary.</p>
                <p><b>Caveats:</b> While useCallback can help optimize performance, it's important not to overuse it. Not every function needs to be memoized. Overusing useCallback might lead to unnecessary complexity in your codebase.</p>
                <p><b>Comparing with useMemo:</b> useCallback and useMemo are similar in that they both memoize values. The difference is that useCallback memoizes functions, while useMemo memoizes values (like computed results). Use useCallback for functions and useMemo for non-function values.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Example</span></h5>
                <p className='fw-bold text-danger'>Count1:<b className='text-success'> {count1}</b> </p>
                <button className='btn  btn-primary col-1' onClick={() => setCount1(count1 + 1)}>Count</button><br />
                <p className='fw-bold text-danger'>Count2: <b className='text-success'> {count2}</b></p>
                <ChildForCallBack increment={incrementCount} />
            </div>
        </div>
    )
}
