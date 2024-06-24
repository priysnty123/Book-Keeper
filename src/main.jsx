import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './components/Root.jsx'
import Mycollection from './components/Mycollection.jsx'
import App from './App'
import { BooksProvider } from './context/BookProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/Book-Keeper/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <App exact />,
      },
      {
        path: 'my-collection',
        element: <Mycollection />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BooksProvider>
      <RouterProvider router={router} />
    </BooksProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
