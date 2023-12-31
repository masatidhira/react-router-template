import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout/RootLayout';
import Beranda from './routes/beranda';
import Profil from './routes/profil';
import Layanan from './routes/layanan';
import Kontak from './routes/kontak';
import Blog from './routes/blog';
import ErrorPage from './errorPage';
import './sassStyles/_global.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Beranda />,
      },
      {
        path: 'profil',
        element: <Profil />,
      },
      {
        path: 'layanan',
        element: <Layanan />,
      },
      {
        path: 'kontak',
        element: <Kontak />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
