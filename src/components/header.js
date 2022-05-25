import bg from '../public/background.jpg';
import bgsmart from '../public/bg-smart.jpg';
import maingirl from '../public/odoshi-girl2.png';
import '../styles/header.css';
import '../styles/App.css';
import MediaQuery from "react-responsive";
import '../styles/App.css';

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
      </MediaQuery>
    </header>
  );
}

export default Header;