import React, { useState } from 'react'

export default function HighOrderComponent() {

    // const [count, setCount] = useState(0);
    // const incrementCount = () => {
    //     setCount(prevCount => prevCount + 1);
    // }

    // Higher-Order Function: withCounter
    const withCounter = (WrappedComponent) => {
        return function WithCounter(props) {
            const [count, setCount] = useState(0);
            const increment = () => {
                setCount(count + 1);
            }
            // Pass count and incrementCount as props to the WrappedComponent
            return (
                <WrappedComponent count={count} incrementCount={increment}  {...props} /> // Spread any other props received
            );
        }
    }

    // Functional Component: Counter
    const Counter = ({ count, incrementCount }) => {
        return (
            <div>
                <h2>Count: {count}</h2>
                <button className='btn btn-primary col-1' onClick={incrementCount}>Increment</button>
            </div>
        )
    };

    // Wrap the Counter component with the withCounter HOC
    const CounterWithEnhancement = withCounter(Counter);

    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <div className='mb-3'>
                    <span className="fw-bold text-primary">High Order Component</span>
                </div>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>In React, a "Pure Component" is a specific type of component that is designed to optimize performance by minimizing unnecessary renders. In React, components are re-rendered whenever their state or props change. However, if a component's render output is solely determined by its props and state, and they have not changed, there is no need to re-render the component. This is where Pure Components come into play.</p>
                <p>A Pure Component in React is a class component that extends the React.PureComponent class, or, since React 16.6, it can also be written as a functional component that utilizes the React.memo() higher-order component (HOC). The main characteristic of a Pure Component is that it automatically implements a shallow comparison of props and state to decide whether to re-render or not.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Example</span></h5>
                {/* <h2>Count: {count}</h2>
                <button className='btn  btn-primary col-1' onClick={incrementCount}>Count</button> */}

                <CounterWithEnhancement />
            </div>
        </div>
    )
}
