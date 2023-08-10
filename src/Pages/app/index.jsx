import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from '../home'
import MyOrder from '../MyOrder'
import NotFound from '../NotFound/notfound'
import Orders from '../Orders'
import SignIn from '../SignIn/signin'
import Navbar from '../../Components/navbar'
import { ShoppingCartProvider } from '../../Context'

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/*', element: <NotFound/>},
    {path: '/orders', element: <Orders/>},
    {path: '/sign-in', element: <SignIn/>},
  ])
  return routes
}

function App() {

  return (
    <ShoppingCartProvider>
        <BrowserRouter>
            <AppRoutes/>
            <Navbar/>
        </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
