'use client';

import { useState, useEffect } from 'react';

export default function Counter() {
  // 1️⃣ Create state
  const [count, setCount] = useState(0);

  const [addtext, addTest] = useState('Add names')

  useEffect(()=> {
    console.log(addtext)
  },[addtext])

  // 2️⃣ Log whenever count changes (so you can see useEffect in action)
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  // 3️⃣ Functions to change the count
  const addOne = () => setCount(count + 1);
  const minusOne = () => setCount(count - 1);
  const reset = () => setCount(0);

  const addMore = () =>  addTest('Jordan');

  // 4️⃣ Simple styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'sans-serif',
    backgroundColor: '#f5f5f5',
  };

  const countStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: count > 0 ? 'green' : count < 0 ? 'red' : 'black',
    marginBottom: '1rem',
  };

  const buttonStyle = {
    margin: '0.3rem',
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
  };

  // 5️⃣ Render UI
  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: '1rem' }}>Simple Counter</h1>

      <div style={countStyle}>{count}</div>

      <div>
        <button
          style={{ ...buttonStyle, backgroundColor: '#e74c3c' }}
          onClick={minusOne}
        >
          ➖ Decrease
        </button>

        <button
          style={{ ...buttonStyle, backgroundColor: '#7f8c8d' }}
          onClick={reset}
        >
          🔁 Reset
        </button>

        <button
          style={{ ...buttonStyle, backgroundColor: '#2ecc71' }}
          onClick={addOne}
        >
          ➕ Increase
        </button>

        <button
        style={{ ...buttonStyle, backgroundColor: '#2ecc71' }}
        onClick={addMore}
        >

           ➕ {addtext}
        </button>

        <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>hello my name is {addtext}</div>

      </div>
    </div>
  );
}
