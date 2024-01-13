import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './../styles/header.css';
import Home from './../pages/Home'
import Brigades from '../pages/Brigades';
import SchedulePage from '../pages/SchedulePage';
import RoomPage from './../pages/RoomPage'
import QuestionsPage from '../pages/QuestionsPage';

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


            <nav className="navbar navbar-expand-lg  header-container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Cleaning Premises</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link " active aria-current="page" href="/">Главная</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/brigades">Бригады</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/schedules">График работ</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href='/rooms'>Помещения</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href='/questions'>Вопрос-Ответ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route exect path='/brigades' element={<Brigades/>}/>
                    <Route exect path='/schedules' element={<SchedulePage/>}/>
                    <Route exect path='/rooms' element={<RoomPage/>}/> 
                    <Route exect path='/questions' element={<QuestionsPage/>}/> 
                </Routes>
            </Router>
        </>
        
     );
}
 
export default Header;