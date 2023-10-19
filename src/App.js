import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import { BrowserRouter as Router, Route, Link, Routes,  Outlet  } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation></Navigation>
        <div className = "content">
          <Routes>
              <Route path = "/Portfolio" element = {<HomePage/>} ></Route>
              <Route path = "/Portfolio/About" element = {<About/>}></Route>
              <Route></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
