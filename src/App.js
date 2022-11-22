import React from 'react';
import { Footer, Possibility, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';


const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        {/* <Possibility /> */}
        <CTA />
        <Footer />
    </div>
  )
}

export default App;