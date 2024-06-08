import React, { useEffect } from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Services from './Components/Services';
import About from './Components/About';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import './App.css';


function App() {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      header.classList.toggle("sticky", window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuToggle = () => {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
  };

  return (
    <div className="App">
      <Header  menuToggle={menuToggle}/>
      <Banner />
      <Services />
      <About />
      <Portfolio />
      <Team />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
