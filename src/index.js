import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from 'react-router-dom'
import Patient from './screen/admin/Patient'
import HomeAdmin from './screen/admin/HomeAdmin'
import Navbar from './components/Admin/Navbar'
import Services from './screen/admin/Services'
import Book from './screen/admin/Book'
import Personnel from './screen/admin/Personnel'
import './App.css'

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<AppLayout />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/reports" element={<Reports />} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomeAdmin />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'patients',
        element: <Patient />,
      },
      {
        path: 'personnel',
        element: <Personnel />,
      },
      {
        path: 'book',
        element: <Book />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
