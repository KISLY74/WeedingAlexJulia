import { useState } from "react";
import "./EnvelopeIntro.scss";

export default function EnvelopeIntro({ onFinish }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => onFinish(), 3500);
  };

  return (
    <div className="envelope-screen">
      <div className="wrapper">

        {/* Корпус конверта — единственная маска */}
        <div className="envelope-body"></div>

        {/* Письмо — выше корпуса */}
        <div className={`letter ${opened ? "open" : ""}`}>
          <p>Вы приглашены<br />на свадьбу 💗</p>
        </div>

        {/* Flap — самый верхний слой */}
        <div className={`open-flap ${opened ? "open" : ""}`}></div>

        {/* Кнопка */}
        {!opened && (
          <button className="open-btn" onClick={handleOpen}>
            Открыть
          </button>
        )}

      </div>
    </div>
  );
}
