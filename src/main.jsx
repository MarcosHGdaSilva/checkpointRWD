import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ModeloCarro from './routes/ModeloCarro/Modelo.jsx'
import Distribuidoras from './routes/Distribuidoras/Distribuidoras.jsx'
import QuemSomos from './routes/QuemSomos/QuemSomos.jsx'
import Home from './routes/Home/Home.jsx'
import Error from './routes/Error/Erro.jsx'
import Cadastro from './routes/Cadastro/Cadastro.jsx'
import Login from './routes/Login/TelaLogin.jsx'

{/* <Route path="/TelaLogin">
//           <TelaLogin setAuthenticated={setAuthenticated} />
//         </Route>
//         <Route path="/Modelo">
//           {authenticated ? <Modelo /> : <Redirect to="/TelaLogin" />}
//         </Route>
//         <Route path="/" exact>
//           <Home />
//         </Route> */}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Login',
        element: <Login /> 
      },
      {
        path: '/Cadastro',
        element: <Cadastro /> 
      },
      {
        path: '/ModeloCarro',
        element: <ModeloCarro /> 
      },
      {
        path: '/QuemSomos',
        element: <QuemSomos /> 
      },
      {
        path: '/Distribuidoras',
        element: <Distribuidoras /> 
      }
      ]
    }
 ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
