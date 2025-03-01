import React from 'react'
import { useParams } from 'react-router-dom';

function DynamicRouteParam() {

    const userData = {
        users: [
            { id: 1, name: 'Alice', age: 25 },
            { id: 2, name: 'Bob', age: 30 },
            { id: 3, name: 'Charlie', age: 28 },
            { id: 4, name: 'David', age: 32 },
            { id: 5, name: 'Eve', age: 27 },
        ],
    };

    // Example 2: Dynamic  with Parameter
    const { userId } = useParams();
    console.log(userId);
    const user = new userData.users.find((user) => user.id === parseInt(userId));

    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <span className="fw-bold text-primary">Dynamic Route and Parem</span>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>React Router DOM, Routes are perhaps the most important part of a React Router app. They couple URL segments to components, data loading and data mutations. Through route nesting, complex application layouts and data dependencies become simple and declarative.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-secondary">Parameters (Params):</span></h5>
                <p>  Parameters are values extracted from dynamic segments in the URL in React Router. You can access these parameters through the useParams hook or the match object in class-based components.</p>
                <h3 className="text-danger fw-bold">User Profile</h3>
                {user ? (
                    <>
                        <h3 className='text-primary'>Name: {user.id}</h3>
                        <p className='text-success'>ID: {user.name}</p>
                        <p className='text-danger'>Age: {user.age}</p>
                    </>
                ) : (
                    <p className='text-danger'>User Not Found!!</p>
                )}
            </div>
        </div>
    )
}

export default DynamicRouteParam