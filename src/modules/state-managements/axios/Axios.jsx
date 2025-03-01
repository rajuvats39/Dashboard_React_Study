import React from 'react'
import GetDataAPI from './GetDataAPI';

function Axios() {
    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <span className="fw-bold text-primary">Axios in React</span>
                <p className="fw-bold text-warning"></p>
                <p>In React, Axios is a popular JavaScript library that is commonly used in React applications for making HTTP requests to external resources, such as APIs or web services. It provides a simple and convenient way to send HTTP requests and handle responses.</p>
                <p>Axios is a popular HTTP client for making requests in JavaScript. It is used to send HTTP requests to a server and handle the responses.It provides a simple and easy way to send HTTP Request and handle responses </p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h4 className='fw-bold text-primary'>The primary use cases for Fetch API are:</h4>
                <p><b>Making HTTP Requests: </b> Axios can be used to make GET, POST, PUT, DELETE, and other types of HTTP requests. It abstracts the underlying XMLHttpRequest or Fetch API, providing a more user-friendly API.</p>
                <p><b>Handling Promises:</b> Axios returns promises, making it easy to work with asynchronous code and handle responses using .then() and .catch().</p>
                <p><b>Request and Response Interceptors:</b> Axios allows you to intercept and modify requests and responses globally or for specific requests. This can be useful for adding authentication tokens, error handling, or logging.</p>
                <p><b>Setting Headers:</b> You can easily set custom headers for your requests, which is often necessary for authentication or passing additional information to the server.</p>
                <p><b>Canceling Requests:</b> Axios allows you to cancel requests using a cancel token. This can be helpful for handling user interactions, such as canceling a request when a component unmounts. </p>
                <p><b>Handling Errors:</b> Axios provides a structured way to handle errors and responses, making it easier to display error messages to users or log errors for debugging. </p>
                <p><b>Use in React Applications:</b> Axios is commonly used in React applications to fetch data from APIs, update the state, and render UI components based on the fetched data. </p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h4 className='fw-bold text-primary'>Examples</h4>
                <GetDataAPI />
            </div>
        </div>
    )
}

export default Axios;