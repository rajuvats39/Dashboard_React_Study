import React, { useState } from 'react';

const Button = ({ onIncrement }) => {
    return (
        <div>
            <button className='btn btn-danger col-1' onClick={onIncrement}>Increment</button>
        </div>
    );
};

const Display = ({ count }) => {
    return <p className='text-warning'>Count: <b className='text-primary'>{count}</b></p>;
};

export default function LiftingStateUp() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <span className="fw-bold text-primary">Lifting State Up</span>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>In React, "lifting state up" is a design pattern used to manage shared state among multiple components by moving the state from a lower-level component to a higher-level component in the component tree.</p>
                <p>This pattern is especially useful when two or more components need to share the same state or when a child component needs to update the state of its parent or another sibling component.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Here's how lifting state up works in react:</span></h5>
                <p><b>Identify the shared state:</b>When you have two or more components that need access to the same state or need to synchronize their data, you can identify the common state that needs to be lifted up.</p>
                <p><b>Move the state up:</b>Instead of keeping the state in one of the child components, you move it to the parent component that is an ancestor to all the components that require access to the state. This parent component now becomes the single source of truth for the shared state.</p>
                <p><b>Pass the state down as props:</b>After moving the state to the parent component, you pass it down to the child components as props. This allows child components to read and use the state as needed.</p>
                <p><b>Modify the state through callbacks:</b>To update the state from child components, you pass down callback functions (also as props) from the parent. When a child component needs to change the state, it calls the callback, and the parent component handles the state update. This way, the parent component controls how the state is modified.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Here's how lifting state up works in react:</span></h5>
                <Display count={count} />
                <Button className='btn btn-primary' onIncrement={increment} />
            </div>
        </div>
    )
}
