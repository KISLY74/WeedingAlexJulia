import { useState } from "react";
import "./Venue.scss";

export default function Venue() {
    const [showMap, setShowMap] = useState(false);

    return (
        <section className="venue">
            <h1>Место проведения</h1>
            <p>Торжество состоится в уютной усадьбе Голд</p>
            <p>Адрес: Волковичи, переулок Поселковый 15б, Минск, Республика Беларусь</p>
            <p>Начало: 15:00</p>

            <button className="map-button" onClick={() => setShowMap(!showMap)}>
                На карте 
                {/* <img className="heart-icon" src="/images/heartsbut.png" alt="heart"/> */}
            </button>

            <div className={`map-wrapper ${showMap ? "open" : "closed"}`}>
                <iframe src="https://www.google.com/maps?q=Волковичи,+переулок+Поселковый+15б,+Минск,+Беларусь&output=embed" allowFullScreen loading="lazy" ></iframe>
            </div>
        </section>
    );
}
