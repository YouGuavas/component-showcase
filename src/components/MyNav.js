import {useState} from 'react';
import '../styles/MyNav.scss';


export default function MyNav(props) {

  const links = props.links;

  const [active, setActive] = useState('Home');

  const toggleMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileBtn = document.getElementById('mobile-menu-button');
   // mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('change');
    mobileBtn.classList.toggle('change');
  }
  const toggleActive = (e) => {
    setActive(e.target.innerHTML);
  }
  return (
    <div className="full-page">
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
        <div className="mobile-grid">
        <button onClick={toggleMenu} id="mobile-menu-button" className="mobile-menu-button">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>

        {/*Mobile menu, hides above tablet size*/}
        <ul id="mobile-menu" className="mobile-menu">
          {links.map((item, index) => {
            {/*replace #navs with item */}
            return (
              <li key={index} onClick={toggleMenu}><a onClick={toggleActive} className={(active === item ? 'active' : '')} href="#navs">{item}</a></li>
            )
          })}
        </ul>
        </div>
      </nav>
    </div>
  )
}