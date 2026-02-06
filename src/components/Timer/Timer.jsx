import { useEffect, useState } from "react";
import "./Timer.scss";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2026-07-29T15:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <div className="t-block">
        <span>{timeLeft.days}</span>
        <p>дней</p>
      </div>
      <div className="t-block">
        <span>{timeLeft.hours}</span>
        <p>часов</p>
      </div>
      <div className="t-block">
        <span>{timeLeft.minutes}</span>
        <p>минут</p>
      </div>
      <div className="t-block">
        <span>{timeLeft.seconds}</span>
        <p>секунд</p>
      </div>
    </div>
  );
}
