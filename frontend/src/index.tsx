import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Home } from './pages/home.page';
import { Courses } from './pages/courses';
import { Flashcards } from './pages/flachcards';
import { Parameters } from './pages/parameters';
import { Login } from './pages/login';
import { Logout } from './pages/logout';
import { Pomodoro } from './pages/pomodoro';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/courses',
    element: <Courses />,
  },
  {
    path: '/pomodoro',
    element: <Pomodoro />,
  },
  {
    path: '/flachcards',
    element: <Flashcards />,
  },
  {
    path: '/parameters',
    element: <Parameters />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/logout',
    element: <Logout />,
  },
]);

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();