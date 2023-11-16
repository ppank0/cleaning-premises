import { Route, Router, Routes } from 'react-router-dom';
import './../styles/header.css'

const Header = () => {
    return ( 
        <>
            <div className="header-container">
                <h1 className="header-title">Cleaning Premises</h1>
                {/* <div > */}
                <label for="navbar-toggle" className="burger-icon">&#9776;</label>
                    <ul className="nav-list">
                        <li><a href="/">Главная</a></li>
                        <li><a href="/brigades">Бригады</a></li>
                        <li><a href="/schedule">График работ</a></li>
                        <li><a href="/rooms">Помещения</a></li>
                    </ul>
                {/* </div> */}
            </div>

            {/* <Router>
                <Routes>
                    <Route exect path='/' element={}/>
                    <Route exect path='/brigades' element={}/>
                    <Route exect path='/schedule' element={}/>
                    <Route exect path='/rooms' element={}/>
                </Routes>
            </Router> */}
        </>
        
     );
}
 
export default Header;