import React, { useState } from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [activeMenu, setActiveMenu] = useState(null);
    const toggleSidebar = () => setIsOpen(!isOpen);
    const toggleSubMenu = (index) => { setActiveMenu(activeMenu === index ? null : index); };
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />,
            submenu: [],
        },
        {
            path: "/basics",
            name: "React",
            icon: <FaUserAlt />,
            submenu: [],
        },
        {
            path: "components",
            name: "Component",
            icon: <FaRegChartBar />,
            submenu: [
                { path: "/components/cssComponent", name: "CSS Component" },
                { path: "/components/functionalComponent", name: "Functional Component" },
                { path: "/components/classComponent", name: "Class Component" },
                { path: "/components/parentComponent", name: "Parent Component" },
                { path: "/components/pureComponent", name: "Pure Component" },
                { path: "/components/controlledComponent", name: "Controlled Component" },
                { path: "/components/uncontrolledComponent", name: "UnContrilled Component" },
                { path: "/components/highorderComponent", name: "High Order Component" }
            ],
        },
        {
            path: "eventhandling",
            name: "Event Handling",
            icon: <FaRegChartBar />,
            submenu: [
                { path: "/eventhandling/events", name: "Events" },
                { path: "/eventhandling/stateFunction", name: "State Function" },
                { path: "/eventhandling/stateClass", name: "State Class" },
                { path: "/eventhandling/counter", name: "Counter" },
                { path: "/eventhandling/propsFunction", name: "Props Function" },
                { path: "/eventhandling/propsClass", name: "Props Class" },
                { path: "/eventhandling/passFunctionAsProps", name: "Function As Props" },
                { path: "/eventhandling/inputBox", name: "Input Box" },
                { path: "/eventhandling/toggleButton", name: "Toggle Button" },
            ],
        },
        {
            path: "lifecycleHooks",
            name: "Lifecycle Hooks",
            icon: <FaRegChartBar />,
            submenu: [
                { path: "/lifecycleHooks/constructor", name: "Constructor Hooks" },
                { path: "/lifecycleHooks/render", name: "Render Hooks" }
            ],
        },
        {
            path: "forms",
            name: "Forms",
            icon: <FaRegChartBar />,
            submenu: [
                { path: "/forms/formValidation", name: "Form Validations" },
                { path: "/forms/conditionalRendering", name: "Rendering(if/else)" },
            ],
        },
        {
            path: "hooks",
            name: "Hooks",
            icon: <FaRegChartBar />,
            submenu: [
                { path: "/hooks/fragment", name: "Fragment" },
                { path: "/hooks/liftingStateUp", name: "Lifting State Up" },
                { path: "/hooks/useState", name: "useState" },
                { path: "/hooks/useReducer", name: "useReducer" },
                { path: "/hooks/useEffect", name: "useEffect" },
                { path: "/hooks/useLayoutEffect", name: "useLayoutEffect" },
                { path: "/hooks/useRef", name: "useRef" },
                { path: "/hooks/useMemo", name: "useMemo" },
                { path: "/hooks/useCallback", name: "useCallback" },
                { path: "/hooks/useContext", name: "useContext" },
                { path: "/hooks/useImperativeHandle", name: "useImperativeHandle" },
                { path: "/hooks/useDebugValue", name: "useDebugValue" },

                { path: "/hooks/useForwrdRef", name: "useForwrdRef" },
                { path: "/hooks/useSyncExternalStore", name: "useSyncExternalStore" },
                { path: "/hooks/useTransition", name: "useTransition" },
                { path: "/hooks/useDeferredValue", name: "useDeferredValue" },
            ],
        },
        {
            path: "styles",
            name: "Styles",
            icon: <FaRegChartBar />,
            submenu: [],
        },
        {
            path: "bootstrap",
            name: "Bootstrap",
            icon: <FaRegChartBar />,
            submenu: [
                { path: "/bootstrap/table", name: "Table" },
            ],
        },
        {
            path: "jsMethods",
            name: "JS Methods",
            icon: <FaRegChartBar />,
            submenu: [
                { path: "/jsMethods", name: "JS Methods" },
            ],
        },
        {
            path: "routers",
            name: "Routers",
            icon: <FaRegChartBar />,
            submenu: [
                { path: "/routers/dynamicRoute", name: "Dynamic Route" },
                { path: "/routers/dynamicRouteParam", name: "Dynamic RouteParam" },
                { path: "/routers/linkNavLink", name: "Link - NavLink" },
                { path: "/routers/useSearchParams", name: "Use SearchParams" },
                { path: "/routers/useNavigate", name: "Use Navigate" },
                { path: "/routers/useLocation", name: "Use Location" },
            ],
        },
        {
            path: "statemanagements",
            name: "State Management",
            icon: <FaRegChartBar />,
            submenu: [
                { path: "/statemanagements/axios", name: "Axios" },
                { path: "/statemanagements/redux", name: "Redux" },
            ],
        },
        {
            path: "apiMethods",
            name: "API Methods",
            icon: <FaRegChartBar />,
            submenu: [
                { path: "/apiMethods/apiContext", name: "API Context" },
                { path: "/apiMethods/getMethod", name: "Get Method" },
                { path: "/apiMethods/postMethod", name: "Post Method" },
                { path: "/apiMethods/putMethod", name: "Put Method" },
                { path: "/apiMethods/deleteMethod", name: "Delete Method" },
            ],
        },
    ];
    return (
        <div className="display-area" style={{ marginLeft: isOpen ? "250px" : "50px" }}>
            <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "135px" : "0px" }} className="bars">
                        <FaBars onClick={toggleSidebar} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <div key={index}>
                        <NavLink to={item.path} className="link" activeclassname="active" onClick={() => toggleSubMenu(index)}>
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>{isOpen && item.submenu.length > 0 && (
                                <div className="arrow_icon">
                                    {activeMenu === index ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                            )}
                        </NavLink>
                        {activeMenu === index && isOpen && item.submenu.length > 0 && (
                            <div className="submenu">
                                {item.submenu.map((subItem, subIndex) => (
                                    <NavLink to={subItem.path} key={subIndex} className="sublink">
                                        <div className="sublink_text">{subItem.name}</div>
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
