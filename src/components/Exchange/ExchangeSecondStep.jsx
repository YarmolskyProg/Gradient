import React from 'react'
import { useSelector } from 'react-redux'

export default function ExchangeSecond() {

    const state = useSelector(state => {
        return state.coin
    })
    return (
        <div className="trademain order-md-last order-first">
            <div className="w-100" id="bit_exchange_results"></div>
            <form id="bit_exchange_form" name="bit_exchange_form">
                <div className="superpuperflex">
                    <div className="kruzhki">
                        <div className="kruzhi__item">
                            <div className="kruzhki__item_in">
                                <p className="kruzhki__text">1</p>
                            </div>
                        </div>
                        <div className="kruzhki_strelka"></div>
                        <div className="kruzhi__item">
                            <div className="kruzhki__item_in">
                                <p className="kruzhki__text">2</p>
                            </div>
                        </div>
                        <div className="kruzhki_strelka_noactive"></div>
                        <div className="kruzhi__item_noactive">
                            <div className="kruzhki__item_in_noactive">
                                <p className="kruzhki__text">3</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 style={{ textAlign: "center", marginTop: "15px", fontWeight: "900", color: "midnightblue" }}>
                    Send {state.coinamount} {state.activecoin.shortname}
                </h3>
                <h6 style={{ textAlign: "center", marginTop: "4px", fontWeight: "400", color: "#1a1a1a" }}>
                    Carefully check the details of the application and send the assets in one transaction
                </h6>
                <h6 style={{ textAlign: "left", overflowWrap: "break-word", marginTop: "20px", fontWeight: "900", color: "#1a1a1a", width: "70%", marginLeft: "15%" }}>
                    Username Revolut or Wallet:
                </h6>
                <h5 style={{ textAlign: "left", wordWrap: "break-word", marginTop: "5px", fontWeight: "400", color: "#1a1a1a", width: "70%", marginLeft: "15%" }}>
                    {state.cardnumber}
                </h5>
                <h6 style={{ textAlign: "left", overflowWrap: "break-word", marginTop: "20px", fontWeight: "900", color: "#1a1a1a", width: "70%", marginLeft: "15%" }}>
                    Last name:
                </h6>
                <h5 style={{ textAlign: "left", wordWrap: "break-word", marginTop: "5px", fontWeight: "400", color: "#1a1a1a", width: "70%", marginLeft: "15%" }}>
                    {state.lastname}
                </h5>
                <h6 style={{ textAlign: "left", overflowWrap: "break-word", marginTop: "20px", fontWeight: "900", color: "#1a1a1a", width: "70%", marginLeft: "15%" }}>
                    First name:
                </h6>
                <h5 style={{ textAlign: "left", wordWrap: "break-word", marginTop: "5px", fontWeight: "400", color: "#1a1a1a", width: "70%", marginLeft: "15%" }}>
                    {state.firstname}
                </h5>
                <h6 style={{ textAlign: "left", overflowWrap: "break-word", marginTop: "20px", fontWeight: "900", color: "#1a1a1a", width: "70%", marginLeft: "15%" }}>
                    Address for send
                    <span style={{ color: "blue", cursor: "pointer" }} onClick={() => { navigator.clipboard.writeText(state.activecoin.address) }}>
                        (copy)
                    </span>
                </h6>
                <h5 style={{ textAlign: "left", wordWrap: "break-word", marginTop: "5px", fontWeight: "400", color: "#1a1a1a", width: "70%", marginLeft: "15%" }}>
                    {state.activecoin.address}
                </h5>
                <button className="letsgo" disabled style={{ cursor: "initial" }}>Waiting for payment</button>
            </form>
        </div>
    )
}
