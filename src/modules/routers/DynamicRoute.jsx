import React from 'react'

function DynamicRoute() {

    // Example 1: Dynamic with Route
    const userData = {
        users: [
            { id: 1, name: 'Alice', age: 25 },
            { id: 2, name: 'Bob', age: 30 },
            { id: 3, name: 'Charlie', age: 28 },
            { id: 4, name: 'David', age: 32 },
            { id: 5, name: 'Eve', age: 27 },
        ],
    };

    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <span className="fw-bold text-primary">Dynamic Route and Parem</span>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>React Router DOM, Routes are perhaps the most important part of a React Router app. They couple URL segments to components, data loading and data mutations. Through route nesting, complex application layouts and data dependencies become simple and declarative.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-primary">The primary use cases for React Router V6 are:</span></h5>
                <h5><span class="badge text-bg-secondary">Dynamic Routes:</span></h5>
                <p>Dynamic routes in React Router allow you to create routes with variable segments in the URL. These variable segments can change, and you can capture these changes to render different components or content based on the URL.</p>
                <h3 class="text-danger fw-bold">User List</h3>
                <ul className='ms-3'>
                    {userData.users.map((user) => (
                        <li key={user.id}>
                            <a href={`/user/${user.id}`}>{user.name}, {user.age}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DynamicRoute