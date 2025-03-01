import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Bootstraps() {
    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <div className='mb-3'>
                    <span className="fw-bold text-primary">Bootstrap In React</span>
                </div>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>Bootstrap is a popular and widely-used open-source front-end framework for building responsive and mobile-first websites and web applications. It was originally developed by Twitter and was released in August 2011.</p>
                <p>The primary goal of Bootstrap is to simplify the web development process by providing a collection of pre-designed, reusable components and styles that can be easily customized and adapted to create modern and visually appealing user interfaces.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Key Features</span></h5>
                <p><strong>Responsive Layouts:</strong>Bootstrap's grid system allows developers to create responsive layouts that automatically adjust and adapt to different screen sizes, making websites look great on various devices like desktops, tablets, and smartphones.</p>
                <p><strong>CSS Components:</strong>Bootstrap comes with a wide range of CSS-based components such as buttons, forms, navigation bars, dropdowns, modals, cards, and more, which can be easily integrated into web pages.</p>
                <p><strong>JavaScript Components:</strong>Bootstrap includes JavaScript components like carousels, tooltips, popovers, modals, and scrollspy, which enhance the user experience and add interactive elements to the website.</p>
                <p><strong>Customization:</strong>While Bootstrap offers a set of default styles and components, it also allows developers to customize the framework by selecting specific components and modifying the theme to match the desired design.</p>
                <p><strong>Browser Compatibility:</strong>Bootstrap is designed to work well with most modern web browsers, ensuring a consistent experience for users across different platforms.</p>
                <p><strong>Community Support:</strong>Being open-source, Bootstrap has a large and active community of developers who contribute to the project, offer support, and create third-party extensions, themes, and templates.</p>
                <p>Using <strong>Bootstrap</strong> can significantly speed up the development process, especially for projects that require a responsive design. By leveraging the pre-built components and <strong>responsive layout system</strong>, developers can focus more on the application's functionality and less on the intricate details of CSS and cross-browser compatibility.</p>
                <p><strong>Bootstrap</strong>Bootstrap is often used in conjunction with popular front-end JavaScript libraries or frameworks like React, Angular, or Vue.js to build more sophisticated single-page applications (SPAs) and dynamic user interfaces.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Normal React-Bootstrap Buttons</span></h5>
                <div className='row mx-0'>
                    <Button variant="primary col-1 ms-2">Primary</Button>
                    <Button variant="secondary col-1 ms-2">Secondary</Button>
                    <Button variant="success col-1 ms-2">Success</Button>
                    <Button variant="warning col-1 ms-2">Warning</Button>
                    <Button variant="danger col-1 ms-2">Danger</Button>
                    <Button variant="info col-1 ms-2">Info</Button>
                    <Button variant="light col-1 ms-2">Light</Button>
                    <Button variant="dark col-1 ms-2">Dark</Button>
                    <Button variant="link col-1 ms-2">Link</Button>
                </div>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Outline React-Bootstrap Buttons</span></h5>
                <div className='row mx-0'>
                    <Button variant="outline-primary col-1 ms-2">Primary</Button>
                    <Button variant="outline-secondary col-1 ms-2">Secondary</Button>
                    <Button variant="outline-success col-1 ms-2">Success</Button>
                    <Button variant="outline-warning col-1 ms-2">Warning</Button>
                    <Button variant="outline-danger col-1 ms-2">Danger</Button>
                    <Button variant="outline-info col-1 ms-2">Info</Button>
                    <Button variant="outline-light col-1 ms-2">Light</Button>
                    <Button variant="outline-dark col-1 ms-2">Dark</Button>
                </div>
            </div>
        </div>
    )
}
