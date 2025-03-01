import React from 'react';
//Example 2
import './Style.css';
//Example 4
import Style from './Style.module.css';
//Example 5
import  './Style.scss';
export default function Styles() {
    //Example 3
    const style = {
        color: '#fff',
        backgroundColor: 'Green',
        padding: '10px',
        fontSize: '20px',
      };
    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <div className='mb-3'>
                    <span className="fw-bold text-primary">Styles In React</span>
                </div>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>React is a JavaScript library for building user interfaces. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Ways of styling in React</span></h5>
                <p>01)<strong>Inline CSS:</strong>Inline styles in React are flexible and allow you to dynamically adjust styles based on JavaScript logic.</p>
                <p>02)<strong>Normal CSS:</strong></p>
                <p>03)<strong>CSS in JS</strong></p>
                <p>04)<strong>CSS Module</strong></p>
                <p>05)<strong>SASS & SCSS</strong></p>
                <p>06)<strong>Styled Components(External Package)</strong>.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h2 style={{color: '#fff',background:'chartreuse'}}>Inline CSS</h2>
                <h2 className='primary'>Normal CSS</h2>
                <h2 style={style}>CSS In JS Method</h2>
                <h2 className={Style.primary}>CSS Module Method</h2>
                <h2 className='primary-sass' >SASS & <span>SCSS</span> Method</h2>
            </div>
        </div>
    )
}
