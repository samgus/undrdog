import './App.css';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import NavBar from './components/nav-bar/nav-bar.component';
import { BrowserRouter as Router } from 'react-router-dom';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
}

function App() {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = value => {
    setCurrentValue(value)
  };

  const handleMouseOver = value => {
    setHoverValue(value)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  return (
    <Router>
    <div style={styles.container}>
      <NavBar />
      <h2>Rate your Restaurant</h2>
      <div style={styles.stars}>
        {stars.map((_,index) => {
          return (
            <FaStar 
              key={index}
              size={24}
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
              color={(hoverValue || currentValue) > index ? colors.orange: colors.grey}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          )
        })}
      </div>
      <textarea 
        placeholder="What's your feedback"
        style={styles.textarea}
      />
      <button style={styles.button}>Submit</button>
    </div>
    </Router>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    margin: "20px 0",
    minHeight: 100,
    padding: 10
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10
  }
}

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

