import {useEffect, useState} from 'react';

import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  const onClick = () => setToggle(val => !val);

  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 100);
  }, [])

  return (
    <div className="App">
      {
        toggle === true
        && <div data-testid='toggle-element'>toggled data</div>
      }
      {data && <div>test data</div>}
      <h1>React App</h1>
      <button data-testid='toggle-btn' onClick={onClick}>clicker</button>
      <input type='text' placeholder='input value'/>
    </div>
  );
}

export default App;
