


// function App() {
//   return (
//     <>
//     <div>
//       <h1>My app</h1>
    
//     </div>

//     </>
//   )
// }

// export default App

import { useState } from 'react'


import './App.css'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App