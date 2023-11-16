import './../styles/footer.css'

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer_contact-info">
                <h3>Контакты</h3>
                <p>Телефон: 123-456-7890</p>
                <p>Email: info@example.com</p>
                <p>Адрес: ул. Примерная, 123, Город</p>
            </div>
            <div className="footer_about-us">
                <h3><a className='footer-a' href="#about-us">«О нас»</a></h3>
                {/* <p>Мы специализируемся на учете и управлении уборкой помещений. Наша команда предоставляет инновационные решения для эффективного контроля и планирования уборки, чтобы помочь вам поддерживать чистоту и порядок.</p> */}
            </div>
            <div className="footer_social-links">
                <h3>Мы в социальных сетях</h3>
                    <ul>
                        <li><a className='footer-a' href="https://www.facebook.com/example">Facebook</a></li>
                        <li><a className='footer-a' href="https://www.twitter.com/example">Twitter</a></li>
                        <li><a className='footer-a' href="https://www.instagram.com/example">Instagram</a></li>
                    </ul>
            </div>
    </footer>
     );
}
 
export default Footer;