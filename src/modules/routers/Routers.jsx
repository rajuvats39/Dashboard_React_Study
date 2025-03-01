import React from 'react';

const Routers = () => {
  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <span className="fw-bold text-primary">Routers</span>
        <span className="fw-bold text-warning">Introduction:</span>
        <p>React Router DOM is a popular library for managing navigation and routing in <b>React applications</b>. It helps you create a seamless user experience by allowing you to define different routes and their corresponding components.</p>
        <span className="fw-bold text-primary">The primary use cases for React Router V6 are:</span>
        <p><b>Declarative Routing:</b> With <b>v6</b>, you define your routes using <b>JSX</b> components. Instead of the  <b>Switch</b> component, you now use the <b>Routes</b> component to declare your routes.</p>
        <p><b>Route Components:</b> Each route is represented by the <b>Switch</b> component, where you specify the path and the component to render when that path matches.</p>
        <p><b>Hooks-based Approach:</b>  React Router v6 heavily relies on React hooks. You use the  <b>useRoutes</b> hook to handle the routing logic based on the declared routes.</p>
        <p><b>Nested Routing:</b> V6 improves the support for nested routing, making it easier to create complex layouts and nested UI structures.</p>
        <p><b>Route Parameters:</b> Route parameters are now accessed using hooks. You use the <b>useParams</b>  hook to retrieve parameters from the URL.</p>
        <p><b>Navigation:</b>  For navigation, you use the <b>useNavigate</b>  hook, which provides a function to programmatically navigate to different routes. This simplifies navigation compared to the older history object.</p>
        <p><b>Layouts and Layout Routes:</b> V6 introduces the concept of layout routes, allowing you to define common layouts that wrap specific sets of routes. This is useful for creating consistent UI structures.</p>
        <p><b>No Render Props:</b> Unlike the previous version, v6 gets rid of the render props pattern. Instead, all routing-related components are <b>hooks</b> . This simplifies the code and makes it more in line with modern React patterns.</p>
        <p><b>TypeScript Support:</b> React Router Dom v6 offers improved <b>TypeScript</b>  support out of the box, making it easier to catch routing-related errors during development.</p>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <span className="fw-bold text-primary">Router DOM</span>
        <p>React Router DOM is a popular library for managing navigation and routing in React applications. It helps you create a seamless user experience by allowing you to define different routes and their corresponding components.</p>
        <span className="fw-bold text-primary"> The primary use cases for React Router V6 are:</span>
        <h5><span class="badge text-bg-secondary">Link:</span></h5>
        <p> In React Router, a <b>Link</b> component is used to navigate between different views or components in your application. It renders an anchor <b>a</b> tag with the appropriate href attribute, allowing users to click on the link and navigate to the specified route without causing a full page reload. This helps in creating a single-page application experience.</p>
        <h5><span class="badge text-bg-secondary">NavBar:</span></h5>
        <p> A navigation bar (often abbreviated as "navbar") is a common user interface element used to provide navigation links or menus within a web application. It’s typically positioned at the top of a webpage and contains links to various sections or pages of the application. A navbar can be implemented using HTML, CSS, and JavaScript. In the context of React Router, a navbar would likely consist of <b>Link</b> components to facilitate navigation between different routes.</p>
        <h5><span class="badge text-bg-secondary">Anchor Tag:</span></h5>
        <p> An anchor <b>a</b> tag is a fundamental HTML element used to create hyperlinks. In the context of React Router, while anchor tags can still be used for navigation, using the <b>Link</b> component provided by React Router is generally preferred. This is because <b>Link</b> components manage navigation without causing full page reloads, leading to a smoother user experience in single-page applications.</p>
      </div>
    </div>
  );
};

export default Routers;