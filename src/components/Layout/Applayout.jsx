import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../UI/Header'

const AppLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
)}

export default AppLayout