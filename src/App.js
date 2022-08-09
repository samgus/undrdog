import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is UNDRDOG! A place for restaurants working can post 
          about their experiences at their establishment. People will 
          know ahead of time how much they can make, if they are respected 
          by their co-workers, managers, the owner, and the guests of the 
          restaurant.
        </p>
        <a
          className="App-link"
          href="https://www.ratemyprofessors.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rate My Professors for reference
        </a>
      </header>
    </div>
  );
}

export default App;
