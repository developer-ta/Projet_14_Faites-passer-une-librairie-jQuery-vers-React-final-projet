import { createBrowserRouter } from 'react-router-dom';

import HomeBody from './../components/home/HomeBody';
import Home from '../pages/Home';

import AddEmployee from '../pages/AddEmployee';
import AddEmployeeBody from '../components/AddEmployee/AddEmployeeBody';
import ListEmployees from '../pages/ListEmployees';
import ListEmployeesBody from '../components/ListEmployees/ListEmployeesBody';


export const router = createBrowserRouter([
  // /
  {
    path: '/',
    element: <Home />,
    children: [
      { index: true, element: <HomeBody /> },
      {
        // /home
        path: 'home',
        element: <HomeBody />,
      },
    ],
  },
  //AddEmployee
  {
    path: 'AddEmployee',
    element: <AddEmployee />,
    children: [{ index: true, element: <AddEmployeeBody/> }],
  },
  // /user
  {
    path: 'ListEmployees',
    element: <ListEmployees />,
    children: [{ index: true, element: <ListEmployeesBody /> }],
  },
  //notFount page
  {
    path: '*',
    element: <home />,

  },
]);
