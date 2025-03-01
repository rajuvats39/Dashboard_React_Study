import React from 'react';

const EventHandling = () => {
  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <div className='mb-3'>
          <span className="fw-bold text-primary">Event Handling</span>
        </div>
        <span className="fw-bold text-warning">Introduction:</span>
        <p>Event handlers determine what action is to be taken whenever an event is fired. This could be a button click or a change in a text input.</p>
        <p>Essentially, event handlers are what make it possible for users to interact with your React app. Handling events with React elements is similar to handling events on DOM elements, with a few minor exceptions</p>
        <p>If you’re familiar with how events work in standard HTML and JavaScript, it should be easy for you to learn how to handle events in React</p>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">onClick Handlers </span></h5>
        <p>The React onClick event handler enables you to call a function and trigger an action when a user clicks an element, such as a button, in your app.</p>
        <p>Event names are written in camelCase, so the onclick event is written as onClick in a React app. In addition, React event handlers appear inside curly braces.</p>
        <p></p>
      </div>

      <div className="col-6 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Example written in HTML</span></h5>
        <strong><button onclick="hello()"> Hello</button></strong>
      </div>
      <div className="col-6 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Example written in React</span></h5> 
        {/* <strong><button onClick={hello()}>Hello</button></strong>  */}
      </div>
    </div>
  );
};

export default EventHandling;