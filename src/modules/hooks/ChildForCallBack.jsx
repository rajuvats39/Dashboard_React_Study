import React, { memo } from 'react'

function ChildForCallBack({ increment }) {
    console.log('ChildComponent Render!!');
    return (
        <>
            <p className='fw-bold mb-3'>ChildComponent For CallBack</p>
            <button className='btn  btn-primary col-1' onClick={increment}>Increment</button>
        </>
    )
}

export default memo(ChildForCallBack);
