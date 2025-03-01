import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFount() {
    return (
        <>
            <h1 className='fw-bold text-center'>404</h1>
            <h2 className='fw-bold text-danger text-center'> Page Not Found !!</h2>
            <h3 className='fw-bold text-center'><Link to='/'>Return To Home</Link></h3>
        </>
    )
}

export default PageNotFount;