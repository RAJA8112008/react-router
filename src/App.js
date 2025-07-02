import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
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
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/support' >Support</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/labs'>Labs</Link>
          </li>
        </ul>
      </nav>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/support' element={<Support/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/labs' element={<Labs/>}/>
      <Route path='*' element={<NoFound/>}/>
     </Routes>
    </div>
  );
}

export default App;
