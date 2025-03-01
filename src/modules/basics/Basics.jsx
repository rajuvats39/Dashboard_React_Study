import React from 'react';

const Basics = () => {
  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <span className="fw-bold text-warning">Introduction:</span>
        <p>React is a JavaScript library, created developed by Facebook. It was released in 2011</p>
        <p>React is a declarative, efficient, and flexible javascript library for building user interfaces.</p>
        <p>React is a Component-based javascript library for building user interfaces. Each UI consist of saveral components.</p>
        <p>React is a declarative, efficient, and flexible javascript library for building user interfaces. It lets you compose complex UIs from small and isolated piece of code called </p><b>Components</b>
        <p>It allows developers to build reusable UI components, making the development process more efficient and manageable.</p>
      </div>

      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-success">Key Features</span></h5>
        <p>01)<strong>Unidirectional Data Flow:</strong> React folows a <strong>unidirectional</strong>data flow, also knowm as one-way binding. It means that data in React application flows in a <strong>single direction</strong>, from parent componet to child components.This help to maintain a <strong>predictable</strong>state and makes it easier to debug and understand the application.</p>
        <p>02)<strong>React Hooks:</strong>Introduced in <strong>React 16.8</strong>,hooks are function that allow developers to use <strong>stste</strong>and other<strong>React features in functional components, </strong>intead of relying class components.</p>
        <p>03)Hooks provides a simpler and more concise  way of <strong>managing state</strong>and<strong>lifrcycle events.</strong></p>
        <p>04)<strong>React Native</strong> React has a <strong>sibling framework</strong> called <strong>React Native</strong>, which is used for building <strong>native mobile applications</strong>It allows developers to write mobile apps using React's component-based approach, and code can be reused across different plateform like <strong>IOS</strong> and <strong>Android</strong></p>
      </div>

      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Why React?</span></h5>
        <p>01) First of all, React is as feature reach JavaScript library which comes with a lot of utility codes that can be re-used in your application.</p>
        <p>02) Second, it divides the UI in to saveral building blocks called as Components and these components can be developed seperately and are indipendent of each other in this way, It is more  maintainable and easily testable</p>
      </div>

      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Single Page Application(SPA)</span></h5>
        <p>01) A Single Page Application is a web application which has only one HTML page</p>
        <p>02) When we navigate around in the appliction, the content of that HTML file changes. The page itself never changes eg. Gmail, Netflix app.</p> 
        <b>Advantages of SPA</b>
        <p>Since we are using JavaScript to change the content of the page, it is much faster</p>
        <p>Here we are not reaching out the server to request a new piece of HTML data, every time we nagigate to a different URL.</p>
        <p>This allow us to create an application which is fast and reactive.</p>
      </div>

      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Babel</span></h5>
        <p>01)Babel is a modern JavaScript compiler which is responsible for convert JSX (HTML+JavaScript) code to plane JavaScript code which browser can understand.</p>
      </div>

      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">JSX (JavaScript + HTML = XML)</span></h5>
        <p>JSX is a syntax extension for JavaScript that looks like HTML. React components use JSX to define their structure.</p>
        <p>JSX allows you to write HTML elements in JavaScript, which React then transforms into JavaScript to create UI elements.</p>
        <p>As we have already seen that, all of the React components have a render function. The render function specifies the HTML output of a React component. JSX (JavaScript Extension), is a React extension which allows writing JavaScript code that looks like HTML. In other words, JSX is an HTML-like syntax used by React that extends ECMAScript so that HTML-like syntax can co-exist with JavaScript/React code. The syntax is used by preprocessors (i.e., transpilers like Babel) to transform HTML-like syntax into standard JavaScript objects that a JavaScript engine will parse.</p>
        <p>JSX provides you to write HTML/XML-like structures (e.g., DOM-tree tree structures) in the same file where you write JavaScript code, then preprocessor will transform these expressions into actual JavaScript code. Just like XML/HTML, JSX tags have a tag name, attributes, and children.</p>
      </div>

      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Virtual DOM</span></h5>
        <p>React uses a <b>Virtual</b> representation of the DOM,which is a lightweight copy of the actual HTML DOM. This virtual DOM allows React to efficiently update and render only the neccessary components when the application state changes.</p>
      </div>

      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Components in React</span></h5>
        <p>Components are the building blocks of a React application. They allow you to break down the UI into reusable, independent pieces.</p>
        <b>Types of Components:</b>
        <p><b>Functional Components -</b>Simple functions that return JSX.</p>
        <p><b>Class Components - </b> ES6 classes that extend React.Component and use render() to return JSX.</p>
      </div>

      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Props in React</span></h5>
        <p>Props (short for "properties") are a way to pass data from parent components to child components.</p>
        <p>They are read-only, meaning that the child component cannot modify props.</p>
      </div>

      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">State in React</span></h5>
        <p>State is a built-in React object that allows components to manage dynamic data.</p>
        <p>Unlike props, which are passed from parent to child, state is internal to a component.</p>
      </div>

      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Component Lifecycle (Overview)</span></h5>
        <p>In class components, React provides lifecycle methods to manage component behavior at various stages:</p>
        <b>Types of Component Lifecycle</b>
        <p><b>Mounting</b>(e.g., componentDidMount)</p>
        <p><b>Updating</b>(e.g., componentDidUpdate)</p>
        <p><b>Unmounting</b>(e.g., componentWillUnmount)</p>
        <b className='text-danger'>Note:</b><p>Functional components use useEffect to handle these stages.</p>
      </div>
    </div>
  );
};

export default Basics;