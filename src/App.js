//import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {BrowserRouter,Route, Routes, NavLink} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="m-3 d-flex justify-content-center">Employee Mangement System</h3>

      <nav className="anvbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-itm- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Home">
              Home
            </NavLink>
          </li>
          <li className="nav-itm- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Department">
              Department
            </NavLink>
          </li>
          <li className="nav-itm- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Employee">
              Employee
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Department' element={<Department/>}/>
        <Route path='/Employee' element={<Employee/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
