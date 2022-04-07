import {useState} from 'react';
import '../styles/MyNavs.scss';
import '../styles/MyNavFull.scss';


export function MyNavTop(props) {

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
            //replace #navs with item
            return (
              <li key={index}><a className={(active === item) ? 'active' : ''} onClick={toggleActive} href="#Navs">{item}</a></li>
            )
          })}
        </ul>
        <div className="mobile-grid">
          <button aria-label="Mobile Menu Button" onClick={toggleMenu} id="mobile-menu-button" className="mobile-menu-button">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>

          {/*Mobile menu, hides above tablet size*/}
          <ul id="mobile-menu" className="mobile-menu">
            {links.map((item, index) => {
              //replace #navs with item 
              return (
                <li key={index} onClick={toggleMenu}><a onClick={toggleActive} className={(active === item ? 'active' : '')} href="#Navs">{item}</a></li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}


export function MyNavFull(props) {

  const links = props.links;

  const [active, setActive] = useState('Home');

  const toggleMenu = () => {
    const mobileMenu = document.getElementById('menu-full');
    const mobileBtn = document.getElementById('menu-button-full');
   // mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('change');
    mobileBtn.classList.toggle('change');
  }
  const toggleActive = (e) => {
    setActive(e.target.innerHTML);
  }
  return (
    <div className="full-page">
      <button aria-label="Full Menu Button" onClick={toggleMenu} id="menu-button-full" className="menu-button">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
      </button>
      <nav id="menu-full" className={props.classes}>
        {/*Standard menu, hides below laptop size*/}
        <ul className="standard-menu">
        {links.map((item, index) => {
            //replace #navs with item
            return (
              <li onClick={toggleMenu} key={index}><a className={(active === item) ? 'active' : ''} onClick={toggleActive} href="#Navs">{item}</a></li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}