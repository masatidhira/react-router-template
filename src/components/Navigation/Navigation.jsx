import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <header className="header">
      <div className="wrapper">
        <h1 className="logo">LOGO</h1>
        <nav className="nav">
          <ul className="nav-links">
            <li className="nav-link">
              <NavLink to="">Beranda</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="profil">Profil</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="layanan">Layanan</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="kontak">Kontak</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="blog">Blog</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
