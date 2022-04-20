import './Reset.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Snake from './pages/SnakeGame/Snake'
import Portfolio from './pages/Profile/Portfolio'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Calculadora from './pages/Calculator/calculator'
import SideBar from './components/SideBar/SideBar';

function App() {
  const [openMenuIndex, setOpenMenuIndex] = useState(false);

  const ToggleMenuSide = () => {
    setOpenMenuIndex(!openMenuIndex)
  }
  console.log(openMenuIndex)

  return (
    <div className='APP'>
      <Router>
        <aside id={openMenuIndex ? "toggleSideBar" : ""}><SideBar /></aside>
        <main id={openMenuIndex ? "toggleContent" : ""}>
          <header><Header toggleMenu={ToggleMenuSide} /></header>

          <div className="page-content">
            <TempRouter />
          </div>
          <footer><Footer /></footer>
        </main>
      </Router>
    </div>
  )
}


function TempRouter() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/calculadora" element={<Calculadora />} />
      <Route path="/snake" element={<Snake />} />
    </Routes>
  )
}

export default App;