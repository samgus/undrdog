import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import SignInPage from './pages/signin';
import Signup from './pages/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignInPage/>} />
        <Route path='/sign-up' element={<Signup/>} />
      </Routes>
    </Router>
  );
};

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           This is UNDRDOG! A place for restaurant workers can post 
//           about their experiences at their establishment that they currently 
//           or previously worked at. People will know ahead of time how much 
//           they can make, if they are respected by their co-workers, managers, 
//           the owner, and the guests of the restaurant.
//         </p>
//         <a
//           className="App-link"
//           href="https://www.ratemyprofessors.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Rate My Professors for reference
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

