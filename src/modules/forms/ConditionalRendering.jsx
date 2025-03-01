import React, { useState } from 'react'

export default function ConditionalRendering() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginToggle = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    if (isLoggedIn) {
        return (
            <div className="row py-5">
                <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                    <div className='mb-3'>
                        <span className="fw-bold text-primary">Conditional Rendering</span>
                        <p>Conditional rendering in React allows you to render different UI elements based on certain conditions. This can be done using JavaScript's conditional statements (if, else, ternary operator, or && operator).</p>
                    </div>
                </div>
                <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                    <h5><span class="badge text-bg-success">1. Using if/else Statement</span></h5>
                    <h1>Welcome, User!</h1>
                    <button onClick={handleLoginToggle}>Logout</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h1>Please log in</h1>
                <button className='btn btn-primary col-1' onClick={handleLoginToggle}>Login</button>
            </div>
        );
    }
}
