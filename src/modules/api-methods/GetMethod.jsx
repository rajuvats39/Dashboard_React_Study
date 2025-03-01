import React, { useState, useEffect } from 'react';


function GetMethod() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
            console.log(response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }).then((data) => {
            setData(data);
            setLoading(false);
            console.log(data);
        }).catch((error) =>
            console.log('Error: ' + error.message))
    }, []);

    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <div className='mb-3'>
                    <span className="fw-bold text-primary">Fetch API Get Method</span>
                </div>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>In React, The Fetch API is a built-in web API in JavaScript that allows you to make network requests, such as fetching data from a server. When using the Fetch API in a React functional component, you can integrate it with your component's lifecycle to handle data fetching and rendering.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-primary">The primary use cases for Fetch API are:</span></h5>
                <p><b>Making GET Requests:</b> Fetching data from a server or an API. Use the fetch function to make a GET request and handle the response.</p>
                <p><b>Making POST Requests:</b> Sending data to a server. Use the fetch function with the POST method and provide the body with the data to send.</p>
                <p><b>Handling Errors:</b> Handling errors that may occur during an HTTP request. Check the response status code and use .catch to handle errors.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-primary">Fetch API Get Method Example</span></h5>
                {
                    loading ? (
                        <h4 className='text-success'>Loading...</h4>
                    ) : (
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((data, index) => (
                                    <tr key={index} >
                                        <td>{data.id}</td>
                                        <td>{data.title}</td>
                                        <td>{data.body}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                }

            </div>
        </div>
    )
}

export default GetMethod;