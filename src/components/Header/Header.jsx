import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header-photo-block">
        <div className="photo-frame">
          <div className="photo-frame-container">
            <h1>Wedding---</h1>
            <h2>29 | 07 | 26</h2>
            <div className="child-photos">
              <img src="/images/photo.png" alt="" />
            </div>
            {/* <div className="child groom">
              <span>жених</span>
              <img src="src\assets\Alex.png" alt="жених" />
            </div>
            <div className="child bride">
              <span>невеста</span>
              <img src="src\assets\Julia.png" alt="невеста" />
            </div> */}
          </div>
        </div>
      </div>

      <div className="header-intro">
        <h1>Дорогие родные и друзья!</h1>
        <p>Узнаете этих детишек?</p>
        <p>Да-да, это мы!</p>
        <p>
          Время пролетело очень быстро, представляете? И вот уже совсем скоро
          состоится самое важное событие в нашей жизни — мы станем одной семьей!
        </p>
      </div>

      <div className="header-calendar">
        <table className="calendar-table">
          <tbody>
            <tr>
              <td>
                <div className="calendar-cell hide">
                  <div className="weekday">Вторник</div>
                  <div className="month">Июля</div>
                  <div className="day">28</div>
                </div>
              </td>
              <td>
                <div className="calendar-cell">
                  <div className="weekday">Среда</div>
                  <div className="month">Июля</div>
                  <div className="day active">29</div>
                </div>
              </td>
              <td>
                <div className="calendar-cell hide">
                  <div className="weekday">Четверг</div>
                  <div className="month">Июля</div>
                  <div className="day">30</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </header>
  );
}
