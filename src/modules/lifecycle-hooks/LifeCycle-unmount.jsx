import React, { Component } from 'react'

export default class LifecycleUnmountMethod extends Component {

    //Example 1
    componentDidMount() {
        this.intervalid = setInterval(() => {
            console.log('Interval Tick');
        }, 1000);
    }

    //Example 2
    componentWillUnmount() {
        clearInterval(this.intervalid);
        console.log('Interval Tick Removed');
    }

    render() {
        return (
            <h2>Childreen component will unmount</h2>
        )
    }
}
