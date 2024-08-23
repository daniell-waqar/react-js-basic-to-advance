
import './App.css';

import { NavLink, Route , Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Labs from './components/Labs'
import Support from './components/Support'
import NotFound from './components/NotFound'
import MainHeader  from './components/MainHeader';

function App() {

  
  return (
    <div className="App">


      <nav>

        <ul>

          <li>
            <NavLink to="/" > Home </NavLink>
          </li>

          
          <li>
            <NavLink to="/about" > About </NavLink>
          </li>

          
          <li>
            <NavLink to="/support" > Support</NavLink>
          </li>

          
          <li>
            <NavLink to="/labs" > Labs </NavLink>
          </li>

        </ul>

      </nav>

      <Routes>
      {/* Parent Route */}
        <Route path="/" element={<MainHeader/>} />       

        {/* Default Route  */}
        <Route index element={<Home/> } />

        <Route path="/about" element={<About/>}/>
        <Route path="/support" element={ <Support/>} />
        <Route path="/labs" element={<Labs/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
