import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.css'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import Fiche from './pages/Fiche'
import Error from './components/Error'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fiche/:homeId" element={<Fiche />} />
        <Route path="*" element={<Error />} />
      </Routes>      
    <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

