import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import Work from './Work';

const App = () => {
  return(
    <div>
      <Navbar/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;