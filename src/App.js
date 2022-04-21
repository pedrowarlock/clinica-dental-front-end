import './Reset.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
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
            {/* <TempRouter /> */}
          </div>
          <footer><Footer /></footer>
        </main>
      </Router>
    </div>
  )
}



export default App;