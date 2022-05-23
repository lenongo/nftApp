import './styles/App.css';
import Header from './components/header.js';
import Gallery from './components/gallery.js';
import Content from './components/content'
import Team from './components/team.js';
import Footer from './components/footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MediaQuery from "react-responsive";



const Ui = () => {
  return (
    <div className='ui-container'>
      <MediaQuery query="(max-width: 780px)">
        <ui className="header-ui-smart">
          <AnchorLink href='#App-header' className='header-home 1'>Home</AnchorLink>
          <AnchorLink href='#content-container' className='header-home 2'>Odoshi PJ</AnchorLink>
          <AnchorLink href='#gallery-container' className='header-home 3'>NFT</AnchorLink>
          <AnchorLink href='#team-container' className='header-home 4'>Our Team</AnchorLink>
        </ui>
      </MediaQuery>
      <MediaQuery query="(min-width: 781px)">
        <ui className="header-ui">
          <AnchorLink href='#App-header' className='header-home 1'>Home</AnchorLink>
          <AnchorLink href='#content-container' className='header-home 2'>Odoshi PJ</AnchorLink>
          <AnchorLink href='#gallery-container' className='header-home 3'>NFT</AnchorLink>
          <AnchorLink href='#team-container' className='header-home 4'>Our Team</AnchorLink>
        </ui>
      </MediaQuery>
    </div>
  )
}




function App() {
  return (

    <div className="App">
      <BrowserRouter basename=''>
        <Routes>
          <Route path="/" element={<>
            <Ui />
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

export default App;