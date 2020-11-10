import React from 'react'
import './App.css';
import Header from './component/header/Header';
import Search from './component/search/Search';
import Footer from './component/footer/Footer';



function App() {
  return (
    <div className='app__container' >
      
      <Header/>
      <Search/>
      <Footer />
      
    </div>
  )
}

export default App

