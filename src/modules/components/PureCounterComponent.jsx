import React, { PureComponent } from 'react';

export default class CounterPureComponent extends PureComponent {

    render() {
        console.log('Counter Pure Component rendered!!');
        return (
            <div className="row py-5">
                <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                    <div className='mb-3'>
                        <span className="fw-bold text-primary">Pure Component</span>
                    </div>
                    <span className="fw-bold text-warning">Introduction:</span>
                    <p>In React, a "Pure Component" is a specific type of component that is designed to optimize performance by minimizing unnecessary renders. In React, components are re-rendered whenever their state or props change. However, if a component's render output is solely determined by its props and state, and they have not changed, there is no need to re-render the component. This is where Pure Components come into play.</p>
                    <p>A Pure Component in React is a class component that extends the React.PureComponent class, or, since React 16.6, it can also be written as a functional component that utilizes the React.memo() higher-order component (HOC). The main characteristic of a Pure Component is that it automatically implements a shallow comparison of props and state to decide whether to re-render or not.</p>
                </div>
                <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                    <h5><span class="badge text-bg-success">Example</span></h5>
                    <h1>Counter: {this.props.count}</h1>
                    <button className='btn btn-primary col-sm-1' onClick={this.props.onIncrement}>Increment</button>
                </div>
            </div>
        )
    }
}