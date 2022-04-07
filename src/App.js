import MyButton from './components/MyButtons';
import Container from './components/Container';
import {MyNavTop, MyNavFull} from './components/MyNavs';
import MyForm from './components/MyForms';
import Nav from './components/Nav';

import './styles/App.scss';

function App() {
  const links = ['Home', 'About', 'Contact'];
  return (
    <div className="App">
      <Nav links={['Buttons', 'Navs', 'Forms']} classes="my-nav"/>
      <h1>Component Showcase</h1>
      <section className="section">
        <h2 id="Buttons">
          Buttons
        </h2>

        <Container classes={"container"} component={<MyButton content="Button 1" classes="my-button"/>} />
        <Container classes={"container"} component={<MyButton content="Button 2" classes="my-button-bordered"/>} />

      </section>
      <section className="section">
        <h2 id="Navs">Navs</h2>
        <Container classes={"container full"} component={<MyNavTop links={links} classes="my-nav"/>}/>
        <Container classes={"container full"} component={<MyNavFull links={links} classes="my-nav-full"/>}/>
      </section>
      <section className="section">
        <h2 id="Forms">Forms</h2>
        <Container classes={"container"} component={<MyForm classes="my-form" />} />
      </section>
    </div>
  );
}

export default App;
