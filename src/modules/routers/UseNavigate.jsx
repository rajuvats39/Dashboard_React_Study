import React from 'react';
import { useNavigate } from 'react-router-dom';

function UseNavigate() {
    //Example 1
    const navigate = useNavigate();
    //Example 2
    const handleDynamicNavigation = (targetRoute) => {
        navigate(targetRoute);
        console.log(targetRoute);
    };
    //Example 2
    const handleConditionalNavigation = (shouldNavigate) => {
        if (shouldNavigate) {
            navigate('/dashboard');
            console.log('Navigating to dashboard page');
        } else {
            navigate('/about');
            console.log('Navigating to abou page');
        }

    };

    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <span className="fw-bold text-primary">Use Navigate</span>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>React Router DOM, useNavigate hook is used to programmatically navigate between different routes in your application. This hook allows you to obtain a function that you can call to navigate to a specific route.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-primary">The primary use cases for React Router V6 (useNavigate) are:</span></h5>
                <p><b>Handling User Interactions:</b> You can use useNavigate to respond to user interactions like button clicks, form submissions, or any other events, and then navigate the user to the appropriate route based on those interactions.</p>
                <p><b>Programmatic Redirection:</b> It allows you to implement programmatic redirection. For example, you can check some conditions or user authentication status and then decide whether to navigate the user to a specific route or back to the login page.</p>
                <p><b></b>Conditional Routing: You can conditionally render components or navigate based on certain conditions in your application logic. For instance, if a user is not authenticated, you can navigate them to a login page, and if they are authenticated, you can take them to the main dashboard.</p>
                <p><b>Integration with State Management:</b> useNavigate can be used in conjunction with state management libraries (e.g., Redux or React Context) to trigger navigation based on changes in application state.</p>
                <p><b>Redirect After Form Submission:</b> After a form is submitted successfully, you can use useNavigate to redirect the user to a success page or another relevant page.</p>
                <p><b>Implementing Navigation Guards:</b> You can implement navigation guards or middleware by using useNavigate to control access to certain routes or to prevent navigation under specific conditions (e.g., confirming unsaved changes before leaving a page).</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-primary">Example 1</span></h5>
                <button className='btn btn-primary col-2 mt-2' onClick={() => navigate('./about')}>Go To About Page</button>
                <button className='btn btn-primary col-2 mt-2' onClick={() => navigate('./dashboard')}>Go To Home Page</button>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Example 2</span></h5>
                <button className='btn btn-primary col-2 mt-2' onClick={() => handleDynamicNavigation('./about')}>Go To About Page</button>
                <button className='btn btn-primary col-2 mt-2' onClick={() => handleDynamicNavigation('./dashboard')}>Go To Home Page</button>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-danger">Example 3</span></h5>
                <button className='btn btn-primary col-2 mt-2' onClick={() => handleConditionalNavigation(true)}>Go To About Page</button>
                <button className='btn btn-primary col-2 mt-2' onClick={() => handleConditionalNavigation(true)}>Go To Home Page</button>
            </div>
        </div>
    )
}

export default UseNavigate