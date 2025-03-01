import React, { useState } from 'react';


function ToggleButton() {

    // useState hook to manage the toggle state
    const [isToggled, setIsToggled] = useState(false);  // Initially set to false (OFF)

    // Function to handle the button click and toggle the state
    // const toggle = () => {
    //     setIsToggled(!isToggled);  // Toggle the state between true and false
    // };

    // Define dynamic text color based on the toggle state
    const textColor = isToggled ? 'green' : 'red';

    return (
        <>
            <div className="row py-5">
                <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                    <div className='mb-3'>
                        <span className="fw-bold text-primary">Toggle</span>
                    </div>
                </div>
                <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                    <h5><span class="badge text-bg-success">Hide/Show Toggle</span></h5>
                    <div className='col-6'>
                        <span style={{ color: textColor }}>The button is {isToggled ? 'ON' : 'OFF'}</span><br />
                        {/* <button className='btn btn-primary mt-3' onClick={toggle}>{isToggled ? 'Turn On' : 'Turn Off'}</button> */}
                        <button className='btn btn-primary mt-3' onClick={()=>setIsToggled(!isToggled)}>{isToggled ? 'Turn On' : 'Turn Off'}</button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ToggleButton;