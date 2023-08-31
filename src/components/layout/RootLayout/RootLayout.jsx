import { Outlet } from 'react-router-dom';
import RootHeader from '../../header/RootHeader/RootHeader';
import RootFooter from '../../footer/RootFooter/RootFooter';
import './RootLayout.scss';

export default function RootLayout() {
  return (
    <main className="root-layout">
      <RootHeader />
      <main><Outlet /></main>
      <RootFooter />
    </main>
  );
}
