import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import { Router, Route, Routes ,  browserHistory, IndexRoute } from 'react-router'
import { HashRouter } from 'react-router-dom'
import HomePage from './components/HomePage';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';

function App() {

  return (
    <div className='App'>
      <HashRouter>
        <Navigation></Navigation>
        <div className = "content">
          <Routes>
              <Route path = "/" element = {<HomePage/>} ></Route>
              <Route path = "/About" element = {<About/>}></Route>
              <Route path = "/Projects" element = {<Projects/>}></Route>
              <Route path = "/ContactMe" element = {<ContactMe/>}></Route>
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
