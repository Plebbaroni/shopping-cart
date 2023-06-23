import './css/App.css';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { Navbar } from "./components/navbar";
import { Homepage } from "./pages/homepage";
import Main from "./components/main";

function App() {
  return (
    <div className='appWrapper'>
        <div className="App">
          <Router>
            <Navbar />
            <Main />
          </Router>
      </div>
    </div>
  );
}

export default App;
