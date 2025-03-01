import React from 'react';
import './CSSComponent.css'

const CSSComponent = () => {
    let message = 'awasome';
    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <span className="fw-bold text-primary">CSS in Components</span>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h1 className='myheader'>This is my {message} Header</h1>
                <p className='myparagraph'>This is my {message} Paragraph</p>
            </div>
        </div>
    );
};

export default CSSComponent;
