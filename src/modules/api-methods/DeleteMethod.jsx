import React, { useState, useEffect } from "react";

function DeleteMethod() {
  // State to store mock data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch mock data from the JSONPlaceholder API
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Initial data fetch on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Delete data based on its ID
  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        // Remove the deleted item from the data array
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <div className='mb-3'>
          <span className="fw-bold text-primary">Delete Method</span>
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
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default DeleteMethod