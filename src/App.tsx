import React, { useState, useEffect } from 'react';

interface AppProps {}

const MyButton = () => {
  return <div className="rounded-md ring-yellow-50 bg-yellow-400 p-2">I am a rounded</div>
};

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        Page header
      </header>
      <footer>
        2021
      </footer>
    </div>
  );
}

export default App;
