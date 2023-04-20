import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseContent from './components/CourseContent';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';
import {Router , Route}  from 'react-router-dom';

function App() {
  return (
   <>
    <Navbar />
    <Hero />
    <CourseContent />
    <Newsletter />
    <Cards />
    <Footer />
    </>
  )
}

export default App;