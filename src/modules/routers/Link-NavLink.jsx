import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function LinkNavLink() {
    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <span className="fw-bold text-primary">Link and NavLink</span>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>React Router DOM, the Link and NavLink components are used for navigation within your application. They allow you to create links to different routes in your React application, making it easy to build single-page applications with client-side routing.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-primary">The primary use cases for React Router V6 (Link & NavLink) are:</span></h5>
                <span className="fw-bold text-primary">Link:</span>
                <p>It is a component used to create a hyperlink that navigates to a different route in your application without causing a full page refresh.</p>
                <p>It is similar to the traditional HTML <b>a</b> tag, but it leverages the React Router infrastructure to handle routing.</p>

                <nav>
                    <ul className='ms-3'>
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <span className="fw-bold text-primary">NavLink:</span>
                <p>It is a variation of Link that provides additional styling and behavior for the currently active route. It adds a class name to the active link, allowing you to apply specific styles to it.</p>
                <p>You can also customize the NavLink to add your own active styles and behavior using the activeClassName and isActive props.</p>
                <nav>
                    <ul className='ms-3'>
                        <li>
                            <NavLink to='/home' style={({isActive})=>{return{color:isActive? 'red':'yellow'}}}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' style={({isActive})=>{return{color:isActive? 'red':'green'}}}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' style={({isActive})=>{return{color:isActive? 'red':'blue'}}}>Contact</NavLink>
                        </li>

                        <li>
                            <NavLink to='/routers/useSearchParams' style={({isActive})=>{return{color:isActive? 'red':'blue'}}}>URL Params</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default LinkNavLink;