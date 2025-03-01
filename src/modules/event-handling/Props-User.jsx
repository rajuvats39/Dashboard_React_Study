import React from 'react'

//Child Component
export default function PropsUser(props) {
    console.log(props);
    return (
        <>
            <h2 className='fw-bold text-promary'>Props-User-Component</h2>
            <h4>Example 1</h4>
            {/* <p className='tex-primary fw-bold'>Count: {props}</p> */}
            <button className='btn  btn-primary col-1' onClick={props.handleClick}>Click</button>
            <h4 className='mt-3'>Example 2</h4>
            <p className='tex-primary fw-bold'>Count: {props.count}</p>
            <button className='btn  btn-primary col-1' onClick={props.increment}>Count</button>
        </>
    )
}
