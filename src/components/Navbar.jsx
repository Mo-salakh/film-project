import Logo from '../img/ApnaTV.svg'
import Seacrh_i from '../img/seacrh-icon.png'
import Bell_i from '../img/bell-icon.png'

export function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav_list">
        <li className="nav_item">
          <p>Movies</p>
          <p>Favorites</p>
        </li>
        <li className="nav_item">
          <img
            src={Logo}
            alt="Logo"
            id="logo"
          />
        </li>
        <li className="nav_item">
          <img
            src={Seacrh_i}
            alt="search-i"
            id="search"
          />
          <img
            src={Bell_i}
            alt="bell-i"
            id="bell"
          />
          <p>Sign Up</p>
        </li>
      </ul>
    </nav>
  );
}
