import React, { useState } from 'react';
import PropsUserCard from './Props-UserCard';

//Parent Component
function PropsFunction() {
    //Example 2
    const usersData = [
        { id: 1, name: 'Raju', age: 20, designation: 'Developer' },
        { id: 2, name: 'Manvi', age: 4, designation: 'Kid' },
        { id: 3, name: 'Aditya', age: 1, designation: 'Play' },
    ];

    //Example 2
    const { name, setName } = useState('Raju Kumar Singh');

    return (
        <>
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <span className="fw-bold text-primary">Props Using Function Component</span>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>Props stand for "Properties." They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function.</p>
                <p>Props are immutable so we cannot modify the props from inside the component. Inside the components, we can add attributes called props. These attributes are available in the component as this.props and can be used to render dynamic data in our render method.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                {/* <PropsUserCard name="Raju Kumar Singh" /> */}
                <PropsUserCard id='1' name={name} age='22' designation='Angular Developer' />
                <button className='btn btn-primary col-2' onClick={() => setName('Manvi Singh')}>Update</button>
                {
                    usersData.map((user, index) => (
                        <PropsUserCard
                            key={index}
                            id={user.id}
                            name={user.name}
                            age={user.age}
                            designation={user.designation}
                        />
                    ))
                }
            </div>
        </div>
        </>
    );
};

export default PropsFunction;