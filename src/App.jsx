import React from 'react'
import '../src/styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Fresh_Fish from './pages/Fresh_Fish'
import Sea_food from './pages/Sea_food'
import Small_fish from './pages/Small_fish'

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fresh-fish" element={<Fresh_Fish />} />
        <Route path="/sea-food" element={<Sea_food />} />
        <Route path="/small-fish" element={<Small_fish />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
