import MyButton from './components/MyButton';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello world
        </p>
        <MyButton content="hello world"/>
      </header>
    </div>
  );
}

export default App;
