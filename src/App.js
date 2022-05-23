import './styles/App.css';
import Header from './components/header.js';
import Gallery from './components/gallery.js';
import Content from './components/content'
import Team from './components/team.js';
import Footer from './components/footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename='odoshipj'>
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

export default App;
