import React from 'react'
import  ReactDOM  from 'react-dom/client'
import Header from './utils/HeaderAndFooter/Header'
import Home from './components/Home'
import './css/App.css'
import { createBrowserRouter , Outlet , RouterProvider } from 'react-router-dom'
import Cart from './components/Cart'
import ErrorPage from './components/ErrorPage'
import RestaurantDetail from './components/RestaurantDetail'
import CousinePage from './components/CousinePage'
import { Provider } from 'react-redux'
import appStore from "./Redux/appStore"
import SignUp from './components/SignUp'
import Login from './components/login'

function App() {
  return (
    <div>
     <Provider store={appStore}>
     <Header></Header>
     <Outlet/>
     </Provider>
    </div>
  )
}

const router = createBrowserRouter([{
  path:'/',
  element : <App/>,
  children : [
    {
      path : '/',
      element : <Home/>
    },
    
    {
      path : '/cart',
      element : <Cart/>
    },
    {
      path : '/restaurant/:id',
      element : <RestaurantDetail/>
    },
    {
      path : '/collections/:text',
      element : <CousinePage/>
    },
    {
      path : '/signup',
      element : <SignUp/>,
    },
    {
      path : '/login',
      element : <Login/>
    }
  ],
 

  errorElement : <ErrorPage/>
}])

 const root = ReactDOM.createRoot(document.getElementById("root"))
 root.render(
    
  <RouterProvider router={router}/> 
);



