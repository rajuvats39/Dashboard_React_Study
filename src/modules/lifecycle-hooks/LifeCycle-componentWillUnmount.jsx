import React, { Component } from 'react'

export default class LifecycleComponentWillUnmountMethod extends Component {

    //Example 1
    componentDidMount() {
        this.intervalid = setInterval(() => {
            console.log('Interval Tick');
        }, 1000)
    }

    //Example 2
    componentWillUnmount() {
        clearInterval(this.intervalid);
        console.log('Interval Tick Removed');
    }

    render() {
        return (
            <h2>Lifecycle Component Will Unmount Method</h2>
        )
    }
}
