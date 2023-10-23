import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import { Router, Route, Routes ,  browserHistory, IndexRoute } from 'react-router'
import { HashRouter } from 'react-router-dom'
import HomePage from './components/HomePage';

function App() {

  return (
    <div className='App'>
      <HashRouter>
        <Navigation></Navigation>
        <div className = "content">
          <Routes>
              <Route path = "/" element = {<HomePage/>} ></Route>
              <Route path = "/About" element = {<About/>}></Route>
              <Route path = "/Projects" element = {<About/>}></Route>
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
