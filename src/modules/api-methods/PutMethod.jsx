import React, { useState, useEffect } from "react";

function PutMethod() {
    const [postData, setPostData] = useState({
        id: 1,
        title: "",
        body: "",
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostData({
            ...postData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postData.id}`;

        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        };

        // send the Put (update) request
        fetch(apiUrl, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setMessage("Post updated successfully.");
                console.log(data);
            })
            .catch((error) => {
                console.error("Error", error);
                setMessage("Error updating the post.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // Load the initial post data when the component mounts
    useEffect(() => {
        const postId = postData.id;
        const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setPostData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error", error);
            });
    }, [postData.id]);

    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <div className='mb-3'>
                    <span className="fw-bold text-primary">Put/Update Method</span>
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
                <h5><span class="badge text-bg-primary">Fetch API Put/Update Method Example</span></h5>

                {loading && <b className='text-success text-center'>Loading.......</b>}
                {message && <b className='text-danger text-center'>Message.......</b>}

                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={postData.title} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">Body</label>
                        <textarea className="form-control" id="body" name="body" rows="3" value={postData.body} onChange={handleChange} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Update Post</button>
                </form>
            </div>
        </div>
    )
}

export default PutMethod