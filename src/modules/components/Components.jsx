import React from 'react';

const Components = () => {
    return (
        <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <div className='mb-3'>
        <span className="fw-bold text-primary">Components</span>
        </div>
        <span className="fw-bold text-warning">Introduction:</span>
        <p>A <strong>Component</strong> is one of the core building blocks of core React, In other words we can say that every application you will develop in React will made up of pieces called components.Components make the task of building  UIs much easier. You can see a UI broken down in to multiple individual pieces called components and work on then independently and merge them all in parent component which will be your final UI.    </p>
       <p>01) A component is a bassically pice of user interface.</p>
        <p>02) Every React application has atleast one component.</p>
        <p>03) A React application is  essentially a tree of components.</p>
        <p>04) Combining all these Comopnents together makes a UI.</p>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-success">Types of Components</span></h5>
       <p className='fw-bold'>01)Functional Component.</p>
       <p className='fw-bold'>02)Class Component.</p>
       <p className='fw-bold'>03)Pure Component.</p>
       <p className='fw-bold'>04)High-Order Component.</p>
       <p className='fw-bold'>05)Controlled Component.</p>
       <p className='fw-bold'>06)UnControlled Component.</p>
      </div> 
    </div>
    );
};

export default Components;