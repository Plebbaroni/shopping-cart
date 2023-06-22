import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar";
import { Homepage } from "./components/homepage";

function App() {
  return (
    <div className='appWrapper'>
        <div className="App">
          <Router>
          <Navbar />
          <Homepage />
          </Router>
      </div>
    </div>
  );
}

export default App;
