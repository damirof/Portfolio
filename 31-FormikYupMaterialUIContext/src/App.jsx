import { Home } from '@mui/icons-material'
import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'

const App = () => {
  return (
    <div>
      <Home />
      <Login />
      <Register />
      <Products />
    </div>
  )
}

export default App