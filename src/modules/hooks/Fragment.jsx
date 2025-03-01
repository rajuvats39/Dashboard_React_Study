import React from 'react'

export default function Fragment() {
    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <span className="fw-bold text-primary">Fragment</span>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>In React, a "fragment" is a feature that allows you to group multiple elements together without introducing an additional wrapping element in the DOM. Fragments are used to return multiple elements from a component's render method without adding unnecessary markup to the resulting HTML.</p>
                <p>Before fragments were introduced in React, developers often had to wrap multiple elements in a single container element, even if that container element didn't serve any semantic purpose other than to group those elements together.</p>
                <p>React Fragments provide a simple and efficient way to return multiple elements without adding extra nodes to the DOM, making your code cleaner and potentially improving performance.</p>
                <span className="fw-bold text-warning">When to use Fragments</span>
                <p>You need to return multiple elements from a component without wrapping them in a single parent element (e.g., div, section, etc.).</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
            <span className="fw-bold text-primary">Normal Example</span>
                <React.Fragment>
                <h5 className='text-danger'>This is a heading of text.</h5>
                <p className='text-success'>This is a paragraph of text.</p>
                <span className='text-warning'>This is a span of text.</span>
                </React.Fragment>
            </div>

            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
            <span className="fw-bold text-primary">Shorthand Example</span>
                <>
                <h5 className='text-danger'>This is a heading of text.</h5>
                <p className='text-success'>This is a paragraph of text.</p>
                <span className='text-warning'>This is a span of text.</span>
                </>
            </div>
        </div>
    )
}
