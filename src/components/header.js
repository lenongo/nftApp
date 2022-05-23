import bg from '../public/background.jpeg';
import bgsmart from '../public/bg-smart.jpeg';
import maingirl from '../public/odoshi-girl.png';
import '../styles/header.css';
import '../styles/App.css';
import MediaQuery from "react-responsive";
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Header() {
  return (
    <header className="App-header" id="App-header">
      <MediaQuery query="(max-width: 600px)">
        <img src={bgsmart} className="Header-BG-smart" alt="BackGround" />
        <p className='Title-very-smart'>Odoshi Project</p>
        <img src={maingirl} className="Odoshi-girl-verysmart" alt="Girl" />
      </MediaQuery>
      <MediaQuery query="(max-width: 780px) and (min-width: 601px)">
        <img src={bgsmart} className="Header-BG-smart" alt="BackGround" />
        <p className='Title-smart'>Odoshi Project</p>
        <img src={maingirl} className="Odoshi-girl-smart" alt="Girl" />
      </MediaQuery>
      <MediaQuery query="(max-width: 1080px) and (min-width: 781px)">
        <img src={bg} className="Header-BG" alt="BackGround" />
        <p className='Title-smart'>Odoshi Project</p>
        <img src={maingirl} className="Odoshi-girl-middle" alt="Girl" />
      </MediaQuery>
      <MediaQuery query="(min-width: 1081px)">
        <img src={bg} className="Header-BG" alt="BackGround" />
        <img src={maingirl} className="Odoshi-girl" alt="Girl" />
        <p className='Title'>Odoshi Project</p>
        <ui className="header-ui">
          <AnchorLink href='#App-header' className='header-home 1'>Home</AnchorLink>
          <AnchorLink href='#content-container' className='header-home 2'>Odoshi PJ</AnchorLink>
          <AnchorLink href='#gallery-container' className='header-home 3'>NFT</AnchorLink>
          <AnchorLink href='#team-container' className='header-home 4'>Our Team</AnchorLink>
          <a href='#' className='header-home 5'>Home</a>
        </ui>
      </MediaQuery>
    </header>
  );
}

export default Header;