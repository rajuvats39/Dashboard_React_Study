import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render() {
    return (
      <div className="row py-5">
        <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <div className='mb-3'>
          <span className="fw-bold text-primary">Class Component</span>
          </div>
          <span className="fw-bold text-warning">Introduction:</span>
          <p>01) React class-based components are the bread and butter of most modern web apps built in React.js. These components are simple classes (made up of multiple functions that add functionality to the application). All class-based components are child classes for the Component class of React.js.</p>
        </div>
      </div>
    )
  }
}
