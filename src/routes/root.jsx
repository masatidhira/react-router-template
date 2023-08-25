import { Outlet, NavLink } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <header id="navbar">
        <h1>LOGO</h1>
        <nav>
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
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
