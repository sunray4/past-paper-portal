import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null); // crying wtf 2nd commit
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/data', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data: inputValue}),
      })
      const result = await response.json();
      console.log('Success:', result);
      setData(inputValue);
      setInputValue('');
    }
    catch (error){
      console.error('Error:', error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='text-slate-500 text-4xl'>{data ? data : "Loading..."}</h1>
      </header>
      <form onSubmit={(event) => handleSubmit}>
      <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className='box-border border-4'
          />
          <button type="submit">Send Data to Flask</button>
      </form>
    </div>
  );
}

export default App;
