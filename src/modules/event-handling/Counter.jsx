import React, { useState } from 'react';

function Counter() {
    let [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    console.log('Render.....................................');
    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <div className='mb-3'>
                    <span className="fw-bold text-primary">Counter using useState</span>
                </div>
                <h4 className='text-danger fw-bold'>Count : - <span className='text-success'>{count}</span></h4>
                <button className='btn btn-success col-1' onClick={increment}>Count</button>
            </div>
        </div>
    );
};

export default Counter;