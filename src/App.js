import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about'
import Help from './pages/help';
import ContactPage from './pages/contact';
import SiteGuidelines from './pages/site-guidelines';
import TermsOfService from './pages/terms-of-service';
import PrivacyPolicy from './pages/privacy-policy';
import CopyrightPolicy from './pages/copyright-policy';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import NavBar from './components/nav-bar/nav-bar.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/help' element={<Help/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/site-guidelines' element={<SiteGuidelines/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path='/copyright-policy' element={<CopyrightPolicy/>} />
        <Route path='/terms-of-service' element={<TermsOfService/>} />
        <Route path='/sign-in' element={<SignInPage/>} />
        <Route path='/sign-up' element={<SignUpPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;