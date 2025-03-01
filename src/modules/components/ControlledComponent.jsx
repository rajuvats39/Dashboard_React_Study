import React, { useState } from 'react'

export default function ControlledComponent() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    }

    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
            <span className="fw-bold text-primary">Controlled Components</span>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>React is a JavaScript library, created developed by Facebook. It was released in 2011</p>
                <p>It allows developers to build reusable UI components, making the development process more efficient and manageable.</p>
            </div>

            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Examples</span></h5>
                <p>Current Value: {inputValue}</p>
                <input type="text" className='form-control' placeholder='Type Here' value={inputValue} onChange={handleChange} />

            </div>
        </div>
    )
}
