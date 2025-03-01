import React, { useState } from 'react'
import PropsUser from './Props-User';

export default function PassFunctionAsProps() {

    //Example 1 Function to be passed as a prop.
    const handleButtonClick = () => {
        console.log('Button Clicked!');
    }

    //Example 2 Function to be passed as a prop.
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <div className='mb-3'>
                    <span className="fw-bold text-primary">Pass Function As Props</span>
                    <p>In React, you can pass functions as props to child components. This allows you to communicate and share functionality between different parts of your application.</p>
                </div>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Function As Props</span></h5>
                <PropsUser handleClick={handleButtonClick} count={count} increment={incrementCount} />
            </div>
        </div>
    )
}
