import React from 'react'

export default function FunctionalComponent() {
  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <div className='mb-3'>
          <span className="fw-bold text-primary">Functional Component</span>
        </div>
        <span className="fw-bold text-warning">Introduction:</span>
        <p>01) ReactJS Functional components are some of the more common components that will come across while working in React. These are simply JavaScript functions. We can create a functional component in React by writing a JavaScript function. These functions may or may not receive data as parameters. In the functional Components, the return value is the JSX code to render to the DOM tree.</p>
      </div>
    </div>
  )
}
