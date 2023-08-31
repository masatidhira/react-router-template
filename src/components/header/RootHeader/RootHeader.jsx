import ButtonNav from '../../ui/ButtonNav/ButtonNav';
import Logo from '../../ui/Logo/Logo';
import Navigation from '../../ui/Navigation/Navigation';
import './RootHeader.scss';

export default function RootHeader() {
  return (
    <header className="root-header">
      <div className="wrapper">
        <Logo />
        <Navigation />
        <ButtonNav />
      </div>
    </header>
  );
}
