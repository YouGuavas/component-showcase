import MyButton from './components/MyButton';
import Container from './components/Container';
import MyNav from './components/MyNav';

import './styles/App.scss';

function App() {
  const links = ['Home', 'About', 'Contact'];
  return (
    <div className="App">
      <h1>Component Showcase</h1>
      <a href="#Buttons">Buttons</a>
      <a href="#Navs">Navs</a>
      <section className="section">
        <h2 id="Buttons">
          Buttons
        </h2>
        <Container classes={"container"} component={<MyButton content="Button 1" classes="my-button"/>} />
        <Container classes={"container"} component={<MyButton content="Button 2" classes="my-button-bordered"/>} />

      </section>
      <section className="section">
        <h2 id="Navs">Navs</h2>
        <Container classes={"container full"} component={<MyNav links={links} classes="my-nav"/>}/>
      </section>
    </div>
  );
}

export default App;
