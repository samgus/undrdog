import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<SignInPage/>} />
        <Route path='/sign-up' element={<SignUpPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
