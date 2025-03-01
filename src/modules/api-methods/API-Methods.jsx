import React from 'react';

function APIMethods() {
    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <div className='mb-3'>
                    <span className="fw-bold text-primary">API Methods</span>
                </div>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>In a RESTful API (Representational State Transfer API), a "method" refers to an HTTP request method or verb used to perform operations on resources. These HTTP methods are part of the HTTP protocol and are used to interact with resources (e.g., data or objects) on a server.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h4><span class="badge text-bg-primary">The primary HTTP methods used in RESTful APIs are:</span></h4>
                <h5><span class="badge text-bg-success">GET()</span></h5>
                <p>This method is used to retrieve data from the server. It should only retrieve data and should not modify the state of the server.</p>

                <h5><span class="badge text-bg-primary">POST() </span></h5>
                <p> POST is used to create a new resource on the server. It typically involves sending data to the server for processing and storage.</p>

                <h5><span class="badge text-bg-warning">PUT() </span></h5>
                <p> PUT is used to update an existing resource on the server or create it if it doesn't exist. It replaces the entire resource with the new data provided.</p>

                <h5><span class="badge text-bg-secondary">PATCH() </span></h5>
                <p> PATCH is used to partially update an existing resource. It only modifies the specific fields provided in the request, leaving other fields unchanged.</p>

                <h5><span class="badge text-bg-danger">DELETE() </span></h5>
                <p> DELETE is used to remove a resource from the server. After a successful DELETE request, the resource should no longer be accessible.</p>

                <p>These HTTP methods, along with the <b>URL(Uniform Resource Locator)</b> or  <b>URI (Uniform Resource Identifier)</b>  of the resource, form the basis of how <b> RESTful APIs</b> are designed. They allow clients <b>(applications or systems)</b>  to perform <b>CRUD (Create, Read, Update, Delete)</b>  operations on resources exposed by the API.</p>
            </div>
        </div>
    )
}

export default APIMethods;

