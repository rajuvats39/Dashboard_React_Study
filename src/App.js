import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './shared/layout/Sidebar.jsx';
import Dashboard from './shared/layout/Dashboard.jsx';
import About from './shared/layout/About.jsx';
import Header from './shared/layout/Header.jsx'
import Footer from './shared/layout/Footer.jsx';
import Components from './modules/components/Components.jsx'
import CSSComponent from './modules/components/CSSComponent.jsx';
import FunctionalComponent from './modules/components/FunctionalComponent.jsx';
import ClassComponent from './modules/components/ClassComponent.jsx';
import Basics from './modules/basics/Basics.jsx'
import EventHandling from './modules/event-handling/Event-Handling.jsx';
import Events from './modules/event-handling/Events.jsx';
import StateFunction from './modules/event-handling/State-Function.jsx';
import StateClass from './modules/event-handling/State-Class.jsx';
import Counter from './modules/event-handling/Counter.jsx';
import PropsFunction from './modules/event-handling/Props-Function.jsx';
import PropsClass from './modules/event-handling/Props-Class.jsx';
import InputBox from './modules/event-handling/InputBox.jsx';
import LifecycleHooks from './modules/lifecycle-hooks/Lifecycle-Hooks.jsx';
import Forms from './modules/forms/Forms.jsx';
import Routers from './modules/routers/Routers.jsx';
import StateManagements from './modules/state-managements/State-Managements.jsx';
import Redux from './modules/state-managements/Redux.jsx';
import ToggleButton from './modules/event-handling/ToggleButton.jsx';
import ConditionalRendering from './modules/forms/ConditionalRendering.jsx';
import FormValidation from './modules/forms/FormValidation.jsx';
import PassFunctionAsProps from './modules/event-handling/PassFunctionAsProps.jsx';
import ConstructorHooks from './modules/lifecycle-hooks/LifeCycle-constructor.jsx';
import RenderHooks from './modules/lifecycle-hooks/LifeCycle-render.jsx';

import Fragment from './modules/hooks/Fragment.jsx';
import LiftingStateUp from './modules/hooks/LiftingStateUp.jsx';

import Hooks from './modules/hooks/Hooks.jsx';
import UseState from './modules/hooks/UseState.jsx';
import UseReducer from './modules/hooks/UseReducer.jsx';
import UseEffect from './modules/hooks/UseEffect.jsx';
import UseLayoutEffect from './modules/hooks/UseLayoutEffect.jsx';
import UseRef from './modules/hooks/UseRef.jsx';
import UseMemo from './modules/hooks/UseMemo.jsx';
import UseCallBack from './modules/hooks/UseCallBack.jsx';
import UseContext from './modules/hooks/UseContext.jsx';
import UseImperativeHandle from './modules/hooks/UseImperativeHandle.jsx';
import UseDebugValue from './modules/hooks/UseDebugValue.jsx';

