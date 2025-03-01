import React from 'react'

//Child Component
export default function PropsUserCard(props) {
    console.log(props);
    const { id, name, age, designation } = props;
    return (
        <>
            <h2 className='fw-bold text-promary'>Data Coming from Function Props</h2>
            <h4>Example 1</h4>
            <div className='tex-primary fw-bold'>Props-UserCard : -<span className='text-success'> {props.name}</span></div>
            <h4 className='mt-3'>Example 2</h4>
            <p className='tex-primary fw-bold'>Id: {id}</p>
            <p className='tex-primary fw-bold'>Name: {name}</p>
            <p className='tex-primary fw-bold'>Age: {age}</p>
            <p className='tex-primary fw-bold'>Designation: {designation}</p>
        </>
    )
}
