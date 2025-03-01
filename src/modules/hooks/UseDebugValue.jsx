import { useState, useEffect, useDebugValue } from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  // Using useDebugValue to display the loading state or the fetched data in DevTools
  useDebugValue(loading ? 'Loading...' : error ? 'Error' : 'Data Loaded');
  return { data, loading, error };
}

export default function UseDebugValue() {
  const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts');
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;
  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <div className='mb-3'>
          <span className="fw-bold text-primary">UseDebugValue Hook</span>
        </div>
        <span className="fw-bold text-warning">Introduction:</span>
        <p>The useDebugValue hook in React is a special hook used to display debug information about a custom hook in React DevTools. It allows you to label or track the state of a custom hook to make it easier to understand what's happening in your app when inspecting the component tree.</p>
        <span className="fw-bold text-primary">Purpose of useDebugValue</span>
        <p><b>Custom Hooks Debugging: </b>It is primarily used in custom hooks to display values or labels in React DevTools. This helps developers debug custom hooks more easily by showing their internal state or computed values.</p>
        <p><b>DevTools Integration:</b> It doesn't affect the runtime behavior of your application but adds useful information to React DevTools to track the custom hook state and outputs.</p>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-primary">Fetched Posts</span></h5>
        <ul className='ms-3'>
          {data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
