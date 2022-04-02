import '../styles/MyNav.scss';


export default function MyNav(props) {
  const links = props.links;

  const toggleMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileBtn = document.getElementById('mobile-menu-button');
    mobileMenu.classList.toggle('hidden');
    mobileBtn.classList.toggle('hidden');
  }
  return (
    <nav className={props.classes}>
      {/*Standard menu, hides below laptop size*/}
      <ul className="standard-menu">
      {links.map((item, index) => {
          {/*replace #navs with item */}
          return (
            <li key={index}><a href="#navs">{item}</a></li>
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
            <li key={index} onClick={toggleMenu}><a href="#navs">{item}</a></li>
          )
        })}
      </ul>
    </nav>
  )
}