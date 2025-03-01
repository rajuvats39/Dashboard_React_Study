import React, { useState, createContext, useContext } from 'react';
// 1. Create a Context
const ThemeContext = createContext();

function UseContext() {
    const [theme, setTheme] = useState('light'); // State for theme
    return (
        // 2. Provide the Context value
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className="row py-5">
                <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                    <div className='mb-3'>
                        <span className="fw-bold text-primary">UseContext Hook</span>
                    </div>
                    <span className="fw-bold text-warning">Introduction:</span>
                    <p>In React, useContext is a React Hook that provides a way to access the value of a context directly in functional components without having to explicitly pass down props through intermediary components. The useContext Hook is part of the Context API, which is a mechanism in React that allows data to be passed through the component tree without having to pass props down manually at every level.</p>
                    <span className="fw-bold text-primary">The primary use cases for useContext are:</span>
                    <p><b>Theme Switching:</b> You can use useContext to manage a theme throughout your app. Instead of passing the theme prop to every component that needs it, you can define a ThemeContext and use useContext to access the current theme directly in components.</p>
                    <p><b>Authentication:</b> Managing user authentication state across your app is a common use case for useContext. You can create an AuthContext to store the user's authentication status and details. Components can then use useContext to access this information and conditionally render UI components based on the user's authentication status.</p>
                    <p><b>Localization:</b> If your app supports multiple languages, you can use useContext to provide language/locale information to various components without passing props down the component tree.</p>
                    <p><b>Global State Management:</b> While more complex than just using useState, useContext can be used to manage global state that needs to be accessed and modified from multiple components. It's often used in conjunction with the useReducer Hook to create a predictable state management solution similar to libraries like Redux.</p>
                    <p><b>Redux Replacement:</b> For smaller applications, you might choose to use useContext and the useReducer Hook as a simpler alternative to Redux for managing state.</p>
                    <p><b>Dependency Injection:</b> You can use useContext to provide services or dependencies to components. For example, you might have a ConfigContext that provides configuration settings to various parts of your app.</p>
                    <p><b>Custom Theming:</b> If your app requires custom theming based on user preferences, you can use useContext to provide the theme settings to different parts of the app.</p>
                    <p><b>Caching and Data Fetching:</b> You can use useContext to manage cached data or API responses that multiple components might need access to.</p>
                </div>
                <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                    <h5><span class="badge text-bg-primary">Context API with useContext Hook</span></h5>
                    <ThemeToggler />
                    <CurrentTheme />
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

// Component to toggle theme
function ThemeToggler() {
    const { theme, setTheme } = useContext(ThemeContext); // 3. Consume the context
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <div>
            <button className='btn btn-danger col-2' onClick={toggleTheme}> Switch to {theme === 'light' ? 'dark' : 'light'} theme </button>
        </div>
    );
}

// Component to display the current theme
function CurrentTheme() {
    const { theme } = useContext(ThemeContext); // 3. Consume the context
    return <p className='text-primary fw-bold'>Current theme is: <b className='text-danger'>{theme}</b></p>;
}

export default UseContext;
