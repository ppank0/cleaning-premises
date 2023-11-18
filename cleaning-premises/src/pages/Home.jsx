import Footer from './../components/Footer'
import Header from './../components/Header'
import AboutUs from '../components/AboutUs';
import './../styles/home.css';

const Home = () => {
    return ( 
        <>
             <AboutUs/>
             <div className="features">
                <h2>Преимущества</h2>
                <ul>
                    <li>Высокий стандарт чистоты и качественная уборка</li>
                    <li>Персонализированный подход к каждому клиенту</li>
                    <li>Опытная команда профессионалов</li>
                    <li>Использование экологически чистых средств и технологий</li>
                    <li>Гибкий график работы и конкурентные цены</li>
                </ul>
            </div>
            <Footer/>
        </>
     );
}
 
export default Home;