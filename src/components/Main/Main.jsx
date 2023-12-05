import React from "react";
import ExchangeForm from "./exchangeForm";

function Main(props) {
    return (
        <main>
            <div className="asdasd">
                <div className="trade">
                    <div className="trade__text">
                        <h1>Exchange cryptocurrency quickly and at the best rate.</h1>
                        <p>We offer a rate better than 1000+ other exchangers.</p>
                    </div>
                    <div className="trade__window_1">
                        <button className="window_button">Exchange</button>
                        <div className="trade__window">
                            <ExchangeForm />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main