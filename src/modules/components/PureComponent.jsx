import React, { Component } from 'react'
import CounterPureComponent from './PureCounterComponent';

export default class PureComponent extends Component {
    // Example 1
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    // Example 2
    handleIncrement = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <CounterPureComponent count={this.state.count} onIncrement={this.handleIncrement} />
        )
    }
}
