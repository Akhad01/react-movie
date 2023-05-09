import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Detail from './pages/detail/Detail'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Catalog />} />
        <Route path="/:category/search/:query" element={<Catalog />} />
        <Route path="/:category/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
