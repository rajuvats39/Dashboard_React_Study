import React, { useEffect, useState } from 'react';

function UseEffect() {
    //Example 1    
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(100);

    //Example 2
    useEffect(() => {
        console.log('After Render Total!!'); //Only total will print in console!!
    }, [total]); //Applying here condition(total) to show specific effect!!

    useEffect(() => {
        console.log('After Render Count!!'); //Only count will print in console!!
    }, [count]); //Applying here condition(count) to show specific effect!!

    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <span className="fw-bold text-primary">Hooks-useEffect()</span>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>In the context of React.js, useEffect is a built-in hook that allows you to perform side effects in functional components. Side effects typically involve tasks that should be executed after the component has rendered, such as fetching data from an API, subscribing to event listeners, or updating the document title. It is analogous to lifecycle methods like <b>componentDidMount</b>, <b>componentDidUpdate</b>, and <b>componentWillUnmount</b>  in class components.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
            <h5 className="fw-bold text-primary mb-3">Example</h5>
                <div className='row'>
                    <div className='col-2'>
                        <p className='text-danger fw-bold'>Count: {count}</p>
                    </div>
                    <div className='col-2'>
                        <p className='text-success fw-bold'>Total: {total}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <button className='btn btn-primary me-5' onClick={() => setCount(count + 1)}>Count</button>
                    </div>
                    <div className='col-2'>
                        <button className='btn btn-primary' onClick={() => setTotal(total + 1)}>Total</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseEffect;