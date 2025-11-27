import logo from './logo.svg';
import './App.css';

const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

function App() {
  return (
    <div className="App">
      <div className='header'>h1der</div>
      <div className='content'>
        <div className='message'>Message</div>
      </div>
      <div className='input' contentEditable="true">input</div>
    </div>
  );
}

export default App;
