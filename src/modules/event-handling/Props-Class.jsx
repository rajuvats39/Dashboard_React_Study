import React, { Component } from 'react';
import PropsUserList from './Props-UserList';

//Parent Component
class PropsClass extends Component {
    constructor(){
        super();
        this.state={
            name:'Raju Vats'
        }
    }

    render() {
        return (
            <>
            <div className="row py-5">
                <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                    <span className="fw-bold text-primary">Pops Using Class Component</span>
                </div>
                <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                    <PropsUserList name={this.state.name} email='rajuvats@gmail.com' age={30} />
                    <button className='btn btn-success mt-3 col-2' onClick={()=>this.setState({name:'Manvi Singh!'})}>Update</button>
                </div>
            </div>
            </>
        )
    }
}

export default PropsClass;
