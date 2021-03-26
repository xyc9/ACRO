import React from 'react';
import { FormBlock, FormStatic, SliderSimple } from '../partials'


import ImgWhy1 from '../img/whyImg1.jpg'
import ImgWhy2 from '../img/whyImg2.jpg'
import ImgWhy3 from '../img/whyImg3.jpg'


const Partner = (props) => {
    return <>
            <div className="partners__wrapper">
            <section className="partners-advantages section">
                <div className="partners-advantages__content">
                    <div className="title">
                        Преимущества сотрудничества с ACRE
                    </div>
                    <div className="subtitle">
                        Как это работает?
                    </div>
                    <ul className="list">
                        <li className="list__item">
                            <div className="list__item-title">1. Вы знакомы с человеком?</div>
                            <div className="list__item__content">
                                Наши исследовательские отчеты покрывают рынок офисной
                                недвижимости, а также инвестиционный
                                рынок в Москве и России.
                            </div>
                        </li>
                        <li className="list__item">
                            <div className="list__item-title">2. Позвоните нам</div>
                            <div className="list__item__content">
                                Наши специалисты имеют за плечами большой опыт
                                работы как с российскими, так и европейскими
                                компаниями в сфере коммерческой недвижимости.
                            </div>
                        </li>
                        <li className="list__item">
                            <div className="list__item-title">3. Заработайте от 5 до 20% комиссии</div>
                            <div className="list__item__content">
                                Ежегодно наша команда ведет переговоры относительно
                                сдачи в аренду или продажи десятков тысяч
                                квадратных метров офисных помещений.
                            </div>
                        </li>
                    </ul>
                    <div className="phone">
                        <div className="phone__text mb-text">Остались вопросы? Звоните!</div>
                        <a href="tel:74958220052" className="phone__tel">+7 (495) 822-00-52</a>
                    </div>
                </div>
                <div className="partners-advantages__form">
                    <FormBlock/>
                </div>
            </section>
            <section className="section variation">
                <div className="title">
                    Типы недвижимости
                    и ваша комиссия
                </div>
                <SliderSimple partners/>
            </section>
            <section className="why section">
                <div className="title">
                    Почему мы?
                </div>
                <ul className="why__content">
                    <li className="why__content-item">
                        <div className="item-img__wrapper">
                            <img className="img" src={ImgWhy1} alt=""/>
                        </div>
                        <div className="item-content">
                            <div className="title">
                                Бред и репутация
                            </div>
                            <div className="text">
                                Команда ACRE гарантирует помощь своим клиентам при выборе
                                помещения, обеспечивая высочайший сервис обслуживания.
                                Мы соблюдаем и защищаем интересы своих клиентов.
                                Компания дорожит своей репутацией, поэтому старается
                                поддерживать положительное мнение о своей работе,
                                формируя доверительные отношения с участниками процесса.
                            </div>
                        </div>
                    </li>
                    <li className="why__content-item">
                        <div className="item-content">
                            <div className="title">
                                Выгодные условия для всех сторон
                            </div>
                            <div className="text">
                                Участвуя в работе по подбору недвижимости, мы понимаем,
                                что каждая сделка представляет собой взаимовыгодное
                                отношение. Наша команда ищет такой сценарий, который
                                в долгосрочной перспективе, сформирует крепкое
                                сотрудничество между сторонами, участвующих в процессе.
                            </div>
                        </div>
                        <div className="item-img__wrapper">
                            <img className="img" src={ImgWhy2} alt=""/>
                        </div>
                    </li>
                    <li className="why__content-item">
                        <div className="item-img__wrapper">
                            <img className="img" src={ImgWhy3} alt=""/>
                        </div>
                        <div className="item-content">
                            <div className="title">
                                Гарантия конфиденциальности
                            </div>
                            <div className="text">
                                Основываясь на принципе доверия, информация, которую
                                предоставляет клиент компании, будет полностью конфиденциальной
                                и не передается третьим лицам. Заполняя заявку, клиент оставляет
                                только контактные данные для связи с ним. Конфиденциальность информации
                                гарантируется как во время сделки, так и по ее завершению.
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="phone">
                    <div className="mb-text">Остались вопросы? Звоните!</div>
                    <a href="tel:74958220052" className="phone-number">+7 (495) 822-00-52</a>
                </div>
            </section>
            <FormStatic/>
            </div>
        </>
};


export default Partner;
