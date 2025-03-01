import React, { useState } from 'react';
import RenderHooks from './LifeCycle-render';
import ConstructorHooks from './LifeCycle-constructor';

import LifecyclecomponentDidMount from './LifeCycle-componentDidMount';
import LifecyclecomponentDidUpdate from './LifeCycle-componentDidUpdate';
import LifecycleshuldComponentUpdate from './LifeCycle-shuldComponentUpdate';
import LifecycleUnmountMethod from './LifeCycle-unmount';
import LifecycleComponentWillUnmountMethod from './LifeCycle-componentWillUnmount';

const LifecycleHooks = () => {
  //Example Render Hooks
  const [email, setEmail] = useState('rajuvats39@gmail.com');

  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <span className="fw-bold text-primary">Lifecycle Hooks</span>
        <span className="fw-bold text-warning">Introduction:</span>
        <p>In ReactJS, a life cycle method refers to a set of functions that are invoked at various stages of a component's life cycle. These methods allow you to perform specific tasks or execute code at different points during the component's existence.</p>
        <p>In previous versions of React, there were several life cycle methods available, but with the introduction of React 16.3 and later, some of these methods have been deprecated in favor of a new set of methods based on the concept of "React Hooks." However, the older life cycle methods are still supported and can be used in existing codebases.</p>
        <span className="fw-bold text-warning">When it calls the licycle method in React:</span>
        <p>--When component is loaded.</p>
        <p>--When component is updated with state and props.</p>
        <p>--When Ccomponent is removed.</p>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-success">React components have a lifecycle that consists of three phases</span></h5>
        <p><b>1. Mounting:</b> When a component is created and inserted into the DOM.</p>
        <p><b>2. Updating:</b> When a component is re-rendered due to changes in state or props.</p>
        <p><b>3. Unmounting:</b> When a component is removed from the DOM.</p>
      </div>

      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Mounting Phase</span></h5>
        <p><b>Constructor():</b> This method is called when a component is being initialized and constructed. It is typically used for initializing state and binding event handlers.</p>
        <p><b>static getDerivedStateFromProps():</b> This method is invoked before rendering, both on the initial mount and on subsequent updates. It allows you to update the state based on changes in props.</p>
        <p><b>render():</b> This method is responsible for rendering the component's JSX markup.</p>
        <p><b>componentDidMount():</b> This method is called immediately after the component has been mounted to the DOM. It is commonly used to initiate API calls or set up event listeners.</p>
      </div>

      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Updating Phase</span></h5>
        <p><b>static getDerivedStateFromProps():</b> As mentioned earlier, this method is also called during the updating phase when new props are received.</p>
        <p><b>shouldComponentUpdate():</b> This method determines whether the component should re-render or not. It can be used to optimize performance by avoiding unnecessary re-renders.</p>
        <p><b>render():</b> The render method is called again to update the component's UI.</p>
        <p><b>getSnapshotBeforeUpdate():</b> This method is called right before changes are committed to the DOM. It allows you to capture information from the DOM before it is potentially changed.</p>
        <p><b>componentDidUpdate():</b> This method is invoked after the component has been re-rendered and the changes have been applied to the DOM. It is often used for side effects, such as updating the DOM based on prop or state changes.</p>
      </div>

      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">UnMounting Phase</span></h5>
        <p><b>componentWillUnMount():</b> This method is called right before the component is removed from the DOM. It can be used to perform cleanup task like removing event listener or canceling API requests.</p>
      </div>


      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Lifecycle Hooks</span></h5>
        <ConstructorHooks />
        {/* Example Render Hooks */}
        <RenderHooks email={email} />
        <button className='btn btn-primary my-3' onClick={() => setEmail('rajuvats16@gmail.com')} >Update</button>

        <LifecyclecomponentDidMount />
        <LifecyclecomponentDidUpdate />
        <LifecycleshuldComponentUpdate />
        <LifecycleUnmountMethod />
        <LifecycleComponentWillUnmountMethod />
      </div>
    </div>




  );
};

export default LifecycleHooks;