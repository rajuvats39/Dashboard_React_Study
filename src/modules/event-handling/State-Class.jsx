import React, { Component } from 'react'

class StateClass extends Component {

  constructor(props) {
    super(props);
    this.state = { count: 0, name: 'Raju Kumar', };
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  changeName = () => {
    this.setState({ name: 'Raju Kumar Singh' });
  };

  render() {
    return (
      <div className="row py-5">
        <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
          <span className="fw-bold text-primary">State Using Class Component</span>
        </div>
        <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
          <h4 className='text-danger fw-bold'>Count : - <span className='text-success'>{this.state.count}</span></h4>
          <button className='btn btn-success col-1' onClick={this.incrementCount}>Count</button>
          <h4 className='text-danger fw-bold mt-3'>Name : - <span className='text-success'>{this.state.name}</span></h4>
          <button className='btn btn-primary col-1' onClick={this.changeName}>Change</button> 
        </div>
      </div>
    )
  }
}

export default StateClass;
