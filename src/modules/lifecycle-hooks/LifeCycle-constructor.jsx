import React, { Component } from 'react';

class ConstructorHooks extends Component {

    constructor() {
        super();
        console.log('Constructor Method!!');
    }

    render() {
        return (
            <div className="row py-5">
                <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                    <span className="fw-bold text-primary">Constructor Hooks</span>
                    <span className="fw-bold text-warning">Introduction:</span>
                    <p>In React, the constructor method is part of the component's life cycle and is invoked during the mounting phase. The constructor is a special method that gets called when an instance of a component is created.</p>
                    <p>This method is called when a component is being initialized and constructed. It is typically used for initializing state and binding event handlers.</p>
                    <span className="fw-bold text-success">Purpose:</span>
                    <p>The constructor method is primarily used for initializing the component's state and binding event handlers.</p>
                    <p>It is also used to set up the initial values or state based on the component's props.</p>
                    <p>The constructor is called before the component is mounted to the DOM.</p>
                    <span className="fw-bold text-success">Syntax:</span>
                    <p>In a class-based component, the constructor method is defined within the component class.</p>
                    <p>The constructor takes a props parameter, which is optional. It should be passed to the super() method to call the constructor of the parent class (usually Component).</p>
                    <p>The state can be initialized within the constructor by assigning an object to this.state.</p>
                </div>
            </div>
        );
    }
};

export default ConstructorHooks;