import React, { useRef } from 'react';

export default function UnControlledComponent() {

    const inputRef1 = useRef();
    const inputRef2 = useRef();

    const submitform = (e) => {
        e.preventDefault();
        console.log('First Input Value',inputRef1.current.value);
        console.log('Second Input Value',inputRef2.current.value);
    };

    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <span className="fw-bold text-primary">UnControlled Components</span>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>React is a JavaScript library, created developed by Facebook. It was released in 2011</p>
                <p>It allows developers to build reusable UI components, making the development process more efficient and manageable.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Examples</span></h5>
                <form onSubmit={submitform}>
                    <input type="text" className='form-control' ref={inputRef1} />
                    <input type="text" className='form-control mt-2' ref={inputRef2} />
                    <button className='btn btn-primary mt-2'>Submit</button>
                </form>
            </div>
        </div>
    )
}
