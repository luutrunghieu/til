import Child from './Child';
import Wrapper from './Wrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Child />
      </Wrapper>
    </div>
  );
}

export default App;
