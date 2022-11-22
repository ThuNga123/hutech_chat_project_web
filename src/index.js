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
import Products from './screen/admin/Products'
import HomeAdmin from './screen/admin/HomeAdmin'
import Reports from './screen/admin/Reports'
import Navbar from './components/Admin/Navbar'
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
        path: 'products',
        element: <Products />,
      },
      {
        path: 'reports',
        element: <Reports />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
