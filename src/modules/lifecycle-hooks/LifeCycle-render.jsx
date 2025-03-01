import React, { Component } from 'react';



class RenderHooks extends Component {
    render() {
        console.log('Render Method Called', this.props);
        return (
            <div className="row py-5">
                <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                    <span className="fw-bold text-primary">Render Hooks</span>
                    <span className="fw-bold text-warning">Introduction:</span>
                    <p>In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render is a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.</p>
                    <span className="fw-bold text-success">Purpose:</span>
                    <p>React renders HTML to the web page by using a function called render().</p>
                    <p>The purpose of the function is to display the specified HTML code inside the specified HTML element.</p>
                    <p>In the render() method, we can read props and state and return our JSX code to the root component of our app.</p>
                    <p>In the render() method, we cannot change the state, and we cannot cause side effects (such as making an HTTP request to the webserver).</p>
                    
                    <span className="fw-bold text-success">Syntax:</span>
                    <p>In a class-based component, the constructor method is defined within the component class.</p>
                </div>
            </div>
        );
    }
};

export default RenderHooks;