import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { MyContextProvider } from './contexts/MyContext'
import Home from './pages/Home'
import Exo2 from './pages/Exo2'
import Exo3 from './pages/Exo3'
import Exo4 from './pages/Exo4'

function App() {

  const rooter = createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'/exo2', element: <Exo2/>},
    {path:'/exo3', element: <Exo3/>},
    {path:'/exo4', element: <Exo4/>},
    
  ])

  return (
    <>
    <MyContextProvider>
      <RouterProvider router={rooter}/>
    </MyContextProvider>
    </>
  )
}

export default App
