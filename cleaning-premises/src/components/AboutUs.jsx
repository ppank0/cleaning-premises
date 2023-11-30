import './../styles/aboutUs.css'

const AboutUs = () => {
    return ( 
        <>
            {/* <img src="https://sun6-22.userapi.com/s/v1/ig2/t-iRNNDqyJ6UIQkPg8hAI21eqwicuo2fGClxlEAvdM4q8yeTN3b3-_pOL5q5dqNvFwo_IzYp70v8jcnHK5uRHeAz.jpg?size=1030x1030&quality=95&crop=59,475,1030,1030&ava=1" alt="" /> */}
            <div id="about-us">
                <h2>О нас</h2>
                <p>
                Мы команда профессионалов, специализирующихся на предоставлении высококачественных услуг по учету уборки помещений.
                 Наша цель - обеспечить чистоту и комфорт в каждом помещении, с которым мы работаем.
                </p>
                <p>
                Мы осознаем важность безупречной чистоты для создания приятной и здоровой среды для наших клиентов.
                 Наша команда обладает экспертизой в области организации уборки, использования эффективных средств и техник для
                  достижения наилучших результатов.
                </p>
                <p>
                Мы работаем с различными типами помещений, включая офисы, медицинские учреждения, рестораны,
                 отели и другие коммерческие объекты. Наш подход основан на индивидуальной оценке потребностей каждого клиента
                  и разработке оптимального плана уборки.
                </p>

                
                
                <div id="carouselExampleInterval" className="carousel slide w-100" data-bs-ride="carousel" >
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                      <div className="aboutUs-scroll_text first">
                        Чистота начинается с нас!
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                      <div className="aboutUs-scroll_text second">
                        Превратим хаос в гармонию.
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="aboutUs-scroll_text third">
                        Чистота - ключ к успеху.
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
              </div>


                <p>
                Наша команда состоит из опытных специалистов, которые обладают глубоким знанием в области уборки и соблюдают
                 высокие стандарты профессионализма. Мы используем современные технологии и инструменты, чтобы обеспечить
                  эффективность и качество нашей работы.
                </p>
                <p>
                Мы гордимся тем, что создаем здоровую и безопасную среду для наших клиентов,
                 а также способствуем повышению их производительности и удовлетворенности. Мы стремимся к долгосрочным партнерским отношениям,
                  основанным на доверии и взаимном понимании.
                </p>
            </div>
        </>
     );
}
 
export default AboutUs;