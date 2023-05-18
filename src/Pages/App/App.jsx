import { useRoutes, BrowserRouter } from "react-router-dom"

import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Singin from '../Singin'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "my-acount", element: <MyAccount /> },
    { path: "my-order", element: <MyOrder /> },
    { path: "my-orders", element: <MyOrders /> },
    { path: "/*", element: <NotFound /> },
    { path: "sing-in", element: <Singin /> },
  ])
  return routes
}

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
