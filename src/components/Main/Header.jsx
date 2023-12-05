import React, { useState } from "react";
import { Link } from "react-router-dom";
function Header(props) {
    const [burger, setburger] = useState(false);
    return (
        <>
            <div className="support_tg">
                <a href="https://t.me/criptosupport19" target="_blank">
                    <img src="/images/sup_img.png" alt="" />
                </a>
            </div>
            <div className="asdasd">
                <header>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand text-light mt-2 mb-2" to="/" >OBMEN 24</Link>
                            <button className="navbar-toggler" type="button" onClick={() => setburger(!burger)}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={burger ? "navbar-collapse" : "collapse navbar-collapse"} id="navbarSupportedContent">
                                <ul className="navbar-nav mb-2 mb-lg-0 mt-0">
                                    <li className="nav-item">
                                        <Link className="nav-link text-light asd1" to="/testimonials">Testimonials</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light asd1" to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
}
export default Header