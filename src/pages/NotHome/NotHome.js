import React, { useState, useEffect } from 'react';

const NotHome = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (count > 5) {
      setMessage('You passed 5!');
    } else {
      setMessage('');
    }
  }, [count]);

  return (
    <div>
      <h1 style={{ fontFamily: "Times New Roman" }}>Welcome to the Not Home Page</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default NotHome;
