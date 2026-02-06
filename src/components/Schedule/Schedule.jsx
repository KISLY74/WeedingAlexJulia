import "./Schedule.scss";

export default function Schedule() {
    return (
        <section className="schedule">
            <h1>План дня</h1>

            <div className="timeline">
                <div className="icon-circle">
                    <img src="/images/map.png" alt="map" />
                </div>
                <div className="event-block">
                    <div className="line"></div>
                    <div className="event-content">
                        <div className="time">15:00</div>
                        <div className="title">Сбор гостей</div>
                        <div className="desc">Собираясь на торжество, возьмите с собой улыбки и хорошее настроение </div>
                    </div>
                </div>

                {/* <div className="heart-separator">💗</div> */}

                <div className="icon-circle">
                    <img src="/images/rings.png" alt="rings" />
                </div>
                <div className="event-block">
                    <div className="line"></div>
                    <div className="event-content">
                        <div className="time">15:30</div>
                        <div className="title">Торжественная регистрация</div>
                        <div className="desc">Приготовьте платочки для трогательного момента</div>
                    </div>
                </div>

                {/* <div className="heart-separator">💗</div> */}

                <div className="icon-circle">
                    <img src="/images/banket.png" alt="banket" />
                </div>
                <div className="event-block">
                    <div className="line"></div>
                    <div className="event-content">
                        <div className="time">16:30</div>
                        <div className="title">Начало банкета</div>
                        <div className="desc">Время вкусной еды, танцев и развлечения</div>
                    </div>
                </div>

                {/* <div className="heart-separator">💗</div> */}

                <div className="icon-circle">
                    <img src="/images/moon.png" alt="hearts" />
                </div>
                <div className="event-block">
                    <div className="line"></div>
                    <div className="event-content">
                        <div className="time">00:00</div>
                        <div className="title">Завершение вечера</div>
                        <div className="desc">Спасибо,что разделили с нами этот день. Далее аферпати</div>
                    </div>
                </div>

                <div className="icon-circle">
                    <img src="/images/hearts.png" alt="rings" />
                </div>

            </div>
        </section>
    );
}
