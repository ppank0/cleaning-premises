import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './../styles/header.css';
import Home from './../pages/Home'
import Brigades from '../pages/Brigades';
import SchedulePage from '../pages/SchedulePage';
import RoomPage from './../pages/RoomPage'

const Header = () => {
    return ( 
        <>
        
            <Router>
            {/* <div className="">
                <h1 className="header-title"></h1>
                <label htmlFor="navbar-toggle" className="burger-icon">&#9776;</label>
                    <ul className="nav-list">
                    <li><Link to="/"></Link></li>
                    <li><Link to=""></Link></li>
                    <li><Link to=""></Link></li>
                    <li><Link to=""></Link></li>
                    </ul>
            </div> */}


            <nav class="navbar navbar-expand-lg  header-container">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Cleaning Premises</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link " active aria-current="page" href="/">Главная</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/brigades">Бригады</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/schedule">График работ</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href='/rooms'>Помещения</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route exect path='/brigades' element={<Brigades/>}/>
                    <Route exect path='/schedule' element={<SchedulePage/>}/>
                    <Route exect path='/rooms' element={<RoomPage/>}/> 
                </Routes>
            </Router>
        </>
        
     );
}
 
export default Header;