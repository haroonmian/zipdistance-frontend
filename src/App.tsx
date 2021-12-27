import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RoutesConstent } from './constents/routes'
import Store from './store'
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <Store>
        <BrowserRouter>
          <Routes>
            <Route path={RoutesConstent.home} element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </Store>
    </div>
  )
}

export default App
