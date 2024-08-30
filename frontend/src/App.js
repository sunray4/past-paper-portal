import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='text-slate-500 text-4xl'>{data ? data : "Loading..."}</h1>
      </header>
    </div>
  );
}

export default App;
