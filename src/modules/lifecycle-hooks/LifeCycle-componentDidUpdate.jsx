import React, { Component } from 'react'

export default class LifecyclecomponentDidUpdate extends Component {

    constructor() {
        super();
        console.log('Constructor Method Called!!');
        //Example 2
        this.state = {
            count: 0,
            name: 'Raju Kumar Singh'
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

    componentDidUpdate(prevPropes, prevState) {
        //Example 1
        // console.log('Component Did Update Method Called!!');
        console.log(this.state.count, prevState.count);
        if ((this.state.count, prevState.count)) {
            alert('Working');
            console.log('Component Did Update Method Called', prevState.count, this.state.count);
        }
        //Example 2
        if (this.state.count < 10) {
            this.setState({ count: this.state.count + 1 });
        }
    }

    render() {
        console.log('Render Method Called!!');
        return (
            <>
                <h2>Lifecycle componentDidUpdate Method</h2>
                {/* Example 2 */}
                <h2>Count : {this.state.count}</h2>
                <h2>Name : {this.state.name}</h2>
                <button className='btn btn-success my-3 me-3 col-2' onClick={() => this.setState({ count: this.state.count + 1 })}>Increment State</button>
                <button className='btn btn-success my-3 col-2' onClick={() => this.setState({ name: 'Raju Vats' })}>Update State</button>
            </>
        )
    }
}
