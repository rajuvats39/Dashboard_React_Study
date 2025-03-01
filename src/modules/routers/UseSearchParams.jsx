import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function UseSearchParams() {

  // Get the searchParams and setSearchParams hook
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize local state for the search term (optional)
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');

  // Handle input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle form submission to update query parameters
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Update the URL with the new search term
    setSearchParams({ q: searchTerm });
  };

  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <span className="fw-bold text-primary">Use RearchParam</span>
        <span className="fw-bold text-warning">Introduction:</span>
        <p>React Router DOM, The useSearchParams hook is used to read and modify the query string in the URL for the current location. Like React's own useState hook, useSearchParams returns an array of two values: the current location's search params and a function that may be used to update them. Just as React's useState hook, setSearchParams also supports functional updates. Therefore, you may provide a function that takes a searchParams and returns an updated version.</p>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">The primary use cases for React Router V6 (useSearchParams) are:</span></h5>
        <p>The useParams hook will return an object with key/value pairs.</p>
        <p>The useParams hook is used to read the dynamic params from the current URL that were matched by <b>Route path</b></p>

        <h3 className='fw-bold text-primary'>Get URL Params</h3>
        <p className='text-success fw-bold'>Search Term: {searchParams.get('q')}</p>
        <form onSubmit={handleSearchSubmit}>
          <input className='form-control' type="text" placeholder="Search..." value={searchTerm} onChange={handleInputChange} />
          <button className='btn btn-primary mt-3' type="submit">Search</button>
        </form>
      </div>
    </div>
  )
}

export default UseSearchParams