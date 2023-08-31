import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="">Beranda</NavLink>
        </li>
        <li>
          <NavLink to="profil">Profil</NavLink>
        </li>
        <li>
          <NavLink to="layanan">Layanan</NavLink>
        </li>
        <li>
          <NavLink to="kontak">Kontak</NavLink>
        </li>
        <li>
          <NavLink to="blog">Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
}
