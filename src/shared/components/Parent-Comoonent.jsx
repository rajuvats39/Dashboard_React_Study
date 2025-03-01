import React from 'react';
import ReusableButton from './ReusableButton';
import ReusableList from './ReusableList';

export default function ParentComoonent() {
// Example 1
  const handleButtonClick =() => {
    console.log('Button Clicked!');
  }

  // Example 2

  const contries = ['India', 'USA', 'UK', 'Pakistan', 'France', 'Sri Lanka'];

  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <div className='mb-3'>
          <span className="fw-bold text-primary">Shared Component</span>
        </div>
        <span className="fw-bold text-warning">Introduction:</span>
        <p> In ReactJS, "reusable components" refer to components that are designed and implemented in a way that allows them to be used multiple times throughout an application or across different projects. These components are modular and self-contained, meaning they encapsulate their functionality, appearance, and behavior in a single package.</p>
        <p>By creating reusable components, developers can efficiently build complex user interfaces while promoting code maintainablity and reusablity</p>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-success">Benefits of Reusable Components in React:</span></h5>
        <span><b>Code Reusability:</b> Reusable components can be used in different parts of an application or across multiple projects, reducing redundant code and saving development time.</span>
        <span><b>Consistency:</b>When using the same component throughout an application, it ensures a consistent look and behavior, enhancing the user experience.</span>
        <span><b>Modularity:</b>Reusable components are self-contained, which means they can be easily moved, updated, or replaced without affecting other parts of the application.</span>
        <span><b>Maintainability:</b>Since components have a focused and isolated scope, they are easier to maintain, debug, and refactor.</span>
        <span><b>Abstraction:</b>Developers can abstract complex functionality into simple, reusable components, making the codebase more manageable and easier to understand.</span>
      </div>

      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <ReusableButton text='Click Me' onClick={handleButtonClick}/>
        <ReusableButton text='Submit' onClick={handleButtonClick}/>

        <ReusableList items={contries} />

      </div>
    </div>
  )
}
