import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Program from './components/Program/Program'
import Contact from "./components/Contact/Contact"
import Speaker from "./components/Speakers/Speaker"
import Header from './components/Header/Header'
import Notice from './components/Notice/Notice'

function App() {


  return (
    <>
    
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/notice' element={<Notice/>} />
    <Route path='/program' element={<Program/>} />
    <Route path='/speaker' element={<Speaker/>} />
    </Routes>
     <Footer/>
    </>
  )
}

export default App



