import React, { useState } from "react";
import './../styles/questionsPage.css'
import Footer from "../components/Footer";

const QuestionsPage = () => {
    return ( 
        <>
        <div className="question-container">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Какие услуги уборки помещений вы предоставляете?
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Мы предоставляем широкий спектр услуг по уборке помещений. Включая ежедневную уборку, генеральную уборку, мойку окон, пылесос, уборку ковров, уборку после ремонта и другие специализированные услуги по запросу.</div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Какие методы и средства уборки вы используете?
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Мы используем современные методы и профессиональные средства уборки. Наша команда опытных уборщиков работает с высококачественными моющими средствами, эффективными пылесосами, современными инструментами и оборудованием, чтобы обеспечить чистоту и гигиену в вашем помещении.</div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Какие меры безопасности вы принимаете во время уборки?
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Мы придерживаемся строгих мер безопасности во время уборки. Наши сотрудники используют защитные средства, такие как перчатки и маски, чтобы обеспечить безопасность и предотвратить распространение инфекций. Мы также следим за правильным использованием и хранением уборочных средств, чтобы минимизировать риск для окружающей среды и здоровья людей.</div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Каковы ваши графики работы и гибкость в расписании уборки?
                    </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Мы предлагаем гибкие графики работы, чтобы соответствовать вашим потребностям. Мы можем организовать ежедневную, еженедельную, либо другую регулярную уборку в удобное для вас время. Также мы можем предложить дополнительные уборочные услуги по запросу.</div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    Какие типы помещений вы убираете?
                    </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Мы убираем различные типы помещений, включая офисы, квартиры, дома, магазины, рестораны, отели, медицинские учреждения и многое другое. Независимо от типа помещения, мы готовы предоставить профессиональные услуги уборки.</div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    Как заказать уборку?
                    </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Вы можете заказать уборку, связавшись с нашей командой по указанному контактному номеру или электронной почте. Мы предоставим вам информацию о доступных услугах и ответим на все ваши вопросы. Что касается стоимости услуг, она может варьироваться в зависимости от типа помещения, его размера, уровня сложности и других факторов. Мы готовы предоставить вам предварительную оценку стоимости после ознакомления с вашими требованиями.</div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
        </>
     );
}
 
export default QuestionsPage;