import {useState} from 'react';
import '../styles/MyNav.scss';


export default function MyNav(props) {

  const links = props.links;

  const [active, setActive] = useState('Home');

  const toggleMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileBtn = document.getElementById('mobile-menu-button');
    mobileMenu.classList.toggle('hidden');
    mobileBtn.classList.toggle('hidden');
  }
  const toggleActive = (e) => {
    setActive(e.target.innerHTML);
  }
  return (
    <nav className={props.classes}>
      {/*Standard menu, hides below laptop size*/}
      <ul className="standard-menu">
      {links.map((item, index) => {
          {/*replace #navs with item */}
          return (
            <li key={index}><a className={(active === item) ? 'active' : ''} onClick={toggleActive} href="#navs">{item}</a></li>
          )
        })}
      </ul>
      <button onClick={toggleMenu} id="mobile-menu-button" className="mobile-menu-button">
        v
      </button>

      {/*Mobile menu, hides above tablet size*/}
      <ul id="mobile-menu" className="hidden mobile-menu">
        {links.map((item, index) => {
          {/*replace #navs with item */}
          return (
            <li key={index} onClick={toggleMenu}><a onClick={toggleActive} className={(active === item ? 'active' : '')} href="#navs">{item}</a></li>
          )
        })}
      </ul>
    </nav>
  )
}