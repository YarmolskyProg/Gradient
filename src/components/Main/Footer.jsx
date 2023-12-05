import React from "react";
import { Link } from "react-router-dom";
function Footer(props) {
    return (
        <footer>
            <div className="mediafull1 container">
                <div className="valuta">
                    <div className="preimus">
                        <h5 className="m10">Quick Links</h5>
                        <p className="preimT m10">
                            <Link className="af" to="/testimonials">Testimonials</Link>
                        </p>
                    </div>
                    <div className="preimus">
                        <h5 className="m10">Terms & Support</h5>
                        <p className="preimT m10">
                            <Link className="af" to="/terms">Terms of services</Link>
                        </p>
                        <p className="preimT m10">
                            <Link className="af" to="/policy">Privacy Policy</Link>
                        </p>
                        <p className="preimT m10">
                            <Link className="af" to="/about">About</Link>
                        </p>
                        <p className="preimT m10">
                            <Link className="af" to="/contact">Contact</Link>
                        </p>
                    </div>
                    <div className="preimus">
                        <h5 className="m10">Language</h5>
                        <p className="preimT m10"><a className="af" >English</a></p>

                        <h5 className="m10">Address</h5>
                        <p className="preimT m10">
                            Presnen. embankment, 12 <br />
                            Moscow, Russian Federation<br />
                            123100
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer