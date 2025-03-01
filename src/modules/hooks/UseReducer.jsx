import React, { useReducer } from 'react'

// Define the initial state
const initialState = { count: 0 };
// Define the reducer function
function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function UseReducer() {
    //Example 2
    // useReducer takes the reducer function and initial state as arguments
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <div className='mb-3'>
                    <span className="fw-bold text-primary">Use Reducer Hooks</span>
                </div>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>In React, the useReducer hook is a built-in hook that allows you to manage complex state logic in a more organized and predictable manner, especially when dealing with state transitions that involve multiple actions. It is an alternative to using the useState hook when the state management becomes more intricate.</p>
                <span className="fw-bold text-primary">The primary use cases for useReducer are:</span>
                <p><b>State and Dispatch:</b>The useReducer hook takes two arguments: a reducer function and an initial state. It returns an array with two elements: the current state and a dispatch function. The dispatch function is used to send actions to the reducer, which then processes the action and returns a new state.</p>
                <p><b>Reducer Function:</b> The reducer function is responsible for handling the state transitions based on the actions dispatched. It takes two arguments: the current state and the action being dispatched. It returns the new state based on the action's logic.</p>
                <p><b>Actions:</b> Actions are objects that describe what kind of state change you want to perform. They typically have a type property to identify the action type, and additional data as needed.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Example</span></h5>
                <div className='fw-bold text-danger'>Count:<b className='text-primary'> {state.count}</b></div>
                <div className='row'>
                    <div className='col-1'>
                        <button className='btn btn-primary' onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
                    </div>
                    <div className='col-1'>
                        <button className='btn btn-primary' onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseReducer;
