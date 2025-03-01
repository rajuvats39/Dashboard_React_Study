import React, { Component } from 'react'

export default class LifecyclecomponentDidMount extends Component {

    constructor() {
        super();
        console.log('Constructor Method Called!!');
        //Example 2
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    //Example 1 All the API called in this method because it is calling only one time.
    componentDidMount() {
        console.log('Component Did Mount Method Called!!');
    }

    render() {
        console.log('Render Method Called!!');
        return (
            <>
                <h2>Lifecycle componentDidMount Method</h2>
                {/* Example 2 */}
                <h2>Count : {this.state.count}</h2>
                <button className='btn btn-danger my-3 col-2' onClick={this.incrementCount}>Increment</button>
            </>
        )
    }
}
