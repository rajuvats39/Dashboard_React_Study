
import React, { Component } from 'react';

//Child Component
class PropsUserList extends Component {

    render() {
        console.log(this.props);
        const { name, email, age } = this.props;
        return (
            <div>
                {/* <p className='text-primary fw-bold'>Hello, {this.props.name}!</p>
                <p className='text-sucess fw-bold'>Your Email, {this.props.email}!</p>
                <p className='text-danger fw-bold'>You are {this.props.age} years old.</p> */}
                 <p className='text-primary fw-bold'>Hello, {name}!</p>
                <p className='text-sucess fw-bold'>Your Email, {email}!</p>
                <p className='text-danger fw-bold'>You are {age} years old.</p>
            </div>
        );
    }
}

export default PropsUserList;