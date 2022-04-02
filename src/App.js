import MyButton from './components/MyButton';
import Container from './components/Container';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <h1>Component Showcase</h1>
      <section className="section">
        <h2>
          Buttons
        </h2>
        <Container component={<MyButton content="Button 1" classes="my-button"/>} />
        <Container component={<MyButton content="Button 2" classes="my-button-bordered"/>} />
      </section>
      <section className="section">
      </section>
    </div>
  );
}

export default App;
