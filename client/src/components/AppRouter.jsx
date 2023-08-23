import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Details from '../pages/Details'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Miperfil from '../pages/Miperfil'

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='product/:id' element={<Details />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='/miperfil' element={<Miperfil/>} />
        </Routes>
    </div>
  )
}

export default AppRouter