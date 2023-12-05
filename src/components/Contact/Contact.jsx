import React from 'react'

export default function Contact() {
    return (
        <div className="main3">
            <div className="mediafull1 container mb-4">
                <div className="row mt-4">
                    <div className="col-md-12 mb-4">
                        <div className="card m-0 w-100" style={{ height: "auto" }}>
                            <p className="p-3 m-0">
                                Contact </p>
                            <hr style={{ margin: "0" }} />
                            <div className="p-3">
                                <div className="user-account">
                                    <div className="tradewidget">
                                        <div className="trademain1" style={{ background: "#fff", height: "-webkit-fill-available" }}>
                                            <h3
                                                style={{ textAlign: "center", marginTop: "15px", fontWeight: "400", color: "#1a1a1a" }}>
                                                Enter your destination address
                                            </h3>
                                            <form onSubmit={()=>window.location.reload()}>
                                                <input type="text" name="name" className="adress1" placeholder="Your name"
                                                    required="" />
                                                <input type="email" name="email" className="adress1"
                                                    placeholder="Your email address" required="" />
                                                <input type="text" name="subject" className="adress1" placeholder="Subject"
                                                    required="" />
                                                <input type="text" id="message" name="message" className="adress11"
                                                    style={{ height: "115px" }} placeholder="Message" required="" />
                                                <button className="letsgo" name="bit_send" value="1">
                                                    Send message </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
