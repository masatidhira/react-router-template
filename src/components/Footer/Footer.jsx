/* eslint-disable jsx-a11y/control-has-associated-label */
import { NavLink } from 'react-router-dom';
import { BiLogoFacebookSquare, BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="box-company">
          <div className="logo">LOGO</div>
          <div className="desc">Perusahaan ini merupakan perusahaan yang bekerja dalam bidang informasi dan media.</div>
        </div>
        <div className="box-information">
          <div className="title">Information</div>
          <ul className="footer-links">
            <li className="footer-link">
              <NavLink to="">Beranda</NavLink>
            </li>
            <li className="footer-link">
              <NavLink to="profil">Profil</NavLink>
            </li>
            <li className="footer-link">
              <NavLink to="layanan">Layanan</NavLink>
            </li>
            <li className="footer-link">
              <NavLink to="kontak">Kontak</NavLink>
            </li>
            <li className="footer-link">
              <NavLink to="blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="box-contact">
          <div className="title">Kontak</div>

          <div className="contact">
            <p>+62 811-1234-5678</p>
            <p>+62 822-4321-8675</p>
          </div>

          <div className="email">
            <p>info@companymail.com</p>
            <p>info@companymail2.com</p>
          </div>

          <ul className="social">
            <li className="social-icon">
              <a href="/" target="_blank"><BiLogoFacebookSquare /></a>
            </li>
            <li className="social-icon">
              <a href="/" target="_blank"><BiLogoInstagram /></a>
            </li>
            <li className="social-icon">
              <a href="/" target="_blank"><BiLogoYoutube /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">Copyright &copy; Company All Right Reserved</div>
    </footer>
  );
}
