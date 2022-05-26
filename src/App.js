import './styles/App.css';
import Header from './components/header.js';
import Gallery from './components/gallery.js';
import Content from './components/content.js';
import Roadmap from './components/roadmap.js';
import Team from './components/team.js';
import Footer from './components/footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MediaQuery from "react-responsive";
import * as ReactDOM from 'react-dom';
import HomeIcon from '@mui/icons-material/Home';
import { Drawer } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ImageIcon from '@mui/icons-material/Image';
import logo from './public/logo.jpg';


const Ui = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen); // Drawer の開閉状態を反転
  };
  
  return (
    <div className='ui-container'>
      <MediaQuery query="(max-width: 780px)">
        <Drawer variant="temporary" open={drawerOpen} onClose={handleDrawerToggle}>
          <List>
            <ListItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>
                <AnchorLink style={{ textDecoration: 'none' }} href='#App-header' className='header-home 2'>Home</AnchorLink>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <AnchorLink style={{ textDecoration: 'none' }} href='#content-container' className='header-home 2'>Odoshi PJ</AnchorLink>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ImageIcon />
              </ListItemIcon>
              <AnchorLink style={{ textDecoration: 'none' }} href='#gallery-container' className='header-home 3'>NFT</AnchorLink>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PeopleAltIcon />
              </ListItemIcon>
              <AnchorLink style={{ textDecoration: 'none' }} href='#team-container' className='header-home 4'>Our Team</AnchorLink>
            </ListItem>
          </List>
        </Drawer>
        <ui className="header-ui-smart">
          <MenuIcon fontSize="large" onClick={handleDrawerToggle} />
        </ui>
      </MediaQuery>
      <MediaQuery query="(min-width: 781px)">
        <ui className="header-ui">
          <AnchorLink style={{ textDecoration: 'none' }} href='#App-header' className='header-home-0'>
            <img className='Logo' src={logo} alt="logo"/>
          </AnchorLink>
          <AnchorLink style={{ textDecoration: 'none' }} href='#App-header' className='header-home 1'>Home</AnchorLink>
          <AnchorLink style={{ textDecoration: 'none' }} href='#content-container' className='header-home 2'>Odoshi PJ</AnchorLink>
          <AnchorLink style={{ textDecoration: 'none' }} href='#gallery-container' className='header-home 3'>NFT</AnchorLink>
          <AnchorLink style={{ textDecoration: 'none' }} href='#team-container' className='header-home 4'>Our Team</AnchorLink>
        </ui>
      </MediaQuery>
    </div>
  )
}


function App() {
  function MainContent() {
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
            </>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  function Spinner() {
    return (
      <div class="wrapper">
        <div class="sk-folding-cube">
          <div class="sk-cube1 sk-cube"></div>
          <div class="sk-cube2 sk-cube"></div>
          <div class="sk-cube4 sk-cube"></div>
          <div class="sk-cube3 sk-cube"></div>
        </div>
      </div>
    )
  }

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false
      }
    }
    componentDidMount() {
      // あえてローディング（スピナー）を表示するため5秒待機
      // 5秒後loadingのStateをTrueに変更
      setTimeout(() => this.setState({ loading: true }), 3000);
    }
    render() {
      return (
        <div>
          {this.state.loading ? (<MainContent />) : (<Spinner />)}
        </div>
      )
    }
  }
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

export default App;