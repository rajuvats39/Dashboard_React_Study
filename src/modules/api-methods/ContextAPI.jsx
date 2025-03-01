import React, { createContext } from 'react';
import Child1 from './Child1';
const MyContext = createContext();

function ContextAPI() {
    const sharedData = 'Hello From Parent !!';
  return (
    <div className="row py-5">
    <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <div className='mb-3'>
            <span className="fw-bold text-primary">Context API</span>
        </div>
        <span className="fw-bold text-warning">Introduction:</span>
        <p>In React, Context API is a way to manage state and share data throughout your component tree without the need to pass props manually at every level. It’s particularly useful for passing down global data or application-wide settings.</p>
    </div>
    <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">The primary use cases for Context API are:</span></h5>
        <p><b className='text-success'>Provider and Consumer Relationship:</b>The Context API revolves around the concept of a Provider component and Consumer components.
            The Provider component is used to wrap a portion of your component tree, making the data available to all nested components.</p>
        <p><b className='text-success'>Creating a Context:</b>
            Create a context using the createContext function from the react module.
            Example: const MyContext = React.createContext(defaultValue);</p>
        <p><b className='text-success'>Provider Component:</b>
            Wrap components with the Provider to give them access to the context data.
            Pass the data you want to share as a prop to the Provider.</p>
        <p><b className='text-success'>Consuming the Context:</b>
            Use the Consumer component or the useContext hook to access the context data.
        </p>
        <p><b className='text-success'>Default Value:</b>
            The createContext function accepts a default value as an argument. This value is used when a component doesn’t have a matching Provider in its ancestor tree.
            Example: const MyContext = React.createContext(defaultValue)</p>
        <p><b className='text-success'></b>Updating Context Data:
            Context data can be updated by modifying the state within the Provider component. When the context data changes, all components consuming that context will re-render.
        </p>
        <p><b className='text-success'></b>Performance Optimization: To prevent unnecessary re-renders, you can use the React.memo higher-order component or the useMemo hook to wrap components that consume context data.</p>
        <p><b className='text-success'>Multiple Contexts:</b>
            You can have multiple context providers and consumers in the same component tree. Each context works independently, and components can consume data from multiple contexts.
        </p>
        <p><b className='text-success'>Caveats and Considerations:</b>
            Context is best suited for data that is truly global or needs to be accessed by multiple components at different levels.
            Avoid using context for fine-grained state that is only needed within a few closely related components.</p>
    </div>
    <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <span className="fw-bold text-primary">Context API</span>
        <MyContext.Provider value={sharedData} >
                <Child1 />
        </MyContext.Provider>
    </div>
</div>
  )
}

export default ContextAPI;
export { MyContext };