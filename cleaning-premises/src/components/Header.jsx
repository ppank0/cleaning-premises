import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './../styles/header.css';
import Home from './../pages/Home'
import Brigades from '../pages/Brigades';

const Header = () => {
    return ( 
        <>
        
            <Router>
            <div className="header-container">
                <h1 className="header-title">Cleaning Premises</h1>
                {/* <div > */}
                <label htmlFor="navbar-toggle" className="burger-icon">&#9776;</label>
                    <ul className="nav-list">
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/brigades">Бригады</Link></li>
                    <li><Link to="/schedule">График работ</Link></li>
                    <li><Link to="/rooms">Помещения</Link></li>
                    </ul>
                {/* </div> */}
            </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route exect path='/brigades' element={<Brigades/>}/>
                    {/* <Route exect path='/schedule' element={}/>
                    <Route exect path='/rooms' element={}/> */}
                </Routes>
            </Router>
        </>
        
     );
}
 
export default Header;