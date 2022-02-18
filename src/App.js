import MyButton from './components/MyButton';
import Container from './components/Container';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello world
        </p>
        <Container component={<MyButton content="hello world"/>} />
      </header>
    </div>
  );
}

export default App;
