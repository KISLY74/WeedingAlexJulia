import "./Footer.scss"
import Timer from "../Timer/Timer"

export default function Footer() {

    return <footer className="footer">
        <div className="footer-container">
            <h1>Ждём вас <br />через...</h1>
            <div className="footer-content">
                <Timer />
                <img src="/images/photo_ft.png" alt="" />
            </div>
        </div>
    </footer>
}