import React from 'react'
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Route,Router,Routes } from 'react-router-dom'
import { Intro } from './components/Intro'
import { UserType } from './Pages/UserType'



import Footer from './components/Footer'
import CustomerPage from './Pages/CustomerPage'
import { FcContacts } from 'react-icons/fc'
import Contact from './Pages/Contact'
import RetailerPage from './Pages/RetailerPage'
import Header from './components/Header'


const App = () => {

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500); 
    return () => clearTimeout(timer); 
  }, []);

  if (showSplash) {
    return (
       <Intro/>
    );
  }

  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<UserType/>}/>
      <Route path="/customer" element={<CustomerPage/>}/>
      <Route path='/contact' element = {<Contact/>} />
      <Route path='/retailer' element = {<RetailerPage/>}  />
      </Routes>
      <Footer/>
    
    </div>
  )
}

export default App