import React, { useState, useLayoutEffect, useRef } from 'react';

function UseLayoutEffect() {
    const [width, setWidth] = useState(0);
    const divRef = useRef();

    useLayoutEffect(() => {
        setWidth(divRef.current.offsetWidth); // Measure the width of the div
    }, []);

    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <span className="fw-bold text-primary">UseLayoutEffect Hook</span>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>In React, useLayoutEffect is a React hook that is similar to the useEffect hook, but it fires synchronously after all DOM mutations. It's useful when you need to perform some actions that rely on the most up-to-date DOM layout and before the browser paints to the screen.</p>
                <span className="fw-bold text-primary">The primary use cases for useLayoutEffect are:</span>
                <p><b>--useLayoutEffect</b>is a React hook that's used to perform side effects after rendering and before the browser's layout and paint process.</p>
                <p>--It's very similar to the useEffect hook but fires synchronously after all DOM mutations have been processed, whereas useEffect fires asynchronously after rendering.</p>
                <p>--It's often used for actions that depend on accurate DOM measurements or that need to update the UI before it's visually presented to the user.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-primary">Example</span></h5>
                <div ref={divRef} style={{ width: '100%', height: '100px', backgroundColor: 'orange' }}>
                    <b>This div's width is {width}px</b>
                </div>
            </div>
        </div>
    );
}

export default UseLayoutEffect
