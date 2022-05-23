import './styles/App.css';
import Header from './components/header.js';
import Gallery from './components/gallery.js';
import Content from './components/content'
import Team from './components/team.js';
import Footer from './components/footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom'
import React from 'react'


function App() {
  return (

    <div className="App">
      <BrowserRouter basename=''>
        <Routes>
          <Route path="/" element={<>
            <Header />
            <Content />
            <Gallery />
            <Team />
            <Footer />
          </>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App