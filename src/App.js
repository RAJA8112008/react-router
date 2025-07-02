import logo from './logo.svg';
import './App.css';
import {NavLink ,Route,Routes } from 'react-router-dom';
import Support from './Components/Support';
import NoFound from './Components/NoFound';
import Labs from './Components/Labs';
import Home from './Components/Home';
import About from './Components/About';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/support' >Support</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/labs'>Labs</NavLink>
          </li>
        </ul>
      </nav>
     <Routes>
      <Route path='/' element={<Home/>}>
      <Route path='/support' element={<Support/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/labs' element={<Labs/>}/>
      <Route path='*' element={<NoFound/>}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
