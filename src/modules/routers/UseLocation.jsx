import React from 'react';
import { useLocation } from 'react-router-dom';

function UseLocation() {
  //Example
  const location = useLocation();
  console.log(location);

  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <span className="fw-bold text-primary">Use Location</span>
        <span className="fw-bold text-warning">Introduction:</span>
        <p>React Router DOM, the useLocation hook is a custom hook that allows you to access the current location object in your React components. The location object represents the current URL and can be used to extract information about the pathname, search parameters, and more. This hook is particularly useful for building dynamic and responsive components that respond to changes in the URL.</p>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">The primary use cases for React Router V6 (useLocation) are:</span></h5>
        <p><b className='text-danger'>Accessing Current URL Information:</b> The most fundamental use case is to access information about the current URL. You can extract details such as the pathname, search parameters, hash, and state associated with the current location.</p>
        <p><b className='text-danger'>Conditional Rendering:</b>  You can use the useLocation hook to conditionally render components or UI elements based on the current route. This is useful for showing or hiding components or modifying their behavior based on the route.</p>
        <p><b className='text-danger'>Active Navigation Links:</b> You can highlight or mark navigation links as "active" based on the current route. This helps users easily identify which page they are on in your navigation menu.</p>
        <p><b className='text-danger'>Tracking Route Changes:</b> You can use useLocation in combination with other hooks like useEffect to track route changes and perform actions when a specific route is entered or exited.</p>
        <p><b className='text-danger'>Query Parameters Handling:</b> When dealing with query parameters in URLs, you can use useLocation to access and parse query parameters for further processing or filtering data.</p>
        <p><b className='text-danger'>Custom Navigation Logic:</b> In some cases, you may need custom navigation logic based on the current route. You can use useLocation to implement conditional navigation or to trigger navigation programmatically.</p>
      </div>

      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <p className='fw-bold text-primary'>Current URL: {location.pathname}</p>
        <p className='fw-bold text-danger'>Query String: {location.search}</p>
        <p className='fw-bold text-success'>Hash Fragment: {location.hash}</p>
      </div>
    </div>
  )
}

export default UseLocation