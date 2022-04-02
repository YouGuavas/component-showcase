import MyButton from './components/MyButton';
import Container from './components/Container';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
        <Container component={<MyButton content="Hello"/>} />
        <Container component={<MyButton content="Yo" />} />
    </div>
  );
}

export default App;
