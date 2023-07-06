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
import UserProfile from './pages/user-profile';
import { ModalProvider } from "./contexts/modal.context";
import { AuthProvider } from "./contexts/auth.context";
import Logout from './pages/logout';
import ForgotPassword from './components/forgot-password/forgot-password.component';
import ResetPassword from "./components/reset-password/reset-password"
import 'react-tooltip/dist/react-tooltip.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <AuthProvider>
        <ModalProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/place/:placeId' element={<Place/>} />
            <Route path='/user/:userId' element={<UserProfile/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/help' element={<Help/>} />
            <Route path='/contact' element={<ContactPage/>} />
            <Route path='/site-guidelines' element={<SiteGuidelines/>} />
            <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
            <Route path='/copyright-policy' element={<CopyrightPolicy/>} />
            <Route path='/terms-of-service' element={<TermsOfService/>} />
            <Route path='/forgot-password' element={<ForgotPassword/>} />
            <Route path='/reset-password/:linkId' element={<ResetPassword/>} />
          </Routes>
        </ModalProvider>
      </AuthProvider>
      

      <Footer/>
    </Router>
  );
};

export default App;


// Tasks
// - Make simple user profile
//    - Name
//    - Password
// - Add time stamp to review card
// - Add agree/disagree to review card
// - Link to sign up modal in the sign in modal and vice versa
// - Make option to edit and delete review only the user who created it
// - Make Nav bar show the user instead of the sign in buttons when user is signed in