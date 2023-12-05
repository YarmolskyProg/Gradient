import React from 'react'

export default function LastChange() {
    return (
        <div className="asdasd">
            <div className="listItems" style={{ marginTop: "15px !important" }}>
                <p className="recent">Latest exchanges</p>
                <div className="rectr">

                    <div className="itemcr">
                        <img alt="" className="cryptologo" src="uploads/1651576915_icon.png" style={{ borderRadius: "50%" }} />
                        <span>XRP →</span>
                        <img alt="" className="cryptologo" src="assets/icons/Litecoin.png" style={{ borderRadius: "50%" }} />
                        <span>LTC</span>
                        <p className="infoscore">323 XRP → 2.295561 LTC</p>
                    </div>
                    <div className="itemcr">
                        <img alt="" className="cryptologo" src="uploads/1650747140_icon.png"
                            style={{ borderRadius: "50%" }} /> <span>EUR →</span> <img alt="" className="cryptologo"
                                src="uploads/1651576915_icon.png" style={{ borderRadius: "50%" }} /> <span>XRP</span>
                        <p className="infoscore">11226 EUR → 22586.712 XRP</p>
                    </div>
                    <div className="itemcr">
                        <img alt="" className="cryptologo" src="uploads/1651609273_icon.png"
                            style={{ borderRadius: "50%" }} /> <span>TRX →</span> <img alt="" className="cryptologo"
                                src="assets/icons/Litecoin.png" style={{ borderRadius: "50%" }} /> <span>LTC</span>
                        <p className="infoscore">614 TRX → 0.565187 LTC</p>
                    </div>
                    <div className="itemcr">
                        <img alt="" className="cryptologo" src="uploads/1650747297_icon.png"
                            style={{ borderRadius: "50%" }} /> <span>USDT →</span> <img alt="" className="cryptologo"
                                src="uploads/1650747140_icon.png" style={{ borderRadius: "50%" }} /> <span>EUR</span>
                        <p className="infoscore">3513 USDT → 3527.052 EUR</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
