/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import { NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
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
          <button className="nav-button"><HiMenu /></button>
        </nav>
      </div>
    </header>
  );
}
