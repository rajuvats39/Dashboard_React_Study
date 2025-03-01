import React, { useState } from 'react';


function InputBox() {
    const [inputValue, setInputValue] = useState('');
    // const [inputValueShow, setInputValueHide] = useState(false);

    const handleChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }
    return (
        <>
            <div className="row py-5">
                <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                    <div className='mb-3'>
                        <span className="fw-bold text-primary">Input Box</span>
                    </div>
                    <span className="fw-bold text-warning">Introduction:</span>
                    <p>The <strong>OnChange event handler</strong> is a props that you can pass  into JSX  input elements.This props is provided by react so that your application can listen to user input in real-time.When an onChange event occurs, the props will call the function you pass as its parameter.</p>
                </div>
                <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                    <h5><span class="badge text-bg-success">Input Box</span></h5>
                    <div className='col-6'>
                        <span className='me-3 mb-3'>Typed Output Here</span>---<span className='text-danger'>{inputValue}</span>
                        {/* <span className='text-primary'>{inputValueShow ? inputValue : ''}</span> */}
                        <input type='text' onChange={handleChange} className='form-control' placeholder='Type here.......' />
                        {/* <button className='btn btn-primary mt-3' onClick={() => setInputValueHide(true)}>Submit</button> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default InputBox;