import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RouteLayout from './ui/RouteLayout'
import Home from './feature/Home'

const router = createBrowserRouter([{

path:'/',
element:<RouteLayout/>,
children:[
{index:true, element:<Home/>},
{path:'about', element:<Home/>},
{path:'services', element:<Home/>}



]



}



])
const App = () => {
 
  return <RouterProvider router={router}/>
}

export default App
