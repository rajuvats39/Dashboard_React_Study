import React from 'react';

function Events() {
  let message = 'I am Raju Kumar Singh !!'
  const demo = () => {
    message ='I am Raju !!'
    alert('Hello everyone i am from click event!! ');
    alert(message);
  }
  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <span className="fw-bold text-primary">Events</span>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Click Event</span></h5>
        <h4 className='text-danger fw-bold'>{message}</h4>
        <button className='btn btn-success col-1' onClick={demo}>Click Me!</button>
        <button className='btn btn-secondary col-1 mt-3' onClick={() => alert('Hello everyone i am from click event!!')}>Click Me!</button>
        <button className='btn btn-primary col-1 mt-3' onClick={() => demo()}>Click Me!</button>
      </div>
    </div>
  );
};

export default Events;