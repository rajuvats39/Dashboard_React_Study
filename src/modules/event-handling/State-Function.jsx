import React, { useState } from 'react';

function StateFunction() {
    let [message, setMessage] = useState('I am Raju Kumar Singh!');
    
    const updateMessage = () => {
        setMessage('I am Raju Vats!');
        alert(message);
    }
    console.log('Render.....................................');
    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <span className="fw-bold text-primary">State Using Function Component</span>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>The state is an updatable structure that is used to contain data or information about the component. The state in a component can change over time. The change in state over time can happen as a response to user action or system event. A component with the state is known as stateful components. It is the heart of the react component which determines the behavior of the component and how it will render. They are also responsible for making a component dynamic and interactive.</p>
                <p>A state must be kept as simple as possible. It can be set by using the setState() method and calling setState() method triggers UI updates. A state represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly. To set an initial state before any interaction occurs, we need to use the getInitialState() method.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-primary">State</span></h5>
                <h4 className='text-danger fw-bold'>{message}</h4>
                <button className='btn btn-success col-2' onClick={updateMessage}>Update Value</button>
            </div>
        </div>
    );
};

export default StateFunction;