import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Contact from "./components/Contact/Contact"

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
     <Footer/>
    </>
  )
}

export default App



