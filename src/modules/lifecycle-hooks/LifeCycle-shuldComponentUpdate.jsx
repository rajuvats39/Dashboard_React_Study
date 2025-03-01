import React, { Component } from 'react'

export default class LifecycleshuldComponentUpdate extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextPropes, nextState) {
        console.log('shouldComponentUpdate Method Called', this.state.count);
        if (nextState.count < 5) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <>
                <h2>Lifecycle shuldComponentUpdate Method</h2>
                {/* Example 1 */}
                <h2>Count : {this.state.count}</h2>
                <button className='btn btn-primary my-3 col-2' onClick={() => this.setState({ count: this.state.count + 1 })}>Increment State</button>
            </>
        )
    }
}
