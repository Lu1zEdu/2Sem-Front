
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import EditarProdutos from './Routes/EditarProdutos/Index.tsx'
import Error from './Routes/Error/Index.tsx'
import Home from './Routes/Home/Index.tsx'
import Produtos from './Routes/Produtos/Index.tsx'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/Produtos',
        element: <Produtos />,
        errorElement: <Error />,
      },
      {
        path: '/Produtos/Editar/:Id',
        element: <EditarProdutos />,
        errorElement: <Error />,
      }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>,
)
