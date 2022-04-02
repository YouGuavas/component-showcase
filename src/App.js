import MyButton from './components/MyButton';
import Container from './components/Container';
import MyNav from './components/MyNav';

import './styles/App.scss';

function App() {
  const links = ['Home', 'About', 'Contact'];
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
        <h2>Navs</h2>
        <Container component={<MyNav links={links} classes="my-nav"/>}/>
      </section>
    </div>
  );
}

export default App;
