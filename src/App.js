import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Place from './pages/place';
import About from './pages/about'
import Help from './pages/help';
import ContactPage from './pages/contact';
import SiteGuidelines from './pages/site-guidelines';
import TermsOfService from './pages/terms-of-service';
import PrivacyPolicy from './pages/privacy-policy';
import CopyrightPolicy from './pages/copyright-policy';
import NavBar from './components/nav-bar/nav-bar.component';
import Footer from './components/footer/footer.component';
import { ModalProvider } from "./contexts/modal.context";

function App() {
  return (
    <Router>
      <NavBar />
      <ModalProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/place/:placeId' element={<Place/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/help' element={<Help/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/site-guidelines' element={<SiteGuidelines/>} />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='/copyright-policy' element={<CopyrightPolicy/>} />
          <Route path='/terms-of-service' element={<TermsOfService/>} />
        </Routes>
      </ModalProvider>

      <Footer/>
    </Router>
  );
};

export default App;