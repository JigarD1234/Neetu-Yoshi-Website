import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Route  , Routes} from 'react-router-dom'
import Home from './components/homepage/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App