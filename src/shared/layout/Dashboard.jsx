import React from 'react';
import { Table } from 'react-bootstrap';

const Dashboard = () => {
  const syllabus = [
    { module: 1, title: "Introduction to React", description: "Introduction, setting up the environment, JSX, Components, Props, State" },
    { module: 2, title: "Components and Props", description: "Functional vs Class Components, Passing and Using Props, List and Conditional Rendering" },
    { module: 3, title: "State and Lifecycle", description: "Understanding State, Updating State, Component Lifecycle, useEffect Hook" },
    { module: 4, title: "Event Handling", description: "Handling events, common events, binding events" },
    { module: 5, title: "Forms in React", description: "Controlled and Uncontrolled Components, Form Submission, Form Libraries" },
    { module: 6, title: "React Hooks", description: "Introduction to Hooks, Basic and Additional Hooks, Custom Hooks" },
    { module: 7, title: "Context API", description: "Global State Management, Context creation and usage, Advanced Context API" },
    { module: 8, title: "React Router", description: "Routing, Nested Routes, Programmatic Navigation, Protected Routes" },
    { module: 9, title: "Styling in React", description: "CSS, CSS Modules, Styled Components, CSS Frameworks" },
    { module: 10, title: "State Management with Redux", description: "Redux Core Concepts, Middleware, Redux Toolkit" },
    { module: 11, title: "Working with APIs", description: "Fetching Data, Handling Async Data, Error Handling" },
    { module: 12, title: "Testing in React", description: "Unit Testing, Mocking API Calls, End-to-End Testing" },
    { module: 13, title: "Performance Optimization", description: "Code Splitting, Memoization, Lazy Loading, React Fiber" },
    { module: 14, title: "TypeScript in React", description: "PropTypes, TypeScript Basics, Typing Components and Props" },
    { module: 15, title: "SSR and SSG", description: "Next.js Basics, Server-Side Rendering, Static Site Generation" },
    { module: 16, title: "Progressive Web Apps", description: "Service Workers, Manifest File, Caching Strategies" },
    { module: 17, title: "Advanced Libraries and Tools", description: "Storybook, GraphQL, React Native, React Query" },
    { module: 18, title: "Deployment", description: "Building for Production, Hosting Options, CI/CD, Environment Variables" }
  ];

  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <span className="fw-bold text-primary">React Syllabus Table of Contents</span>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className='fw-bold'>Module</th>
              <th className='fw-bold'>Tilte</th>
              <th className='fw-bold'>Description</th>
            </tr>
          </thead>
          <tbody>
            {syllabus.map((item, index) => (
              <tr key={index}>
                <td className='fw-bold'>{item.module}</td>
                <td className='fw-bold'>{item.title}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
