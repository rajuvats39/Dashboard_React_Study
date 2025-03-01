import React from 'react';
import { MyContext } from './ContextAPI';

function Child2() {

    return (
        <>
            <div>Child2</div>
            <MyContext.Consumer>
                {(sharedData) => {
                    return <p>{sharedData}</p>
                }}
            </MyContext.Consumer>
        </>
    )
}

export default Child2;
