import logo from './logo.svg';
import './App.css';

function App() {
  const msg = Array.from({length: 100});
  return (
    <div className="App">
      <div className='header'>h1der</div>
      <div className='content'>
        {msg.map((_, i) => <div className='message' key={i}>
          <span>Message {i}</span>
        </div>)}
      </div>
      <div className='input' contentEditable="true">input</div>
    </div>
  );
}

export default App;