import Styles from './modules/styles/Styles.jsx';
import Bootstraps from './modules/bootstrap/Bootstraps.jsx';
import BootstrapTable from './modules/bootstrap/Bootstrap-Table.jsx';
import JSMethods from './modules/js-methods/JS-Methods.jsx';
import ParentComoonent from './shared/components/Parent-Comoonent.jsx';
import PureComponent from './modules/components/PureComponent.jsx';
import ControlledComponent from './modules/components/ControlledComponent.jsx';
import UnControlledComponent from './modules/components/UnControlledComponent.jsx';
import HighOrderComponent from './modules/components/HighOrderComponent.jsx';
import UseForwrdRef from './modules/hooks/UseForwrdRef.jsx';
import UseSyncExternalStore from './modules/hooks/UseSyncExternalStore.jsx';
import UseTransition from './modules/hooks/UseTransition.jsx';
import UseDeferredValue from './modules/hooks/UseDeferredValue.jsx';
import PageNotFount from './modules/routers/PageNotFount.jsx';
import DynamicRouteParam from './modules/routers/DynamicRouteParam.jsx';
import DynamicRoute from './modules/routers/DynamicRoute.jsx';
import LinkNavLink from './modules/routers/Link-NavLink.jsx';
import UseSearchParams from './modules/routers/UseSearchParams.jsx';
import UseNavigate from './modules/routers/UseNavigate.jsx';
import UseLocation from './modules/routers/UseLocation.jsx';
import APIMethods from './modules/api-methods/API-Methods.jsx';
import ContextAPI from './modules/api-methods/ContextAPI.jsx';
import GetMethod from './modules/api-methods/GetMethod.jsx';
import PostMethod from './modules/api-methods/PostMethod.jsx';
import PutMethod from './modules/api-methods/PutMethod.jsx';
import DeleteMethod from './modules/api-methods/DeleteMethod.jsx';
import Axios from './modules/state-managements/axios/Axios.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/basics" element={<Basics />} />

          <Route path="/components" element={<Components />} />
          <Route path="components/cssComponent" element={<CSSComponent />} />
          <Route path="components/functionalComponent" element={<FunctionalComponent />} />
          <Route path="components/classComponent" element={<ClassComponent />} />
          <Route path="components/pureComponent" element={<PureComponent />} />
          <Route path="components/controlledComponent" element={<ControlledComponent />} />
          <Route path="components/uncontrolledComponent" element={<UnControlledComponent />} />
          <Route path="components/highorderComponent" element={<HighOrderComponent />} />
          <Route path="components/sharedComponent" element={<ParentComoonent />} />

          <Route path="/eventhandling" element={<EventHandling />} />
          <Route path="/eventhandling/events" element={<Events />} />
          <Route path="/eventhandling/stateFunction" element={<StateFunction />} />
          <Route path="/eventhandling/stateClass" element={<StateClass />} />
          <Route path="/eventhandling/counter" element={<Counter />} />
          <Route path="/eventhandling/propsFunction" element={<PropsFunction />} />
          <Route path="/eventhandling/propsClass" element={<PropsClass />} />
          <Route path="/eventhandling/passFunctionAsProps" element={<PassFunctionAsProps />} />
          <Route path="/eventhandling/inputBox" element={<InputBox />} />
          <Route path="/eventhandling/toggleButton" element={<ToggleButton />} />

          <Route path="/lifecycleHooks" element={<LifecycleHooks />} />
          <Route path="/lifecycleHooks/constructor" element={<ConstructorHooks />} />
          <Route path="/lifecycleHooks/render" element={<RenderHooks />} />

          <Route path="/forms" element={<Forms />} />
          <Route path="/forms/formValidation" element={<FormValidation />} />
          <Route path="/forms/conditionalRendering" element={<ConditionalRendering />} />

          <Route path="/hooks/fragment" element={<Fragment />} />
          <Route path="/hooks/liftingStateUp" element={<LiftingStateUp />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/hooks/useState" element={<UseState />} />
          <Route path="/hooks/useReducer" element={<UseReducer />} />
          <Route path="/hooks/UseEffect" element={<UseEffect />} />
          <Route path="/hooks/useLayoutEffect" element={<UseLayoutEffect />} />
          <Route path="/hooks/useRef" element={<UseRef />} />
          <Route path="/hooks/useMemo" element={<UseMemo />} />
          <Route path="/hooks/useCallBack" element={<UseCallBack />} />
          <Route path="/hooks/useContext" element={<UseContext />} />
          <Route path="/hooks/useImperativeHandle" element={<UseImperativeHandle />} />
          <Route path="/hooks/useDebugValue" element={<UseDebugValue />} />

          <Route path="/hooks/useForwrdRef" element={<UseForwrdRef />} />
          <Route path="/hooks/useSyncExternalStore" element={<UseSyncExternalStore />} />
          <Route path="/hooks/useTransition" element={<UseTransition />} />
          <Route path="/hooks/useDeferredValue" element={<UseDeferredValue />} />

          <Route path="/styles" element={<Styles />} />
          <Route path="/bootstrap" element={<Bootstraps />} />
          <Route path="/bootstrap/table" element={<BootstrapTable />} />

          <Route path="/jsMethods" element={<JSMethods />} />
          <Route path="/routers" element={<Routers />} />
          <Route path="/routers/dynamicRoute" element={<DynamicRoute />} />
          <Route path="/routers/dynamicRouteParam/:userId" element={<DynamicRouteParam />} />
          <Route path="/routers/linkNavLink" element={<LinkNavLink />} />
          <Route path="/routers/useSearchParams" element={<UseSearchParams />} />
          <Route path="/routers/useNavigate" element={<UseNavigate />} />
          <Route path="/routers/useLocation" element={<UseLocation />} />

          <Route path="/statemanagements" element={<StateManagements />} />
          <Route path="statemanagements/axios" element={<Axios />} />
          <Route path="statemanagements/redux" element={<Redux />} />


          <Route path="/apiMethods" element={<APIMethods />} />
          <Route path="/apiMethods/apiContext" element={<ContextAPI />} />

          <Route path="/apiMethods/getMethod" element={<GetMethod />} />
          <Route path="/apiMethods/postMethod" element={<PostMethod />} />
          <Route path="/apiMethods/putMethod" element={<PutMethod />} />
          <Route path="/apiMethods/deleteMethod" element={<DeleteMethod />} />

          <Route path="/about" element={<About />} />
          <Route path="/*" element={<PageNotFount />} />
        </Routes>
      </Sidebar>
      <Footer />
    </BrowserRouter>
  );
};

export default App;