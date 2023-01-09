// reference: https://www.developerway.com/posts/debouncing-in-react

import { useState, useMemo, useRef, useEffect } from 'react';
import { debounce } from 'lodash-es';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const sendRequest = () => {
    console.log(value);
    setLoading(true);
    Promise.resolve().then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  };

  const ref = useRef(sendRequest);

  useEffect(() => {
    ref.current = sendRequest;
  }, [value]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };
    return debounce(func, 1000);
  }, []);

  const onChange = (e) => {
    const v = e.target.value;
    setValue(v);
    debouncedCallback();
  };

  return (
    <div className="App">
      {loading && 'Loading...'}
      <input onChange={onChange} value={value} />
    </div>
  );
}

export default App;
