import React, { useState } from 'react';

function PostMethod() {

    const [formData, setFormData] = useState({
        title: '',
        body: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

        //Create the request object
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };

        //Send the post request
        fetch(apiUrl, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            }).catch((error) => {
                console.log('Error:', error)
            });
    }

    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <div className='mb-3'>
                    <span className="fw-bold text-primary">Fetch API Post Method</span>
                </div>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>In React, The Fetch API is a built-in web API in JavaScript that allows you to make network requests, such as fetching data from a server. When using the Fetch API in a React functional component, you can integrate it with your component's lifecycle to handle data fetching and rendering.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-primary">The primary use cases for Fetch API are:</span></h5>
                <p><b>Making GET Requests:</b>Fetching data from a server or an API. Use the fetch function to make a GET request and handle the response.</p>
                <p><b>Making POST Requests:</b>  Sending data to a server. Use the fetch function with the POST method and provide the body with the data to send.</p>
                <p><b> Handling Errors:</b> Handling errors that may occur during an HTTP request. Check the response status code and use .catch to handle errors.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-primary">Fetch API Post Method Example</span></h5>
                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">Body</label>
                        <textarea className="form-control" id="body" name="body" rows="3" value={formData.body} onChange={handleChange} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default PostMethod