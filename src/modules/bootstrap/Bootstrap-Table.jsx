import React from 'react'
import Table from 'react-bootstrap/Table';

export default function BootstrapTable() {
    // Example 1
    const data = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 30,position:'Angular Developer',location:'Patna' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 25,position:'React Developer',location:'Pune' },
        { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', age: 35,position:'Java Developer',location:'Siwan' },
        { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', age: 28,position:'Front End Developer',location:'Chhapra' },
        { id: 5, name: 'David Wilson', email: 'david.wilson@example.com', age: 32,position:'Back End Developer',location:'Noida' },
    ];

    // Example 2

    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <div className='mb-3'>
                    <span className="fw-bold text-primary">Bootstrap Table In React</span>
                </div>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>Bootstrap 5 is the latest version of the popular front-end framework Bootstrap. It is an open-source toolkit used to build responsive, mobile-first web applications and websites. One of the fundamental components provided by Bootstrap is the "Table".</p>
                <p>A Bootstrap 5 table is an enhanced version of the HTML table element that comes with predefined styles and interactive features. It allows you to display tabular data in a structured and visually appealing format. Bootstrap tables are designed to be responsive and work seamlessly across various devices, making them ideal for modern web development.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Key Features</span></h5>
                <p><strong>Responsive Layouts:</strong>Bootstrap's grid system allows developers to create responsive layouts that automatically adjust and adapt to different screen sizes, making websites look great on various devices like desktops, tablets, and smartphones.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Tables React-Bootstrap </span></h5>
                <Table striped bordered hover variant='dark'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Position</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>{data.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.age}</td>
                            <td>{data.position}</td>
                            <td>{data.location}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
